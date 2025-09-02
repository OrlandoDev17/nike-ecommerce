import type { CollectionCard } from "@/types";
import Link from "next/link";

export default function CollectionCard({
  name,
  image,
  description,
  url,
  featured,
}: CollectionCard) {
  return (
    <article className="flex flex-col rounded-xl shadow-lg shadow-primary/20 gap-8 hover:scale-102 hover:shadow-primary/40 transition-all">
      <header className="relative overflow-hidden">
        {featured && (
          <span className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full">
            Destacada
          </span>
        )}
        <img
          className="w-full h-full object-contain rounded-t-xl"
          src={image}
          alt={name}
        />
      </header>
      <div className="flex flex-col gap-4 px-8 pb-8 min-h-[220px] justify-between">
        <h3 className="text-3xl font-extrabold tracking-wide text-secondary">
          {name}
        </h3>
        <p className="text-gray-500 text-balance">{description}</p>
        <Link
          href={url}
          className="text-center bg-primary/80 text-white py-3 rounded-lg hover:-translate-y-1 hover:bg-primary transition-all"
        >
          Explorar Colección
        </Link>
      </div>
    </article>
  );
}
