import pino from 'pino'

const logger = pino({
  level: Bun.env.LOG_LEVEL ?? 'info',
  messageKey: 'message',
  errorKey: 'error',
  timestamp: () => `,"ts":"${Date.now()}"`,
  formatters: {
    level: label => {
      return { level: label }
    },
  },
  customLevels: {
    http: 35, // same as `info`
  },
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
