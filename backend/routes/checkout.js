import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export default async function RoutesCheckout(app) {

  // POST /checkout/frete
  // body: { cep: "12345-678" }
  // Pública — não precisa de login para calcular frete
  app.post('/frete', async (request, reply) => {
    const { cep } = request.body

    if (!cep) {
      return reply.status(400).send({ mensagem: 'Informe o CEP.' })
    }

    // Remove tudo que não é número
    const cepLimpo = cep.replace(/\D/g, '')

    if (cepLimpo.length !== 8) {
      return reply.status(400).send({ mensagem: 'CEP inválido.' })
    }

    // Consulta a API gratuita ViaCEP
    const res  = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    const data = await res.json()

    if (data.erro) {
      return reply.status(404).send({ mensagem: 'CEP não encontrado.' })
    }

    // Tabela de frete simulada por estado
    // Em produção real: integraria com Correios, Jadlog, etc.
    const tabelaFrete = {
      SP: { valor: 6.90,  prazo: '1-2 dias úteis' },
      RJ: { valor: 12.90, prazo: '2-3 dias úteis' },
      MG: { valor: 10.90, prazo: '2-3 dias úteis' },
      PR: { valor: 14.90, prazo: '3-4 dias úteis' },
      RS: { valor: 16.90, prazo: '3-5 dias úteis' },
      SC: { valor: 15.90, prazo: '3-5 dias úteis' },
    }

    const frete = tabelaFrete[data.uf] ?? { valor: 19.90, prazo: '5-7 dias úteis' }

    return reply.status(200).send({
      endereco: {
        logradouro: data.logradouro,
        bairro:     data.bairro,
        cidade:     data.localidade,
        estado:     data.uf,
        cep:        cepLimpo
      },
      frete
    })
  })


  // POST /checkout/webhook
  // Rota pública — seria chamada automaticamente pelo gateway (Mercado Pago, Stripe)
  // Em produção real: o gateway envia uma assinatura no header para validar autenticidade
  app.post('/webhook', async (request, reply) => {
    const { pedidoId, status, externalId } = request.body

    // Validação básica
    if (!pedidoId || !status) {
      return reply.status(400).send({ mensagem: 'pedidoId e status são obrigatórios.' })
    }

    const statusValidos = ['PAGO', 'RECUSADO', 'ESTORNADO']
    if (!statusValidos.includes(status)) {
      return reply.status(400).send({ mensagem: 'Status inválido.' })
    }

    // Verifica se o pedido existe
    const pagamento = await prisma.pagamento.findUnique({
      where: { pedidoId: Number(pedidoId) }
    })

    if (!pagamento) {
      return reply.status(404).send({ mensagem: 'Pedido não encontrado.' })
    }

    // Atualiza o status do pagamento
    await prisma.pagamento.update({
      where: { pedidoId: Number(pedidoId) },
      data: {
        status,
        externalId: externalId ?? pagamento.externalId
      }
    })

    // Se pago, avança o pedido para EM_PREPARO automaticamente
    if (status === 'PAGO') {
      await prisma.pedido.update({
        where: { id: Number(pedidoId) },
        data: { status: 'EM_PREPARO' }
      })
    }

    // Se recusado ou estornado, cancela o pedido
    if (status === 'RECUSADO' || status === 'ESTORNADO') {
      await prisma.pedido.update({
        where: { id: Number(pedidoId) },
        data: { status: 'CANCELADO' }
      })
    }

    return reply.status(200).send({ mensagem: 'Status atualizado com sucesso.' })
  })

}