import { ProductProps } from '../@types/ProductProps'
export async function getProductById(productId: string) {
  const response = await fetch(`/api/getProductById/${productId}`)
  const product = await response.json()

  return product?.data
}
