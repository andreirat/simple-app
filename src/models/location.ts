import { t } from 'elysia'
import { BaseModel } from './common'

export const Location = t.Composite([
  t.Object({
    id: t.Number(),
    address: t.String(),
    city: t.String(),
    state: t.String(),
    country: t.String(),
    zipCode: t.String(),
  }),
  BaseModel,
])
