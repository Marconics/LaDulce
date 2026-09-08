import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export default async function RoutesCarrinho(app) {

  const autenticar = async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch {
      return reply.status(401).send({ mensagem: 'Não autorizado.' })
    }
  }

  // Utilitário — busca ou cria o carrinho do usuário
  async function obterOuCriarCarrinho(usuarioId) {
    let carrinho = await prisma.carrinho.findUnique({
      where: { usuarioId },
      include: { itens: { include: { produto: true } } }
    })

    if (!carrinho) {
      carrinho = await prisma.carrinho.create({
        data: { usuarioId },
        include: { itens: { include: { produto: true } } }
      })
    }

    return carrinho
  }

  // GET /carrinho
  app.get('/', { preHandler: autenticar }, async (request, reply) => {
    const carrinho = await obterOuCriarCarrinho(request.user.id)

    const total = carrinho.itens.reduce((soma, item) => {
      return soma + Number(item.produto.preco) * item.quantidade
    }, 0)

    return reply.status(200).send({ carrinho, total })
  })

  // POST /carrinho/itens
  // body: { produtoId, quantidade }
  app.post('/itens', { preHandler: autenticar }, async (request, reply) => {
    const { produtoId, quantidade = 1 } = request.body

    if (!produtoId || quantidade < 1) {
      return reply.status(400).send({ mensagem: 'produtoId e quantidade são obrigatórios.' })
    }

    const produto = await prisma.produto.findUnique({ where: { id: produtoId } })
    if (!produto) {
      return reply.status(404).send({ mensagem: 'Produto não encontrado.' })
    }
    if (!produto.disponivel) {
      return reply.status(400).send({ mensagem: 'Produto indisponível.' })
    }

    const carrinho = await obterOuCriarCarrinho(request.user.id)

    const itemExistente = carrinho.itens.find(i => i.produtoId === produtoId)

    if (itemExistente) {
      // Produto já no carrinho — aumenta a quantidade
      const itemAtualizado = await prisma.itemCarrinho.update({
        where: { id: itemExistente.id },
        data: { quantidade: itemExistente.quantidade + quantidade },
        include: { produto: true }
      })
      return reply.status(200).send({ mensagem: 'Quantidade atualizada.', item: itemAtualizado })
    }

    // Produto novo — cria o item
    const item = await prisma.itemCarrinho.create({
      data: { carrinhoId: carrinho.id, produtoId, quantidade },
      include: { produto: true }
    })

    return reply.status(201).send({ mensagem: 'Item adicionado ao carrinho.', item })
  })

  // PUT /carrinho/itens/:productId
  // body: { quantidade }
  app.put('/itens/:productId', { preHandler: autenticar }, async (request, reply) => {
    const produtoId  = Number(request.params.productId)
    const { quantidade } = request.body

    if (!quantidade || quantidade < 1) {
      return reply.status(400).send({ mensagem: 'Informe uma quantidade válida (mínimo 1).' })
    }

    const carrinho = await obterOuCriarCarrinho(request.user.id)

    const item = carrinho.itens.find(i => i.produtoId === produtoId)
    if (!item) {
      return reply.status(404).send({ mensagem: 'Item não encontrado no carrinho.' })
    }

    const itemAtualizado = await prisma.itemCarrinho.update({
      where: { id: item.id },
      data: { quantidade },
      include: { produto: true }
    })

    return reply.status(200).send({ mensagem: 'Quantidade atualizada.', item: itemAtualizado })
  })

  // DELETE /carrinho/itens/:productId
  app.delete('/itens/:productId', { preHandler: autenticar }, async (request, reply) => {
    const produtoId = Number(request.params.productId)

    const carrinho = await obterOuCriarCarrinho(request.user.id)

    const item = carrinho.itens.find(i => i.produtoId === produtoId)
    if (!item) {
      return reply.status(404).send({ mensagem: 'Item não encontrado no carrinho.' })
    }

    await prisma.itemCarrinho.delete({ where: { id: item.id } })

    return reply.status(200).send({ mensagem: 'Item removido do carrinho.' })
  })
}