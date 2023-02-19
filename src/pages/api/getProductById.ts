// get product by id use fetch

import { prisma} from '@/lib/prisma'
import { ProductProps } from '@/@types/ProductProps';

export async function getProductsById(productId: string ) {
  const product = await prisma.product.findUnique({
    where: {
      slug: productId,
    },
    include: {
      ProductDetail: true,
    },
  })
  return product
}