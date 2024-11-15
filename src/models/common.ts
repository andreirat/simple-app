import { t } from 'elysia'

export const CreatedAt = t.Date({
  description: 'Date and time when the record was created',
  format: 'date-time',
  example: '2023-11-14T10:00:00.000Z',
})

export const UpdatedAt = t.Date({
  description: 'Date and time when the record was last updated',
  format: 'date-time',
  example: '2023-11-14T12:00:00.000Z',
})

export const BaseModel = t.Object({
  createdAt: CreatedAt,
  updatedAt: UpdatedAt,
})
