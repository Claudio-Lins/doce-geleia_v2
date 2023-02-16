// "use client"
import Image from 'next/image'
import { ProductDetail, ProductProps } from '@/@types/ProductProps'
import { Likes } from '@/components/Product/Likes'

export default async function Product() {
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
  const products = await response

    

  return (
    <div className='flex justify-center gap-2'>
      {products && products?.data
      .map((product: any) => {
        return (
          <div
            className='w-full mt-40 flex flex-col items-center justify-center rounded-md border p-2 max-w-xs'
            key={product.id}
          >
            <h1>{product.attributes.title}</h1>
            <Image
              src={product.attributes.cover.data.attributes.url}
              alt={product.attributes.title}
              width={100}
              height={130}
            />
            <div className="flex justify-around w-full items-center">
              <Likes/>
              <p>Likes:
                {product.attributes.likes}
              </p>
               {product.attributes.destak === true ? 'Destaque' : 'Não destaque'}
            </div>
            <p>Ingrediente: {product.attributes.ingredients}</p>
            <p>Slug: {product.attributes.slug}</p>
            <div className='flex items-center gap-2'>
              {product.attributes.gallery.data?.map((gallery: any) => {
                return (
                  <Image
                    key={gallery.id}
                    src={gallery.attributes.url}
                    alt={product.attributes.title}
                    width={50}
                    height={65}
                  />
                )
              })}
            </div>
            <div className='flex items-center gap-2'>
              {product.attributes.ProductDetails.map(
                (detail: ProductDetail) => {
                  return (
                    <div key={detail.id}>
                      <div className='flex text-[8px]'>
                        {detail.weight}
                        {detail.price}
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        )
      })}
      <pre>
        {/* {JSON.stringify(products, null, 2)} */}
      </pre>
    </div>
  )
}

