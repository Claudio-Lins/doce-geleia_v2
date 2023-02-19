
export async function getUsers() {
  // const response = await fetch(`https://reqres.in/api/users`)
  const response = await fetch(`http://localhost:3000/api/products`)
  const users = await response.json()

  return users
}
