import { Product } from "@/types";
import Link from "next/link";

export default function ProductCard({
  id,
  name,
  description,
  price,
  category,
  image,
}: Product) {
  return (
    <article className="flex flex-col gap-4 rounded-xl shadow-xl p-4 max-h-[545px] group hover:scale-102 transition-all">
      <header className="bg-gray-200 px-4 rounded-xl h-[250px]">
        <img className="w-full h-full object-contain" src={image} alt={name} />
      </header>
      <div className="mt-2 flex flex-col gap-2">
        <span className="text-sm bg-gray-200 w-fit px-4 py-0.5 rounded-full">
          {category}
        </span>
        <h3 className="text-2xl font-bold font-titillium-web group-hover:text-primary transition-all duration-200">
          {name}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-3xl font-bold font-titillium-web tracking-wide group-hover:text-primary transition-all duration-200">
            ${price}
          </span>
          <Link
            className="border-1 border-gray-300 px-4 py-2 rounded-md hover:-translate-y-1 hover:bg-gray-200 transition-all"
            href={`/products/${id}`}
          >
            Ver producto
          </Link>
        </div>
      </div>
      <footer className="flex flex-grow basis-0 items-end mt-2">
        <button className="border-2 w-full border-primary px-4 py-2 rounded-md hover:-translate-y-1 hover:bg-primary hover:text-white transition-all">
          Añadir al carrito
        </button>
      </footer>
    </article>
  );
}
