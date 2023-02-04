import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  title?: string;
}

export function FlavorCard({ src, alt, title }: ImageProps) {
  return (
    <div className="relative flex h-[205px] w-[170px] flex-col justify-between overflow-hidden rounded-2xl border shadow-md">
      <div className="relative flex h-[205px] w-[170px] " >
        <Image src={src} alt={alt} fill quality={100} className="object-contain object-right-top" />
      </div>
      <div className="absolute bottom-0 flex h-[45px] w-full flex-col items-center justify-center bg-zinc-900 ">
        <div className="w-full text-white px-2 text-center font-Montserrat text-xs leading-4">
         {title}
        </div>
      </div>
    </div>
  );
}
