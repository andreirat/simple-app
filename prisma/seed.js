import { PrismaClient } from '@prisma/client'

import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const generateData = () => {
  return [
    {
      name: faker.company.name(),
      slug: faker.helpers.slugify(faker.company.name()).toLowerCase(),
      totalRating: faker.number.float({ min: 3, max: 5, fractionDigits: 1 }),
      phoneNumber: faker.phone.number({ style: 'international' }),
      description: faker.lorem.sentences(2),
      profilePicture: faker.image.avatar(),
      carouselImages: Array.from({ length: 3 }, () => faker.image.urlLoremFlickr({ category: 'barbershop' })),
      location: {
        create: {
          address: faker.location.streetAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          country: faker.location.country(),
          zipCode: faker.location.zipCode(),
        },
      },
      reviews: {
        create: Array.from({ length: 2 }).map(() => ({
          rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
          comment: faker.lorem.sentence({ max: 255, min: 20 }),
          isAnonymous: faker.datatype.boolean(),
          firstName: faker.datatype.boolean() ? faker.person.firstName() : null,
          lastName: faker.datatype.boolean() ? faker.person.lastName() : null,
          profilePic: faker.datatype.boolean() ? faker.image.avatar() : null,
        })),
      },
    },
    {
      name: faker.company.name(),
      slug: faker.helpers.slugify(faker.company.name()).toLowerCase(),
      totalRating: faker.number.float({ min: 3, max: 5, fractionDigits: 1 }),
      phoneNumber: faker.phone.number({ style: 'international' }),
      description: faker.lorem.sentences(2),
      profilePicture: faker.image.avatar(),
      carouselImages: Array.from({ length: 3 }, () => faker.image.urlLoremFlickr({ category: 'barbershop' })),
      location: {
        create: {
          address: faker.location.streetAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          country: faker.location.country(),
          zipCode: faker.location.zipCode(),
        },
      },
      reviews: {
        create: Array.from({ length: 2 }).map(() => ({
          rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
          comment: faker.lorem.sentence({ max: 255, min: 20 }),
          isAnonymous: faker.datatype.boolean(),
          firstName: faker.datatype.boolean() ? faker.person.firstName() : null,
          lastName: faker.datatype.boolean() ? faker.person.lastName() : null,
          profilePic: faker.datatype.boolean() ? faker.image.avatar() : null,
        })),
      },
    },
  ]
}

export async function runSeed() {
  const places = generateData()
  await Promise.all(
    places.map(async place => {
      await prisma.place.create({
        data: place,
      })
    }),
  )
  console.log('Places inserted')
}

async function main() {
  await runSeed()
  await prisma.$disconnect()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
