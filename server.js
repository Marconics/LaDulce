import Fastify from 'fastify'

const server = Fastify()

server.get('/', async () => {
  return { status: 'ok' }
})

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333
})