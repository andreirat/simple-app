import constants from '../constants'

const environment = {
  get() {
    return process.env.ENVIRONMENT
  },
  isDevelopment() {
    return process.env.ENVIRONMENT === constants.ENVIRONMENTS.DEVELOPMENT
  },

  isStaging() {
    return process.env.ENVIRONMENT === constants.ENVIRONMENTS.STAGING
  },

  isProduction() {
    return process.env.ENVIRONMENT === constants.ENVIRONMENTS.PRODUCTION
  },
}

export default environment
