import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

// ✅ ADICIONADO — proteção admin
const autenticarAdmin = async (request, reply) => {
  try {
    await request.jwtVerify()
    if (request.user.role !== 'ADMIN') {
      return reply.status(403).send({ mensagem: 'Apenas administradores podem realizar esta ação.' })
    }
  } catch {
    return reply.status(401).send({ mensagem: 'Não autorizado.' })
  }
}

export default async function RoutesCategorias(app) {

  // GET /categorias/listar — pública
  app.get('/listar', async (request, reply) => {
    const categorias = await prisma.categoria.findMany()
    return reply.status(200).send({ categorias })
  })

  // POST /categorias/cadastrar — ✅ PROTEGIDO
  app.post('/cadastrar', { preHandler: autenticarAdmin }, async (request, reply) => {
    const { nome, descricao } = request.body

    if (!nome) {
      return reply.status(400).send({ mensagem: 'O nome da categoria é obrigatório.' })
    }

    const categoria = await prisma.categoria.create({
      data: { nome, descricao }
    })

    return reply.status(201).send({
      mensagem: 'Categoria cadastrada com sucesso!',
      categoria
    })
  })

}