import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const vitu = await prisma.client.upsert({
    where: {phone: '85997542187'},
    update: {},
    create: {
      name: 'Vitu',
      phone: '85997542187',
      sellingPlace: {
        create: {
          name: 'Bayusha',
          location: 'Rua Barão de Aracati,'
        }
      }
    }
  })
}