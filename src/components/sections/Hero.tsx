export default function Hero() {
  return (
    <section className="relative h-screen flex grow-0 justify-between items-center max-w-9/12 mx-auto">
      <div>
        <h1 className="text-7xl font-black font-titillium-web tracking-wider">
          Nike Dunk High
        </h1>
        <h2 className="text-6xl text-primary  font-light font-titillium-web tracking-wide">
          Black Orange
        </h2>
        <p className="max-w-xl mt-6 text-gray-600 text-pretty">
          Este modelo de Nike Dunk High es una declaración de estilo audaz y
          urbano. Su diseño combina una paleta vibrante de naranja intenso con
          negro profundo, creando un contraste visual que no pasa desapercibido.
          Está confeccionado en cuero premium, lo que le da un acabado pulido y
          duradero.
        </p>
        <div className="flex items-center gap-12 mt-8">
          <button className="px-7 py-4 bg-primary text-white rounded-xl shadow-primary hover:-translate-y-1 hover:scale-110 transition-all">
            Agregar al carrito
          </button>
          <span className="text-4xl font-titillium-web font-bold tracking-wider">
            $385
          </span>
        </div>
      </div>
      <picture className="flex-grow basis-0">
        <img
          className="w-full drop-shadow-2xl drop-shadow-primary"
          src="/images/shoe.webp"
          alt="Zapato Promocional de Nike"
        />
      </picture>
    </section>
  );
}
