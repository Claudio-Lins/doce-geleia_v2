import { getUsersById } from "@/services/getUsersById"


export default async function Products({ params }: {params: { userId: string }}) {
  const user = await  getUsersById(params.userId)
  console.log(params.userId)
  return (
    <div>
      <h1>Product: {params?.userId}</h1>
      <h1>Título: {user.title}</h1>
      <pre>{JSON.stringify(user.attributes?.data, null, 2)}</pre>
    </div>
  )
}
