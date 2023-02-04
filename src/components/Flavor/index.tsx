import { FlavorCard } from "./FlavorCard";

const flavors = [
  { title: 'Frutas Vermelhas', src: '/flavors/frutas-vermelhas-flavor.jpg' },
  { title: 'Frutas Amarelas', src: '/flavors/frutas-amarelas-flavor.jpg' },
  { title: 'Pimenta', src: '/flavors/pimenta-flavor.jpg' },
  { title: 'Hibisco com Mertilo', src: '/flavors/frutas-vermelhas-flavor.jpg'},
  { title: 'Abacaxi com Pimenta Rosa', src: '/flavors/frutas-amarelas-flavor.jpg' },
  // { title: 'Natalina', src: '/flavors/pimenta-flavor.jpg', alt: 'Pimenta' },
  { title: 'Laranja com Damasco', src: '/flavors/laranja-com-damasco-flavor.jpg' },
  { title: 'Tomate com Manjericão', src: '/flavors/frutas-amarelas-flavor.jpg' },
  { title: 'Abacaxi com Gengibre', src: '/flavors/pimenta-flavor.jpg' },
  { title: 'Cebola com Balsâmico', src: '/flavors/cebola-com-balsamico-flavor.jpg' },
]


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