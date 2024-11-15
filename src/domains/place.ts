import logger from '../utils/logger'
import database from '../database'
import { NotFoundError } from 'elysia'

export default class Place {
  public async getPlaceBySlug(slug: string) {
    const place = await database.client.place.findUnique({
      where: {
        slug: slug,
      },
      include: {
        reviews: true,
        location: true,
      },
    })

    if (!place) {
      logger.error(`Place - Couldn't find a place with the slug ${slug}`)
      throw new NotFoundError(`Couldn't find a place with the slug ${slug}`)
    }

    return place
  }
  public async getAllPlaces() {
    try {
      const places = await database.client.place.findMany({
        include: {
          location: true,
          reviews: true,
        },
      })

      return places
    } catch (error: unknown) {
      logger.error(`Place - Couldn't fetch places, error ${JSON.stringify(error)}`, error)
      throw new Error(`There was a problem.`)
    }
  }
}
