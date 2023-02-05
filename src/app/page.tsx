import { Flavor } from "@/components/Flavor";
import { Hero } from "@/components/Hero";
import { HeroContact } from "@/components/Hero/HeroContact";
import { HeroText } from "@/components/Hero/HeroText";

export default async function Home() {
  
  return (
    <div id="home">
      <Hero bg="bg-hero" opacity="bg-black/50">
        <HeroText/>
      </Hero>
      <Flavor/>
      <Hero bg="bg-contact" opacity="bg-black/50">
        <HeroContact/>
      </Hero>
    </div>
  );
}

// async function getInstagramPosts() {
//   const res = await fetch(
//     "https://docegeleia-6xix4sbb6-claudio-lins.vercel.app/api/hero/getAllHeroproducts"
//   );
//   const data = await res.json();

//   return data;
// }
