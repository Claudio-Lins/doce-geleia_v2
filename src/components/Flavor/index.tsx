import { flavors } from "@/data/flavors";
import { getProducts } from "@/services/getProducts";
import { FlavorCard } from "./FlavorCard";

export function Flavor({products}: any) {
  return (
    <div id="sabores" className='flex flex-col items-center w-full mx-auto mb-10 max-w-7xl md:h-[calc(100vh-150px)] md:scroll-mt-32'>
      <h2 className='font-Montserrat font-bold text-3xl mb-2'>Sabores</h2>
      <hr className="w-full mb-8" />
      <div className='flex flex-wrap justify-evenly md:justify-center md:gap-20 gap-4 items-center w-full h-auto md:h-[80%]'>
        {products.map((product: any) => {
        return (
          <div key={product.id}>
            <FlavorCard
              title={product.title}
              src={product.coverUrl}
              alt={product.title}
              products={product}
              {...product.ProductDetail.map((detail: any) => {
                return (
                  <div key={detail.id}>
                    <h1>{detail.weight}</h1>
                    <p>{detail.price}</p>
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