import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  // const vitu = await prisma.client.upsert({
  //   where: { phone: '85997542187' },
  //   update: {},
  //   create: {
  //     name: 'Vitu',
  //     phone: '85997542187',
  //     sellingPlaces: {
  //       create: {
  //         name: 'Bayhusha'
  //       }
  //     }
  //   }
  // })

  console.log('seed')
}

main()
  .catch((error) => {
    console.error({ error })
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
