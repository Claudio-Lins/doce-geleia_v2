
interface ProducProps {
  params: {
    slug: string
  }
}

export default function Product({params}: ProducProps) {

  return (
    <div>
      <h1>Product: {params.slug}</h1>
    </div>
  )
}