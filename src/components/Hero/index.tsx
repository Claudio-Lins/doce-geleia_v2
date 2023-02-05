"use client";

import { ReactNode } from "react";

interface HeroProps {
  bg: 'bg-hero' | 'bg-contact';
  opacity?: string;
  children?: ReactNode
}

export function Hero({ bg = 'bg-hero', opacity, children }: HeroProps) {
  return (
    <div
    data-cz-shortcut-listen="true"
      className={`
    relative mb-12 flex h-screen w-full items-center justify-center bg-cover bg-fixed bg-center
    ${bg}
    `}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 z-[2] ${opacity} `}
      />
      {children}
    </div>
  );
}
