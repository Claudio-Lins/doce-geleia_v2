// "use client"
import Image from 'next/image'
import { ProductDetail, ProductProps } from '@/@types/ProductProps'
import { Likes } from '@/components/Product/Likes'
import { getUsers } from '@/services/getUsers'
import Link from 'next/link'

export default async function Product() {
  const users = await getUsers()

    

  return (
    <div className='flex justify-center gap-2 mt-20'>
      {
        users?.map((user: any) => {
          return (
            <Link href={`/products/${user.id}`} key={user.id}>
              {/* {user.first_name} */}
              Link
            </Link>
          )
        })
      }
      <pre>
        {/* {JSON.stringify(users, null, 2)} */}
      </pre>
    </div>
  )
}

