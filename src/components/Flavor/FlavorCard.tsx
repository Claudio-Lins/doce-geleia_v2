"use-client"
import Image from "next/image";

interface ImageProps {
  src: any
  alt: string;
  title?: string;
  weight?: string;
  products?: [];
}

export function FlavorCard({ src, alt, title, products, weight }: ImageProps) {
  return (
    <div className="relative flex h-[205px] w-[170px] flex-col justify-between overflow-hidden rounded-2xl border shadow-md group cursor-pointer">
      <div className="relative flex h-[205px] w-[170px] ">
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-contain object-right-top"
        />
      </div>
      <div className="absolute bottom-0 flex h-[45px] w-full flex-col items-center justify-center bg-zinc-900/50 group-hover:h-full duration-300 transition-all">
        <div className="w-full h-[160px] hidden group-hover:block text-white p-2">
          <div className=" flex flex-col justify-center items-center">
          Desde de: <span className="font-bold text-2xl">2,50€</span>
          </div>
        </div>
      </div>
        <div className="w-full h-[45px] bg-zinc-900 px-2 text-center font-Montserrat text-xs leading-4 text-white absolute bottom-0 flex justify-center items-center border-t border-white">
          {title}
        </div>
    </div>
  );
}
