// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/@types/Product'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const product = await prisma.product.findMany({
    // include: {
    //   ProductDetail: true,
    // },
  })
  res.status(200).json(product)
}
