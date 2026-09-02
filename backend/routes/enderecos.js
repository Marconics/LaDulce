import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export default async function RoutesEnderecos(app) {

  const autenticar = async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch {
      return reply.status(401).send({ mensagem: 'Não autorizado.' })
    }
  }


  // ----- Listar endereços do usuário logado -----
  // URL: GET /enderecos/listar
  app.get('/listar', { preHandler: autenticar }, async (request, reply) => {

    const enderecos = await prisma.endereco.findMany({
      where: { usuarioId: request.user.id }
    })

    return reply.status(200).send({ mensagem: 'Lista:', enderecos })
  })


  // ----- Criar endereço -----
  // URL: POST /enderecos/criar
  app.post('/criar', { preHandler: autenticar }, async (request, reply) => {

    const { rua, numero, bairro, cidade, estado, cep } = request.body

    if (!rua || !numero || !bairro || !cidade || !estado || !cep) {
      return reply.status(400).send({ mensagem: 'Todos os campos são obrigatórios: rua, numero, bairro, cidade, estado, cep.' })
    }

    const endereco = await prisma.endereco.create({
      data: {
        rua,
        numero,
        bairro,
        cidade,
        estado,
        cep,
        usuarioId: request.user.id
      }
    })

    return reply.status(201).send({ mensagem: 'Endereço criado com sucesso!', endereco })
  })


  // ----- Atualizar endereço -----
  // URL: PUT /enderecos/:id
  app.put('/:id', { preHandler: autenticar }, async (request, reply) => {

    const { id } = request.params
    const { rua, numero, bairro, cidade, estado, cep } = request.body

    const endereco = await prisma.endereco.findUnique({
      where: { id: Number(id) }
    })

    if (!endereco) {
      return reply.status(404).send({ mensagem: 'Endereço não encontrado.' })
    }

    if (endereco.usuarioId !== request.user.id) {
      return reply.status(403).send({ mensagem: 'Sem permissão para editar este endereço.' })
    }

    const enderecoAtualizado = await prisma.endereco.update({
      where: { id: Number(id) },
      data: {
        rua:    rua    ?? endereco.rua,
        numero: numero ?? endereco.numero,
        bairro: bairro ?? endereco.bairro,
        cidade: cidade ?? endereco.cidade,
        estado: estado ?? endereco.estado,
        cep:    cep    ?? endereco.cep,
      }
    })

    return reply.status(200).send({ mensagem: 'Endereço atualizado com sucesso!', endereco: enderecoAtualizado })
  })


  // ----- Excluir endereço -----
  // URL: DELETE /enderecos/:id
  app.delete('/:id', { preHandler: autenticar }, async (request, reply) => {

    const { id } = request.params

    const endereco = await prisma.endereco.findUnique({
      where: { id: Number(id) }
    })

    if (!endereco) {
      return reply.status(404).send({ mensagem: 'Endereço não encontrado.' })
    }

    if (endereco.usuarioId !== request.user.id) {
      return reply.status(403).send({ mensagem: 'Sem permissão para excluir este endereço.' })
    }

    await prisma.endereco.delete({ where: { id: Number(id) } })

    return reply.status(200).send({ mensagem: 'Endereço excluído com sucesso!' })
  })
}