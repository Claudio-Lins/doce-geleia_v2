import { prisma} from '@/lib/prisma'

export async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      ProductDetail: true,
    },
  })
  return products
}