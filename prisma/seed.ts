import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.sellingPlace.upsert({
    where: { name: 'Bayusha' },
    update: {},
    create: {
      name: 'Bayusha',
      location: 'Rua Barão de Aracati, 1100',
      clients: {
        createMany: {
          data: [
            {
              name: 'Vitu',
              phone: '00999999999'
            }
          ]
        }
      }
    }
  })

  await prisma.productType.upsert({
    where: { slug: 'easter-egg' },
    update: {},
    create: {
      name: 'Ovo de Páscoa - Casca Meio Amarga',
      slug: 'easter-egg-semisweet',
      productOptions: {
        createMany: {
          data: [
            {
              name: 'Cookie Tradicional Ninho',
              slug: 'traditional-nest-cookie'
            },
            {
              name: 'Cookie Tradicional Brigadeiro',
              slug: 'traditional-brigadeiro-cookie'
            },
            {
              name: 'Cookie Chocolate Ninho',
              slug: 'chocolate-nest-cookie'
            },
            {
              name: 'Cookie Chocolate Brigadeiro',
              slug: 'chocolate-brigadeiro-cookie'
            },
            {
              name: 'Brownie',
              slug: 'brownie'
            },
            {
              name: 'Sneakers',
              slug: 'sneakers'
            }
          ]
        }
      }
    }
  })

  await prisma.productType.upsert({
    where: { slug: 'easter-egg-white' },
    update: {},
    create: {
      name: 'Ovo de Páscoa - Casca Branca',
      slug: 'easter-egg-white',
      productOptions: {
        createMany: {
          data: [
            {
              name: 'Cookie Tradicional Ninho',
              slug: 'traditional-nest-cookie'
            },
            {
              name: 'Cookie Tradicional Brigadeiro',
              slug: 'traditional-brigadeiro-cookie'
            },
            {
              name: 'Cookie Chocolate Ninho',
              slug: 'chocolate-nest-cookie'
            },
            {
              name: 'Cookie Chocolate Brigadeiro',
              slug: 'chocolate-brigadeiro-cookie'
            },
            {
              name: 'Bem-Casado',
              slug: 'well-married'
            }
          ]
        }
      }
    }
  })
}

main()
  .catch((error) => {
    console.error({ error })
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
