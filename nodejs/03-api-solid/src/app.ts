import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { ZodError } from 'zod'
import { env } from './env/index.js'
import { usersRoutes } from './http/controllers/users/routes.js'
import { gymsRoutes } from './http/controllers/gyms/routes.js'
import { checkInsRoutes } from './http/controllers/check-ins/routes.js'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)

app.register(usersRoutes)
app.register(gymsRoutes)
app.register(checkInsRoutes)

app.setErrorHandler((error, _, replay) => {
  if (error instanceof ZodError)
    return replay
      .status(400)
      .send({ message: 'Validation Error', issues: error.format() })

  if (env.NODE_ENV !== 'production') console.error(error)
  else {
    // TODO: Here we should log to an external tool like Datadog
  }

  return replay.status(500).send({ message: 'Internal server error.' })
})
