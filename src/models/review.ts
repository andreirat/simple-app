import { t } from 'elysia'
import { BaseModel } from './common'

export const Review = t.Composite([
  t.Object({
    id: t.Number(),
    rating: t.Number(),
    comment: t.String(),
    firstName: t.Union([t.String(), t.Null()]),
    lastName: t.Union([t.String(), t.Null()]),
    profilePic: t.Union([t.String(), t.Null()]),
  }),
  BaseModel,
])
