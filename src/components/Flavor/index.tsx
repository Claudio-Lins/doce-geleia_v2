import { ProductDetailsProps } from "@/@types/ProductDetailsProps";
import { ProductProps } from "@/@types/ProductProps";
import { FlavorCard } from "./FlavorCard";

interface FlavorProps {
  products: any;
  productDetails: any;
}

export function Flavor({products, productDetails}: FlavorProps) {
  return (
    <div id="sabores" className='flex flex-col items-center w-full mx-auto mb-10 max-w-7xl md:h-[calc(100vh-150px)] md:scroll-mt-32'>
      <h2 className='font-Montserrat font-bold text-3xl mb-2'>Sabores</h2>
      <hr className="w-full mb-8" />
      <div className='flex flex-wrap justify-evenly md:justify-center md:gap-20 gap-4 items-center w-full h-auto md:h-[80%]'>
        {products.map((product: ProductProps) => {
        return (
          <div key={product.id}>
            <FlavorCard
              title={product.title}
              src={product.coverUrl}
              alt={product.title}
              details={productDetails
              .filter((productDetail: ProductDetailsProps) => productDetail.productId === product.id)
                .map((productDetail: ProductDetailsProps) => {
                return (
                  <div key={productDetail.id}>
                    <div className="flex text-[8px]">
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