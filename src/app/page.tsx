
import { Flavor } from "@/components/Flavor";
import { Hero } from "@/components/Hero";
import { HeroContact } from "@/components/Hero/HeroContact";
import { HeroText } from "@/components/Hero/HeroText";

export default async function Home() {
  const response = await fetch('https://api-strapi-9nk4.onrender.com/api/products?populate=*', {
    next: {
      revalidate: 10
    }
  })
  const products = await response.json()

  const res = await fetch('https://reqres.in/api/users')
  const user = await res.json()

  return (
    <div id="home">
      <Hero bg="bg-hero" opacity="bg-black/70">
        <HeroText/>
      </Hero>
      <Flavor products={products} user={user}/>
      <Hero bg="bg-contact" opacity="bg-black/60" >
        <HeroContact/>
      </Hero>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}