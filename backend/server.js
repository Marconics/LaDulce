import Fastify from 'fastify'
import cors from '@fastify/cors'

import RoutesProdutos from './routes/produtos.js'
import RoutesCategorias from './routes/categorias.js'

const server = Fastify({ logger: true })

await server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})

server.get('/', async () => {
  return { status: 'ok' }
})

await server.register(RoutesProdutos, { prefix: '/produtos' })
await server.register(RoutesCategorias, { prefix: '/categorias' })

await server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333
})