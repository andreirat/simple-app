import swagger from '@elysiajs/swagger'

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
        url: `http://localhost:${process.env.PORT}`,
        description: 'Development server',
      },
    ],
  },
})
