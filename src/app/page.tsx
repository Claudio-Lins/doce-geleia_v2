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
      {/* <pre>
        {JSON.stringify(productDetails, null, 2)}
      </pre> */}
    </div>
  );
}