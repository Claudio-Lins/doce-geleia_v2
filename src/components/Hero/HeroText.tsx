"use client";
export function HeroText() {
  return (
    <div className="z-[2] p-5 mt-10 text-white md:-ml-72 md:-mt-10 h-auto">
        <h2 className="font-Old text-5xl font-bold">Doce Geleia</h2>
        <hr />
        <p
          className="max-w-sm py-5 font-Montserrat font-light text-xs iPhone5:leading-relaxed iPhoneX:leading-relaxed iPhoneXR:text-base  sm:text-[14px] sm:my-10"
        >
          A geleia artesanal é um produto delicioso e saudável, feito à base de
          frutas frescas e sem adição de conservantes. É uma otima opção para
          quem busca uma alimentação mais natural e nutritiva.
          <br />
          <br />
          <span className="hidden iPhone12:block">
          As frutas utilizadas na preparação da geleia artesanal são
          selecionadas a dedo, para garantir o sabor e a qualidade do produto. O
          processo de fabricação é todo artesanal, o que torna a geleia ainda
          mais especial.
          <br />
          <br />
          </span>
          A Doce Geleia é uma empresa familiar, que busca oferecer um
          produto de qualidade e sabor único. Acreditamos que a alimentação
          saudável e natural é essencial para uma vida mais feliz e saudável.
        </p>
        <a href="/#sabores" className="border px-8 py-2 transition-all duration-700 hover:bg-zinc-50 hover:text-zinc-900 ">
          Sabores
        </a>
      </div>
  )
}
