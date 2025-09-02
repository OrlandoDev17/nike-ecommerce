import CollectionHistory from "@/components/sections/CollectionHistory";
import CollectionsWrapper from "@/components/sections/CollectionsWrapper";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <div className="flex flex-col gap-12 items-center w-full max-w-10/12 mx-auto mt-48">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-7xl text-secondary text-center font-black">
          Colecciones <br /> <span className="text-primary">Icónicas</span>
        </h2>
        <p className="text-gray-600 max-w-3xl text-center text-xl">
          Descubre las colecciones más emblematicas de Nike. Desde el icónico
          Air Max hasta las últimas innovaciones en tecnología deportiva que
          definen el futuro del calzado.
        </p>
        <Link
          href="#collections"
          className="px-6 py-2.5 rounded-full bg-primary text-white hover:-translate-y-1 hover:scale-110 transition-all"
        >
          Explorar Colecciones
        </Link>
      </div>
      <CollectionsWrapper />
      <CollectionHistory />
    </div>
  );
}
