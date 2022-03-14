import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const sellingPlace = await prisma.sellingPlace.upsert({
    update: {},
    where: { name: 'Bayusha' },
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

  // const productTypes = await prisma.productType.createMany({})
}

main()
  .catch((error) => {
    console.error({ error })
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
