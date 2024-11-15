import { t } from 'elysia'
import { Place, Location, Review } from '../../models'

export const GetPlaceProfileParams = t.Object({
  slug: t.String({
    description: 'Unique place slug',
    example: 'barber-shop-plaza',
  }),
})

export const GetPlaceProfileResponse = t.Composite([
  Place.Place,
  t.Object({
    location: Location.Location,
    reviews: t.Array(Review.Review),
  }),
])

export const GetAllPlacesResponse = t.Array(
  t.Composite([
    Place.Place,
    t.Object({
      location: Location.Location,
      reviews: t.Array(Review.Review),
    }),
  ]),
)
