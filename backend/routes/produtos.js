import { PrismaClient } from '../generated/prisma/index.js'
import supabase from "../supabase.js";

const prisma = new PrismaClient();

export default async function RoutesProdutos(app) {

  // ----- Cadastrar -----
  // URL: POST /produtos/cadastrar
  app.post('/cadastrar', async (request, reply) => {

    const { nome, descricao, preco, imagemUrl, disponivel, categoriaId } = request.body

    const produto = await prisma.produto.create({
      data: {
        nome,
        descricao,
        preco,
        disponivel: disponivel ?? true,
        categoriaId,
        imagemUrl: null,
      }
    })

    if (imagemUrl) {
      const buffer = Buffer.from(imagemUrl, 'base64')
      const nomeArquivo = `produto-${produto.id}-${Date.now()}.jpg`

      const { data, error } = await supabase.storage
        .from('fotos-produtos')
        .upload(nomeArquivo, buffer, {
          contentType: 'image/jpeg',
          upsert: false
        })

      if (error) {
        return reply.status(500).send({ mensagem: 'Produto criado, mas erro ao salvar a foto.' })
      }

      const { data: urlData } = supabase.storage
        .from('fotos-produtos')
        .getPublicUrl(data.path)

      await prisma.produto.update({
        where: { id: produto.id },
        data: { imagemUrl: urlData.publicUrl }
      })

      produto.imagemUrl = urlData.publicUrl
    }

    return reply.status(201).send({
      mensagem: 'Produto cadastrado com sucesso!',
      id:          produto.id,
      nome:        produto.nome,
      descricao:   produto.descricao,
      preco:       produto.preco,
      imagemUrl:   produto.imagemUrl,
      disponivel:  produto.disponivel,
      categoriaId: produto.categoriaId,
    })
  })


  // ----- Listar todos -----
  // URL: GET /produtos/listar
  // URL: GET /produtos/listar?nome=bolo&disponivel=true
  app.get('/listar', async (request, reply) => {

    const { nome, disponivel, categoriaId } = request.query

    const produtos = await prisma.produto.findMany({
      where: {
        nome:        nome        ? { contains: nome, mode: 'insensitive' } : undefined,
        disponivel:  disponivel  !== undefined ? disponivel === 'true'     : undefined,
        categoriaId: categoriaId ? { equals: Number(categoriaId) }         : undefined,
      },
      include: { categoria: true }
    })

    return reply.status(200).send({ mensagem: 'Lista:', produtos })
  })


  // ----- Listar um só -----
  // URL: GET /produtos/listar/:id
  app.get('/listar/:id', async (request, reply) => {

    const { id } = request.params

    const produto = await prisma.produto.findUnique({
      where: { id: Number(id) },
      include: { categoria: true }
    })

    if (!produto) {
      return reply.status(404).send({ mensagem: 'Produto não encontrado.' })
    }

    return reply.status(200).send(produto)
  })


  // ----- Atualizar -----
  // URL: PUT /produtos/atualizar/:id
  app.put('/atualizar/:id', async (request, reply) => {
    try {

      const { id } = request.params
      const { nome, descricao, preco, imagemUrl, disponivel, categoriaId } = request.body

      const produtoExistente = await prisma.produto.findUnique({
        where: { id: Number(id) }
      })

      if (!produtoExistente) {
        return reply.status(404).send({ mensagem: 'Produto não encontrado.' })
      }

      let fotoUrl = produtoExistente.imagemUrl

      if (imagemUrl === null) {
        // Remover foto
        if (produtoExistente.imagemUrl) {
          const nomeArquivo = produtoExistente.imagemUrl.split('/').pop().split('?')[0]
          await supabase.storage.from('fotos-produtos').remove([nomeArquivo])
        }
        fotoUrl = null

      } else if (imagemUrl && !imagemUrl.startsWith('http')) {
        // Nova foto em base64 — apaga a anterior e sobe a nova
        if (produtoExistente.imagemUrl) {
          const nomeAntigo = produtoExistente.imagemUrl.split('/').pop().split('?')[0]
          await supabase.storage.from('fotos-produtos').remove([nomeAntigo])
        }

        const buffer = Buffer.from(imagemUrl, 'base64')
        const nomeArquivo = `produto-${id}-${Date.now()}.jpg`

        const { data, error } = await supabase.storage
          .from('fotos-produtos')
          .upload(nomeArquivo, buffer, { contentType: 'image/jpeg', upsert: false })

        if (error) {
          return reply.status(500).send({ mensagem: 'Erro ao fazer upload da foto.' })
        }

        const { data: urlData } = supabase.storage
          .from('fotos-produtos')
          .getPublicUrl(data.path)

        fotoUrl = urlData.publicUrl
      }

      const produtoAtualizado = await prisma.produto.update({
        where: { id: Number(id) },
        data: {
          nome,
          descricao,
          preco,
          disponivel:  disponivel  ?? produtoExistente.disponivel,
          categoriaId: categoriaId ?? produtoExistente.categoriaId,
          imagemUrl:   fotoUrl,
        }
      })

      return reply.status(200).send({
        mensagem:    'Produto atualizado com sucesso!',
        id:          produtoAtualizado.id,
        nome:        produtoAtualizado.nome,
        descricao:   produtoAtualizado.descricao,
        preco:       produtoAtualizado.preco,
        imagemUrl:   produtoAtualizado.imagemUrl,
        disponivel:  produtoAtualizado.disponivel,
        categoriaId: produtoAtualizado.categoriaId,
      })

    } catch (erro) {
      console.error('ERRO DETALHADO:', erro)
      return reply.status(500).send({ mensagem: erro.message })
    }
  })


  // ----- Excluir -----
  // URL: DELETE /produtos/excluir/:id
  app.delete('/excluir/:id', async (request, reply) => {

    const { id } = request.params

    const produtoExistente = await prisma.produto.findUnique({
      where: { id: Number(id) }
    })

    if (!produtoExistente) {
      return reply.status(404).send({ mensagem: 'Produto não encontrado.' })
    }

    if (produtoExistente.imagemUrl) {
      const nomeArquivo = produtoExistente.imagemUrl.split('/').pop().split('?')[0]
      await supabase.storage.from('fotos-produtos').remove([nomeArquivo])
    }

    await prisma.produto.delete({ where: { id: Number(id) } })

    return reply.status(200).send({ mensagem: 'Produto excluído com sucesso!' })
  })
}