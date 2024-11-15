import { place } from './controllers'

require('dotenv').config()
import { Elysia } from 'elysia'
import middlewares from './middlewares'

const server = new Elysia({
  name: 'mero-app',
})
  .use(middlewares.Swagger)
  .use(place)

export default server
