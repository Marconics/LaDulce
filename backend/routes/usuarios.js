import { PrismaClient } from '../generated/prisma/index.js'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async function RoutesUsuarios(app) {

  const autenticar = async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch {
      return reply.status(401).send({ mensagem: 'Não autorizado.' })
    }
  }


  // ----- Perfil -----
  // URL: GET /usuarios/perfil
  app.get('/perfil', { preHandler: autenticar }, async (request, reply) => {

    const usuario = await prisma.usuario.findUnique({
      where: { id: request.user.id },
      select: { id: true, nome: true, email: true, telefone: true, role: true, criadoEm: true }
    })

    if (!usuario) {
      return reply.status(404).send({ mensagem: 'Usuário não encontrado.' })
    }

    return reply.status(200).send({ mensagem: 'Perfil carregado.', usuario })
  })


  // ----- Atualizar dados -----
  // URL: PUT /usuarios/atualizar
  app.put('/atualizar', { preHandler: autenticar }, async (request, reply) => {

    const { nome, email, telefone } = request.body

    if (!nome && !email && !telefone) {
      return reply.status(400).send({ mensagem: 'Informe ao menos um campo para atualizar.' })
    }

    // Garante que o novo e-mail não pertença a outro usuário
    if (email) {
      const emailEmUso = await prisma.usuario.findFirst({
        where: { email, NOT: { id: request.user.id } }
      })
      if (emailEmUso) {
        return reply.status(409).send({ mensagem: 'E-mail já cadastrado por outro usuário.' })
      }
    }

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: request.user.id },
      data: {
        nome:     nome     ?? undefined,
        email:    email    ?? undefined,
        telefone: telefone ?? undefined,
      },
      select: { id: true, nome: true, email: true, telefone: true, role: true }
    })

    return reply.status(200).send({
      mensagem: 'Dados atualizados com sucesso!',
      usuario: usuarioAtualizado
    })
  })


  // ----- Trocar senha -----
  // URL: PUT /usuarios/senha
  app.put('/senha', { preHandler: autenticar }, async (request, reply) => {

    const { senhaAtual, novaSenha } = request.body

    if (!senhaAtual || !novaSenha) {
      return reply.status(400).send({ mensagem: 'Informe a senha atual e a nova senha.' })
    }

    if (novaSenha.length < 6) {
      return reply.status(400).send({ mensagem: 'A nova senha deve ter ao menos 6 caracteres.' })
    }

    const usuario = await prisma.usuario.findUnique({
      where: { id: request.user.id }
    })

    const senhaCorreta = await bcrypt.compare(senhaAtual, usuario.senha)
    if (!senhaCorreta) {
      return reply.status(401).send({ mensagem: 'Senha atual incorreta.' })
    }

    const hash = await bcrypt.hash(novaSenha, 10)

    await prisma.usuario.update({
      where: { id: request.user.id },
      data:  { senha: hash }
    })

    return reply.status(200).send({ mensagem: 'Senha alterada com sucesso!' })
  })
}