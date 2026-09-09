import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

const TAXA_ENTREGA = 6.90

export default async function RoutesPedidos(app) {

  // Todas as rotas de pedido exigem usuário logado —
  // o token vem do header Authorization: Bearer <token>
  app.addHook('preHandler', async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      return reply.status(401).send({ mensagem: 'Não autorizado. Faça login novamente.' })
    }
  })

  // POST /pedidos/criar
  // body: {
  //   tipo: 'ENTREGA' | 'PRESENCIAL',
  //   formaPagamento: 'PIX' | 'CARTAO' | 'DINHEIRO',
  //   itens: [{ produtoId, quantidade }],
  //   enderecoId?: number,
  //   endereco?: { rua, numero, bairro, cidade, estado, cep }
  // }
  app.post('/criar', async (request, reply) => {
    const usuarioId = request.user.id
    const { tipo, formaPagamento, itens, enderecoId, endereco } = request.body

    if (!tipo || !['ENTREGA', 'PRESENCIAL'].includes(tipo)) {
      return reply.status(400).send({ mensagem: 'Informe um tipo de pedido válido (ENTREGA ou PRESENCIAL).' })
    }

    if (!formaPagamento || !['PIX', 'CARTAO', 'DINHEIRO'].includes(formaPagamento)) {
      return reply.status(400).send({ mensagem: 'Informe uma forma de pagamento válida.' })
    }

    if (!Array.isArray(itens) || itens.length === 0) {
      return reply.status(400).send({ mensagem: 'O pedido precisa ter pelo menos um item.' })
    }

    if (tipo === 'ENTREGA' && !enderecoId && !endereco) {
      return reply.status(400).send({ mensagem: 'Informe o endereço de entrega.' })
    }

    // busca os produtos no banco para pegar o preço real (nunca confiar no preço do front)
    const produtoIds = itens.map(i => i.produtoId)
    const produtos = await prisma.produto.findMany({
      where: { id: { in: produtoIds } }
    })

    if (produtos.length !== new Set(produtoIds).size) {
      return reply.status(400).send({
        mensagem: 'Um ou mais produtos do pedido não foram encontrados.'
      })
    }

    const indisponivel = produtos.find(p => !p.disponivel)

    if (indisponivel) {
      return reply.status(400).send({
        mensagem: `O produto "${indisponivel.nome}" não está mais disponível.`
      })
    }

    const itensParaCriar = itens.map(i => {
      const produto = produtos.find(p => p.id === i.produtoId)

      return {
        produtoId: produto.id,
        quantidade: i.quantidade,
        precoUnitario: produto.preco
      }
    })

    const subtotal = itensParaCriar.reduce(
      (soma, i) => soma + Number(i.precoUnitario) * i.quantidade,
      0
    )

    const total = tipo === 'ENTREGA'
      ? subtotal + TAXA_ENTREGA
      : subtotal

    try {
      const pedido = await prisma.$transaction(async (tx) => {
        let enderecoIdFinal = enderecoId ?? null

        if (tipo === 'ENTREGA' && !enderecoIdFinal && endereco) {
          const novoEndereco = await tx.endereco.create({
            data: {
              ...endereco,
              usuarioId
            }
          })

          enderecoIdFinal = novoEndereco.id
        }

        const criado = await tx.pedido.create({
          data: {
            usuarioId,
            tipo,
            total,
            enderecoId: enderecoIdFinal,
            itens: {
              create: itensParaCriar
            },
            pagamento: {
              create: {
                forma: formaPagamento,
                valor: total
              }
            },
            ...(tipo === 'ENTREGA'
              ? {
                  entrega: {
                    create: {}
                  }
                }
              : {})
          },

          include: {
            itens: {
              include: {
                produto: true
              }
            },
            pagamento: true,
            entrega: true,
            endereco: true
          }
        })

        // limpa os itens do carrinho do usuário após finalizar o pedido
        await tx.itemCarrinho.deleteMany({
          where: {
            carrinho: {
              usuarioId
            }
          }
        })

        return criado
      })

      return reply.status(201).send({
        mensagem: 'Pedido realizado com sucesso!',
        pedido
      })

    } catch (err) {
      request.log.error(err)

      return reply.status(500).send({
        mensagem: 'Não foi possível criar o pedido.'
      })
    }
  })

  // GET /pedidos/listar
  //
  // ALTERAÇÃO: antes retornava só os pedidos do próprio usuário.
  // Agora, se quem está chamando é ADMIN, retorna TODOS os pedidos da loja
  // (com os dados do cliente incluídos), para alimentar o painel admin.
  // Um cliente comum continua vendo só o próprio histórico, como antes.
  app.get('/listar', async (request, reply) => {
    const usuarioId = request.user.id
    const isAdmin = request.user.role === 'ADMIN'

    const pedidos = await prisma.pedido.findMany({
      where: isAdmin ? {} : { usuarioId },
      orderBy: { criadoEm: 'desc' },
      include: {
        usuario: {
          select: { id: true, nome: true, email: true, telefone: true }
        },
        itens: {
          include: {
            produto: true
          }
        },
        pagamento: true,
        entrega: true,
        endereco: true
      }
    })

    return reply.status(200).send({ pedidos })
  })

  // GET /pedidos/:id
  app.get('/:id', async (request, reply) => {
    const id = Number(request.params.id)

    const pedido = await prisma.pedido.findUnique({
      where: { id },
      include: {
        usuario: {
          select: { id: true, nome: true, email: true, telefone: true }
        },
        itens: {
          include: {
            produto: true
          }
        },
        pagamento: true,
        entrega: true,
        endereco: true
      }
    })

    if (!pedido) {
      return reply.status(404).send({
        mensagem: 'Pedido não encontrado.'
      })
    }

    if (
      pedido.usuarioId !== request.user.id &&
      request.user.role !== 'ADMIN'
    ) {
      return reply.status(403).send({
        mensagem: 'Você não tem acesso a este pedido.'
      })
    }

    return reply.status(200).send({ pedido })
  })

  // PUT /pedidos/:id/status
  const STATUS_VALIDOS = [
    'AGUARDANDO',
    'EM_PREPARO',
    'PRONTO',
    'ENTREGUE',
    'CANCELADO'
  ]

  app.put('/:id/status', async (request, reply) => {
    if (request.user.role !== 'ADMIN') {
      return reply.status(403).send({
        mensagem: 'Apenas administradores podem alterar o status do pedido.'
      })
    }

    const id = Number(request.params.id)
    const { status } = request.body

    if (!STATUS_VALIDOS.includes(status)) {
      return reply.status(400).send({
        mensagem: 'Status inválido.'
      })
    }

    const pedidoExiste = await prisma.pedido.findUnique({
      where: { id }
    })

    if (!pedidoExiste) {
      return reply.status(404).send({
        mensagem: 'Pedido não encontrado.'
      })
    }

    const pedido = await prisma.pedido.update({
      where: { id },
      data: { status },
      include: {
        itens: {
          include: {
            produto: true
          }
        },
        pagamento: true,
        entrega: true,
        endereco: true
      }
    })

    return reply.status(200).send({
      mensagem: 'Status atualizado com sucesso!',
      pedido
    })
  })

}