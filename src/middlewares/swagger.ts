import swagger from '@elysiajs/swagger'
import services from '../services'

const HOST = services.environment.isProduction()
  ? process.env.RENDER_EXTERNAL_URL
  : `http://localhost:${process.env.PORT}`

export default swagger({
  documentation: {
    info: {
      title: 'Mero API Documentation',
      version: '1.0.0',
      description: 'Restful API documentation for the Mero backend service',
      contact: {
        name: 'API Support',
        email: 'contact@mero.app',
      },
    },
    tags: [{ name: 'Place', description: 'User management endpoints' }],
    servers: [
      {
        url: HOST as string,
        description: `${process.env.ENVIRONMENT}`,
      },
    ],
  },
})
