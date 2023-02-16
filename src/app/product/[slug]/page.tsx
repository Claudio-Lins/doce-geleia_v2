import { use } from 'react'


async function getProduct(id: any) {
  const res = await fetch(`https://api-strapi-9nk4.onrender.com/api/products?populate=*/${id}`);
  return res.json();
}

export default function Product({ params }: any) {
  const { id } = params;
  const product = use(getProduct(id));
  return (
    <div>
      <h1>Product: {params?.slug}</h1>
      <h1>Título {product?.title}</h1>
      <pre>
        {JSON.stringify(product.data, null, 2)}
      </pre>
    </div>
  )
}
