import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export default async function RoutesCategorias(app) {

  // GET /categorias/listar
  app.get('/listar', async (request, reply) => {
    const categorias = await prisma.categoria.findMany()
    return reply.status(200).send({ categorias })
  })

  // POST /categorias/cadastrar
  app.post('/cadastrar', async (request, reply) => {
    const { nome, descricao } = request.body

    const categoria = await prisma.categoria.create({
      data: { nome, descricao }
    })

    return reply.status(201).send({
      mensagem: 'Categoria cadastrada com sucesso!',
      categoria
    })
  })

}