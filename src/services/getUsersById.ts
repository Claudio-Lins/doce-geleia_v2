
export async function getUsersById(productId: string) {
  const response = await fetch(`http://localhost:3000/api/products/${productId}`)
  const user = await response.json()

  return user
}
