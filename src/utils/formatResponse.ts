import { t, TSchema } from 'elysia'

export const formatResponseSchema = <SCHEMA extends TSchema>(responseSchema: SCHEMA) => {
  return {
    200: responseSchema,
    400: t.Object({
      message: t.String({
        description: 'Detailed validation error message',
        example: 'Email format is invalid',
      }),
    }),
    404: t.String({
      description: 'Detailed validation error message',
      example: 'Email format is invalid',
    }),
    401: t.Object({
      statusCode: t.Number({
        description: 'HTTP status code representing the error',
        example: 401,
        default: 401,
      }),
      error: t.String({
        description: 'Error type or name',
        example: 'Unauthorized',
      }),
      message: t.String({
        description: 'Description of the error',
        example: 'Invalid authentication credentials',
      }),
    }),
    429: t.Object({
      statusCode: t.Number({
        description: 'HTTP status code representing the error',
        example: 429,
        default: 429,
      }),
      error: t.String({
        description: 'Error type or name',
        example: 'Too Many Requests',
      }),
      message: t.String({
        description: 'Description of the error',
        example: 'Rate limit exceeded',
      }),
      retryAfter: t.Number({
        description: 'Seconds until the next request is allowed',
        example: 60,
      }),
    }),
    500: t.Object({
      statusCode: t.Number({
        description: 'HTTP status code representing the error',
        example: 500,
        default: 500,
      }),
      error: t.String({
        description: 'Error type or name',
        example: 'Internal Server Error',
      }),
      message: t.String({
        description: 'Description of the error',
        example: 'An unexpected error occurred',
      }),
    }),
  }
}
