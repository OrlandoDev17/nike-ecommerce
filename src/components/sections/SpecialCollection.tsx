import Link from "next/link";
import SectionContainer from "../layout/SectionContainer";
import { AIR_MAX_STORIES } from "@/lib/constants";

export default function SpecialCollection() {
  return (
    <SectionContainer title="Colecciones Especiales">
      <article className="flex justify-between items-center max-w-full gap-20 mb-12">
        <picture>
          <img
            className="w-full h-full object-contain rounded-xl shadow-gray-500 shadow-lg"
            src="/images/air-max-collection.webp"
            alt="Colección Especial Air Max"
          />
        </picture>
        <div className="flex flex-col gap-4 max-w-1/2">
          <h2 className="text-3xl font-bold font-titillium-web">
            Nike Air Max Collection
          </h2>
          <p className="text-gray-700 text-lg">
            Descubre la icónica colección Air Max con la tecnología de
            amortiguación visible que revolucionó el mundo del calzado
            deportivo. Desde el clásico Air Max 90 hasta las últimas
            innovaciones, cada modelo representa décadas de investigación y
            desarrollo.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link
              className="px-6 py-2.5 rounded-full bg-primary text-white hover:-translate-y-1 hover:scale-110 transition-all"
              href="/catalogue"
            >
              Explorar Colección
            </Link>
            <Link
              className="px-6 py-2.5 rounded-full border-2 border-secondary/70 hover:-translate-y-1 hover:scale-110 transition-all"
              href="#discover"
            >
              Ver Historia
            </Link>
          </div>
          <ul className="flex items-center justify-between flex-wrap mt-4">
            {AIR_MAX_STORIES.map(({ id, title, description }) => (
              <li key={id} className="flex flex-col gap-2 items-center">
                <h3 className="text-3xl text-primary font-titillium-web font-extrabold">
                  {title}
                </h3>
                <span className="text-gray-700">{description}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </SectionContainer>
  );
}
