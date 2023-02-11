
import { ProductDetailsProps } from '@/@types/ProductDetailsProps'
import { ProductProps } from '@/@types/ProductProps'
import Link from 'next/link'
import { useState } from 'react'
import { FlavorCard } from './FlavorCard'


export function Flavor({products}: any ) {


  return (
    <div
      id='sabores'
      className='mx-auto mb-10 flex w-full max-w-7xl flex-col items-center md:h-[calc(100vh-150px)] md:scroll-mt-32'
    >
      <h2 className='mb-2 font-Montserrat text-3xl font-bold'>Sabores</h2>
      <hr className='mb-8 w-full' />
      <div className='flex h-auto w-full flex-wrap items-center justify-evenly gap-4 md:h-[80%] md:justify-center md:gap-20'>
        {products?.data.map((product: ProductProps) => {
          return (
            <div 
              key={product.id}>
                <Link href={`/product/${product.attributes.slug}`} >
              <FlavorCard
                title={product.attributes.title}
                src={product.attributes.cover.data.attributes.url}
                alt={product.attributes.title}
                ingredients={product.attributes.ingredients}
              />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
