import { t } from 'elysia'
import { BaseModel } from './common'

export const Place = t.Composite([
  t.Object({
    id: t.Number(),
    name: t.String(),
    slug: t.String(),
    totalRating: t.Number(),
    phoneNumber: t.String(),
    description: t.String(),
    profilePicture: t.String(),
    carouselImages: t.Array(t.String()),
    locationId: t.Number(),
  }),
  BaseModel,
])
