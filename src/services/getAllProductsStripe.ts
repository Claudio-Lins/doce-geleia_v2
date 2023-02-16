import { ProductProps } from "@/@types/ProductProps"

export async function getAllProductsStripe(): Promise<ProductProps> {
  const response = await fetch('https://api-strapi-9nk4.onrender.com/api/products?populate=*', {
    next: {
      revalidate: 10
    }
  }).then(
    (response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Não foi possível carregar os dados')
    }
  )
  return response.data
}
