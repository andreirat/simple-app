import { Elysia, t } from 'elysia'
import { formatResponseSchema } from '../../utils/formatResponse'
import { GetAllPlacesResponse, GetPlaceProfileParams, GetPlaceProfileResponse } from './model'
import Place from '../../domains/place'

export const place = new Elysia().decorate('place', new Place()).group('/place', app =>
  app
    .get(
      '/:slug',
      async ({ params: { slug }, place }) => {
        return await place.getPlaceBySlug(slug)
      },
      {
        params: GetPlaceProfileParams,
        response: formatResponseSchema(GetPlaceProfileResponse),
        detail: {
          summary: 'Get Place By Slug',
          description: 'Get relevant information about the app',
          tags: ['Place'],
        },
      },
    )
    .get(
      '/places',
      async ({ place }) => {
        return await place.getAllPlaces()
      },
      {
        response: formatResponseSchema(GetAllPlacesResponse),
        detail: {
          summary: 'Get All The Places',
          description: 'Get relevant information about the places',
          tags: ['Place'],
        },
      },
    ),
)
