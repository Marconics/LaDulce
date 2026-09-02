import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'

import RoutesProdutos from './routes/produtos.js'
import RoutesCategorias from './routes/categorias.js'
import RoutesAuth from './routes/auth.js'
import RoutesPedidos from './routes/pedidos.js'
import RoutesUsuarios from './routes/usuarios.js'
import RoutesEnderecos from './routes/enderecos.js'

const server = Fastify({ logger: true })

await server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})

await server.register(fastifyJwt, { secret: process.env.JWT_SECRET })

server.get('/', async () => {
  return { status: 'ok' }
})

await server.register(RoutesProdutos,   { prefix: '/produtos' })
await server.register(RoutesCategorias, { prefix: '/categorias' })
await server.register(RoutesAuth,       { prefix: '/auth' })
await server.register(RoutesPedidos,    { prefix: '/pedidos' })
await server.register(RoutesUsuarios,  { prefix: '/usuarios' })
await server.register(RoutesEnderecos,  { prefix: '/enderecos' })

await server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333
})