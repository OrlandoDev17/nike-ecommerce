import { Product } from "@/types";
import { ClockIcon } from "./Icons";

export default function OfferCard({
  name,
  image,
  price,
  offer,
  discount,
  id,
}: Product) {
  const discountPrice = Math.round(
    (price as number) - ((price as number) * (discount as number)) / 100
  );

  return (
    <article className="flex flex-col gap-4 bg-white text-secondary p-4 rounded-xl">
      <header className="flex flex-col relative bg-gray-300 p-2 rounded-xl h-[280px]">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 bg-red-500 text-white px-2 py-1 rounded-full absolute top-3 left-2">
            {offer ? `-${discount}%` : ""} OFF
          </span>
          <span className="flex items-center gap-2 bg-secondary text-white px-2 py-1 rounded-full absolute top-3 right-2">
            <ClockIcon className="size-4" />
            Limitado
          </span>
        </div>
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={`Imagen del producto ${name}`}
        />
      </header>
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-2xl font-bold font-titillium-web">{name}</h3>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold font-titillium-web text-primary">
            ${discountPrice}
          </span>
          <span className="text-xl line-through text-gray-500">${price}</span>
        </div>
      </div>
      <footer className="flex flex-grow basis-0 items-end w-full">
        <a
          className="w-full bg-primary py-3 rounded-xl text-center text-white font-semibold hover:-translate-y-1 hover:saturate-200 transition-all"
          href={`/products/${id}`}
        >
          ¡Aprovechar!
        </a>
      </footer>
    </article>
  );
}
