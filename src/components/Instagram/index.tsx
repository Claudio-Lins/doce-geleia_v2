"use client";
import { InstagramPost } from "@/@types/InstagramPosts";
import Image from "next/image";
import { InstagramLogo } from "phosphor-react";
export function Instagram({ instagramImg }: InstagramPost) {
  return (
    <div id="instagram" className="flex flex-col items-center max-w-7xl mx-auto md:scroll-mt-24 scroll-mt-0">
      <p className="text-2xl font-bold font-Montserrat text-zinc-900">Me siga no Instagram</p>
      <a
        href="https://www.instagram.com/docegeleia.pt/"
        target="_blank"
        rel="noreferrer"
        className="font-light p-4"
      >
        @DocegeleiaPt
      </a>
      <div className="">
        <div className=" w-full flex flex-wrap gap-4 rounded-md overflow-hidden justify-center pb-12">
          {instagramImg?.map((img: any) => {
            return (
              <div key={img.id}>
                <a
                  href="https://www.instagram.com/docegeleia.pt/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative"
                >
                  <Image
                    
                    src={img.imageUrl}
                    width={300}
                    height={400}
                    alt="Doce Geleia no Instagram"
                    className=" rounded-md shadow-md w-auto h-auto cursor-pointer"
                  />
                  <div className="absolute inset-0 hover:bg-black/50 rounded-md flex justify-center group items-center">
                    <InstagramLogo
                      size={40}
                      className="hidden text-gray-200 group-hover:block"
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
