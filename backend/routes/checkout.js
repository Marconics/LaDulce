import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

// ─── CONFIGURAÇÃO DA LOJA ─────────────────────────────────────────────────────
// Coordenadas do centro de Taubaté — ponto de origem das entregas
const LOJA = { lat: -23.0264, lon: -45.5553 }

// Raio máximo de entrega em km
// 50km cobre: Tremembé, Pindamonhangaba, Caçapava, SJC, Campos do Jordão
const RAIO_MAXIMO_KM = 50

// Tabela de preço do frete
const FRETE_MINIMO  = 6.90   // valor mínimo cobrado
const FRETE_MAXIMO  = 25.00  // teto — nunca ultrapassa isso
const VALOR_POR_KM  = 0.30   // R$ 0,30 por km rodado

export default async function RoutesCheckout(app) {

  // POST /checkout/frete
  // body: { cep: "12345-678" }
  app.post('/frete', async (request, reply) => {
    const { cep } = request.body

    if (!cep) {
      return reply.status(400).send({ mensagem: 'Informe o CEP.' })
    }

    const cepLimpo = cep.replace(/\D/g, '')
    if (cepLimpo.length !== 8) {
      return reply.status(400).send({ mensagem: 'CEP inválido.' })
    }

    // ── PASSO 1: ViaCEP — busca cidade e estado pelo CEP ──────────────────────
    // API gratuita, sem autenticação, mantida pelo governo brasileiro
    let cidadeNome, estadoUF, logradouro, bairro
    try {
      const resVia  = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const dataVia = await resVia.json()

      if (dataVia.erro) {
        return reply.status(404).send({ mensagem: 'CEP não encontrado.' })
      }

      cidadeNome = dataVia.localidade
      estadoUF   = dataVia.uf
      logradouro = dataVia.logradouro
      bairro     = dataVia.bairro

    } catch (e) {
      return reply.status(500).send({ mensagem: 'Erro ao consultar o CEP.' })
    }

    // ── PASSO 2: Nominatim (OpenStreetMap) — converte cidade em coordenadas ───
    // API gratuita e sem autenticação do OpenStreetMap
    // Retorna latitude e longitude da cidade buscada
    let latCliente, lonCliente
    try {
      const resGeo  = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(cidadeNome)}&state=${encodeURIComponent(estadoUF)}&country=Brazil&format=json&limit=1`,
        { headers: { 'User-Agent': 'LaDulce-Ecommerce/1.0' } }
        // Nominatim exige um User-Agent identificando sua aplicação
      )
      const dataGeo = await resGeo.json()

      if (!dataGeo.length) {
        return reply.status(404).send({ mensagem: 'Não foi possível localizar a cidade pelo CEP.' })
      }

      latCliente = Number(dataGeo[0].lat)
      lonCliente = Number(dataGeo[0].lon)

    } catch (e) {
      return reply.status(500).send({ mensagem: 'Erro ao calcular localização.' })
    }

    // ── PASSO 3: Haversine — calcula distância em km entre a loja e o cliente ─
    // Fórmula matemática pura — zero dependência externa
    // Calcula a distância em linha reta entre dois pontos geográficos
    const distanciaKm = calcularDistanciaKm(
      LOJA.lat, LOJA.lon,
      latCliente, lonCliente
    )

    // ── PASSO 4: Verificar raio de atendimento ────────────────────────────────
    if (distanciaKm > RAIO_MAXIMO_KM) {
      return reply.status(400).send({
        mensagem: `Entrega disponível apenas para até ${RAIO_MAXIMO_KM}km de Taubaté. Sua localização está a aproximadamente ${Math.round(distanciaKm)}km.`,
        foraDaArea: true,
        distanciaKm: Math.round(distanciaKm)
      })
    }

    // ── PASSO 5: Calcular frete proporcional à distância ──────────────────────
    const freteCalculado = FRETE_MINIMO + (distanciaKm * VALOR_POR_KM)

    // Garante que o frete não ultrapasse o teto definido
    const freteValor = Math.min(freteCalculado, FRETE_MAXIMO)

    // Prazo estimado baseado na distância
    const prazo = distanciaKm <= 15 ? '30 a 60 minutos'
                : distanciaKm <= 30 ? '1 a 2 horas'
                :                     '2 a 3 horas'

    return reply.status(200).send({
      endereco: { logradouro, bairro, cidade: cidadeNome, estado: estadoUF, cep: cepLimpo },
      distanciaKm: Math.round(distanciaKm),
      frete: {
        valor: Number(freteValor.toFixed(2)),
        prazo
      }
    })
  })


  // POST /checkout/webhook
  // Rota pública — chamada pelo gateway de pagamento ao atualizar status
  app.post('/webhook', async (request, reply) => {
    const { pedidoId, status, externalId } = request.body

    if (!pedidoId || !status) {
      return reply.status(400).send({ mensagem: 'pedidoId e status são obrigatórios.' })
    }

    const statusValidos = ['PAGO', 'RECUSADO', 'ESTORNADO']
    if (!statusValidos.includes(status)) {
      return reply.status(400).send({ mensagem: 'Status inválido.' })
    }

    const pagamento = await prisma.pagamento.findUnique({
      where: { pedidoId: Number(pedidoId) }
    })

    if (!pagamento) {
      return reply.status(404).send({ mensagem: 'Pedido não encontrado.' })
    }

    await prisma.pagamento.update({
      where: { pedidoId: Number(pedidoId) },
      data: { status, externalId: externalId ?? pagamento.externalId }
    })

    if (status === 'PAGO') {
      await prisma.pedido.update({
        where: { id: Number(pedidoId) },
        data: { status: 'EM_PREPARO' }
      })
    }

    if (status === 'RECUSADO' || status === 'ESTORNADO') {
      await prisma.pedido.update({
        where: { id: Number(pedidoId) },
        data: { status: 'CANCELADO' }
      })
    }

    return reply.status(200).send({ mensagem: 'Status atualizado com sucesso.' })
  })
}

// ─── FÓRMULA DE HAVERSINE ────────────────────────────────────────────────────
// Calcula a distância em km entre dois pontos geográficos (lat/lon)
// Leva em conta a curvatura da Terra
function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
  const R    = 6371  // raio médio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a    =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2
  return R * 2 * Math.asin(Math.sqrt(a))
}