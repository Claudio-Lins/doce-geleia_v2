"use client";
export function HeroText() {
  return (
    <div className="z-[2] mt-12 p-5 text-white md:-ml-72 md:-mt-10">
        <h2 className="font-Old text-5xl font-bold">Doce Geleia</h2>
        <hr />
        <p
          style={{ lineHeight: "24px" }}
          className="max-w-sm py-5 font-Montserrat text-xs font-light sm:text-sm"
        >
          A geleia artesanal é um produto delicioso e saudável, feito à base de
          frutas frescas e sem adição de conservantes. É uma otima opção para
          quem busca uma alimentação mais natural e nutritiva.
          <br />
          <br />
          As frutas utilizadas na preparação da geleia artesanal são
          selecionadas a dedo, para garantir o sabor e a qualidade do produto. O
          processo de fabricação é todo artesanal, o que torna a geleia ainda
          mais especial.
          <br />
          <br />A Doce Geleia é uma empresa familiar, que busca oferecer um
          produto de qualidade e sabor único. Acreditamos que a alimentação
          saudável e natural é essencial para uma vida mais feliz e saudável.
        </p>
        <button className="border px-8 py-2 transition-all duration-700 hover:bg-zinc-50 hover:text-zinc-900">
          Sabores
        </button>
      </div>
  )
}
