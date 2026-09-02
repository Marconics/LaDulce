import { PrismaClient } from '../generated/prisma/index.js'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async function RoutesAuth(app) {

  // POST /auth/registrar
  app.post('/registrar', async (request, reply) => {
    const { nome, email, senha, telefone } = request.body

    const existe = await prisma.usuario.findUnique({ where: { email } })
    if (existe) return reply.status(400).send({ mensagem: 'E-mail já cadastrado.' })

    const hash = await bcrypt.hash(senha, 10)

    const usuario = await prisma.usuario.create({
      data: { nome, email, senha: hash, telefone }
    })

    return reply.status(201).send({
      mensagem: 'Cadastro realizado com sucesso!',
      id:    usuario.id,
      nome:  usuario.nome,
      email: usuario.email,
      role:  usuario.role,
    })
  })

  // POST /auth/login
  app.post('/login', async (request, reply) => {
    const { email, senha } = request.body

    const usuario = await prisma.usuario.findUnique({ where: { email } })
    if (!usuario) return reply.status(401).send({ mensagem: 'E-mail ou senha incorretos.' })

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
    if (!senhaCorreta) return reply.status(401).send({ mensagem: 'E-mail ou senha incorretos.' })

    const token = app.jwt.sign(
      { id: usuario.id, nome: usuario.nome, role: usuario.role },
      { expiresIn: '7d' }
    )

    return reply.status(200).send({
      mensagem: 'Login realizado com sucesso!',
      token,
      usuario: {
        id:    usuario.id,
        nome:  usuario.nome,
        email: usuario.email,
        role:  usuario.role,
      }
    })
  })

}