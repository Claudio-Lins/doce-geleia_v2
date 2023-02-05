"use-client"
import { flavors } from "@/data/flavors";
import { FlavorCard } from "./FlavorCard";

export function Flavor() {
  return (
    <div id="sabores" className='flex flex-col items-center w-full mx-auto mb-10 max-w-7xl md:h-[calc(100vh-150px)] md:scroll-mt-24'>
      <h2 className='font-Montserrat font-bold text-3xl mb-2'>Sabores</h2>
      <hr className="w-full mb-8" />
      <div className='flex flex-wrap justify-evenly md:justify-center md:gap-20 gap-4 items-center w-full h-auto md:h-[80%]'>
        {flavors.map((flavor, index) => {
          return <FlavorCard key={index} title={flavor.title} src={flavor.src} alt={flavor.title} />
        })
        }
        
      </div>
    </div>
  )

}