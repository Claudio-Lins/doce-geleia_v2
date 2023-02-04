import { Flavor } from "@/components/Flavor";
import { Hero } from "@/components/Hero";
import { HeroContact } from "@/components/Hero/HeroContact";
import { HeroText } from "@/components/Hero/HeroText";

export default async function Home() {
  const instagramImg = await getInstagramPosts();
  return (
    <div id="home">
      <Hero bg="bg-hero" opacity="bg-black/50">
        <HeroText/>
      </Hero>
      <Flavor/>
      {/* <Instagram
        instagramImg={instagramImg}
        id={0}
        heroId={0}
        alt={""}
        imageUrl={""}
        createdAt={new Date().toString()}
      /> */}
      <Hero bg="bg-contact" opacity="bg-black/50">
        <HeroContact/>
      </Hero>
    </div>
  );
}

async function getInstagramPosts() {
  const res = await fetch(
    "https://docegeleia-6xix4sbb6-claudio-lins.vercel.app/api/hero/getAllHeroGallery"
  );
  const data = await res.json();

  return data;
}
