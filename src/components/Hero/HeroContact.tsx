"use client";
export function HeroContact() {
  return (
    <div id="contact" className="z-[2] mt-12 p-8 text-white md:-ml-[650px] border bg-white bg-opacity-20 backdrop-blur-sm w-full max-w-md">
      <h2 className="text-white font-bold text-2xl">Contact</h2>
      <hr />
      <form className="w-full flex flex-col gap-4 mt-6">
        <div className="flex flex-col">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-white rounded-md p-2 text-zinc-900"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-white rounded-md p-2 text-zinc-900"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            className="border border-white rounded-md p-2 text-zinc-900"
          />
        </div>
        <button className="border mt-10 px-8 py-2 transition-all duration-700 hover:bg-zinc-50 hover:text-zinc-900">
          Enviar
        </button>
      </form>
    </div>
  );
}
