// get product by id use fetch

import { prisma} from '@/lib/prisma'
import { ProductProps } from '@/@types/ProductProps';

export async function getProductsById(productSlug: string ) {
  const product = await prisma.product.findUnique({
    where: {
      slug: productSlug,
    },
    include: {
      ProductDetail: true,
    },
  })
  return product
}