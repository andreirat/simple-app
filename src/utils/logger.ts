import pino from 'pino'

const logger = pino({
  // Use the LOG_LEVEL environment variable, or default to "info"
  level: Bun.env.LOG_LEVEL ?? 'info',

  // Rename 'msg' to 'message'
  messageKey: 'message',

  // Rename 'err' to 'error'
  errorKey: 'error',

  // Rename 'time' to 'ts'
  timestamp: () => `,"ts":"${Date.now()}"`,

  formatters: {
    //Use `level` label instead of integer values
    level: label => {
      return { level: label }
    },
  },

  // Define a custom "http" level
  customLevels: {
    http: 35, // same as `info`
  },

  // Configure the "pino-pretty" transport
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      customLevels: 'http:35',
      customColors: 'http:gray',
      colorizeObjects: true,
      ignore: 'request,response',
      useOnlyCustomProps: false,
      messageKey: 'message',
      errorKey: 'error',
      timestampKey: 'ts',
    },
  },
})

export default logger
