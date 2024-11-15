import logger from './utils/logger'

require('dotenv').config()

import services from './services'
import app from './app'

if (!services.environment.isDevelopment()) {
  // Run prod or staging actions on start
}

const shutDown = async () => {
  logger.info('Closing the server..')
  logger.info('Disconnecting from database..')
  logger.info('Exiting..')
  process.exit()
}

const startUp = async () => {
  logger.info('Starting the server...')
  app.listen(process.env.PORT || 3000)
  logger.info(
    `🦊 Server is running at ${app.server?.hostname}:${app.server?.port} in ${app.server?.development ? 'development' : 'production'} mode`,
  )
  process.on('SIGINT', () => shutDown())
}

startUp().catch(error => logger.error(error))
