import { Flavor } from "@/components/Flavor";
import { Hero } from "@/components/Hero";
import { HeroContact } from "@/components/Hero/HeroContact";
import { HeroText } from "@/components/Hero/HeroText";
import { getProductDetail } from "@/services/getProductDetail";
import { getProducts } from "@/services/getProducts";

export default async function Home() {
  const products = await getProducts();
  const productDetails = await getProductDetail()
  return (
    <div id="home">
      <Hero bg="bg-hero" opacity="bg-black/70">
        <HeroText/>
      </Hero>
      <Flavor products={products} productDetails={productDetails}/>
      <Hero bg="bg-contact" opacity="bg-black/60" >
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
