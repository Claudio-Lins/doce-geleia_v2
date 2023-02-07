import { prisma} from '@/lib/prisma'

export async function getProductDetail() {
  const productDeatils = await prisma.productDetail.findMany({
    orderBy: {
      id: 'asc',
    }
  })
  return productDeatils
}