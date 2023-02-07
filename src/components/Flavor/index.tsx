import { ProductDetailsProps } from '@/@types/ProductDetailsProps'
import { ProductProps } from '@/@types/ProductProps'
import { FlavorCard } from './FlavorCard'

interface FlavorProps {
  products: any
  productDetails: any
}

export function Flavor({ products, productDetails }: FlavorProps) {
  return (
    <div
      id='sabores'
      className='mx-auto mb-10 flex w-full max-w-7xl flex-col items-center md:h-[calc(100vh-150px)] md:scroll-mt-32'
    >
      <h2 className='mb-2 font-Montserrat text-3xl font-bold'>Sabores</h2>
      <hr className='mb-8 w-full' />
      <div className='flex h-auto w-full flex-wrap items-center justify-evenly gap-4 md:h-[80%] md:justify-center md:gap-20'>
        {products.map((product: ProductProps) => {
          return (
            <div key={product.id}>
              <FlavorCard
                title={product.title}
                src={product.coverUrl}
                alt={product.title}
                details={productDetails
                  .filter(
                    (productDetail: ProductDetailsProps) =>
                      productDetail.productId === product.id
                  )
                  .map((productDetail: ProductDetailsProps) => {
                    return (
                      <div key={productDetail.id}>
                        <div className='flex text-[8px]'>
                          {productDetail.weight}
                          {productDetail.price}
                        </div>
                      </div>
                    )
                  })}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
