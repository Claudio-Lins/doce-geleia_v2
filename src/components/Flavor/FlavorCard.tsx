'use-client'
import Image from 'next/image'

interface FlavorsProps {
  src: any
  alt: string
  title?: string
  ingredients?: string
  details?: any
  price?: number
  products?: []
  productDetails?: []
}

export function FlavorCard({
  src,
  alt,
  title,
  products,
  details,
  ingredients,
  productDetails,
  price,
}: FlavorsProps) {
  return (
    <div className='group relative flex h-[205px] w-[170px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border shadow-md'>
      <div className='relative flex h-[205px] w-[170px] '>
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          className='object-contain object-right-top'
        />
      </div>
      <div className='absolute bottom-0 flex h-[45px] w-full flex-col items-center justify-start bg-zinc-900/60 transition-all duration-300 group-hover:h-full'>
        <div className='hidden h-[160px] w-full text-white group-hover:block'>
          <div className='w-full h-full'>
            <div className='flex h-full w-full flex-col items-center justify-between gap-2 p-2'>
              <p className='text-center text-sm font-semibold'>
                {ingredients?.replace(/,/g, ' •')}
              </p>
              <button className='rounded-md bg-white px-2 py-1 text-sm text-zinc-900 mb-2'>
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 flex h-[45px] w-full items-center justify-center border-t border-white bg-zinc-900 px-2 text-center font-Montserrat text-xs leading-4 text-white'>
        {title}
      </div>
    </div>
  )
}
