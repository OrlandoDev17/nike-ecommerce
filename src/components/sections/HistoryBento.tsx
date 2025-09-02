import { DiscoverItem } from "@/types";
import BentoTile from "../ui/BentoTile";
import {
  ColabIcon,
  GlobeIcon,
  IdeaIcon,
  TargetIcon,
  ThropyIcon,
  UsersIcon,
  ZapIcon,
} from "@/components/ui/Icons";

export default function HistoryBento() {
  const HISTORY_TILES: DiscoverItem[] = [
    {
      id: 1,
      Icon: IdeaIcon,
      iconStyles: "size-12 mb-2",
      bentoPositions: "col-start-1 row-start-1 col-span-2 row-span-1",
      title: "Revolucion Tecnológica",
      description:
        "Desde la introducción de la tecnología Air en 1979, Nike ha liderado la innovación en calzado deportivo, transformando la industria con cada nuevo avance tecnológico.",
      paragraphStyles: "text-gray-200",
      className: "p-8 bg-primary text-white gap-4 h-full",
      content: (
        <div className="flex items-center gap-2">
          <hr className="h-1 w-24 border-2 border-white/30" />
          <span>Innovación Continua</span>
        </div>
      ),
    },
    {
      id: 2,
      Icon: GlobeIcon,
      iconStyles: "size-12 mb-2 text-primary",
      bentoPositions: "col-start-3 row-start-1 col-span-1 row-span-1",
      title: "+190",
      titleStyles: "text-primary",
      subtitle: "Países Alcanzados",
      description:
        "Presencia global que conecta culturas a través del deporte y la innovación.",
      paragraphStyles: "text-gray-600",
      className: "p-8 h-full",
    },
    {
      id: 3,
      Icon: UsersIcon,
      iconStyles: "size-12 mb-2 text-primary",
      bentoPositions: "col-start-1 row-start-2 col-span-1 row-span-1",
      title: "+1000",
      titleStyles: "text-primary",
      subtitle: "Atletas Elite",
      description:
        "Los mejores deportistas del mundo confían en Nike para alcanzar la excelencia.",
      paragraphStyles: "text-gray-600",
      className: "p-8 h-full",
    },
    {
      id: 4,
      Icon: ZapIcon,
      iconStyles: "size-12 mb-2 text-primary",
      bentoPositions: "col-start-2 row-start-2 col-span-1 row-span-1",
      title: "Air",
      titleStyles: "text-primary",
      subtitle: "Tecnología Pionera",
      description:
        "45 años revolucionando la amortiguación y el rendimiento deportivo.",
      paragraphStyles: "text-gray-600",
      className: "p-8 h-full",
    },
    {
      id: 5,
      Icon: ColabIcon,
      iconStyles: "size-12 mb-2 text-primary",
      bentoPositions: "col-start-3 row-start-2 col-span-1 row-span-1",
      title: "Millones en Movimiento",
      titleStyles: "text-primary",
      subtitle: "Una comunidad global que avanza junta.",
      description:
        "Más de 100M de personas entrenan, compiten y se inspiran con Nike cada día.",
      paragraphStyles: "text-gray-600",
      className: "p-8 h-full",
    },
    {
      id: 6,
      Icon: ThropyIcon,
      iconStyles: "size-12 mb-2 text-primary",
      bentoPositions: "col-start-1 row-start-3 col-span-1 row-span-1",
      title: "#1",
      titleStyles: "text-primary",
      subtitle: "Líder Mundial",
      description: "La marca deportiva más valiosa y reconocida globalmente.",
      paragraphStyles: "text-gray-600",
      className: "p-8 h-full",
    },
    {
      id: 7,
      Icon: TargetIcon,
      iconStyles: "size-12 mb-2",
      bentoPositions: "col-start-2 row-start-3 col-span-2 row-span-1",
      title: '"Just Do It - Más que un eslogan"',
      description:
        "Una filosofía que trasciende el deporte, inspirando a millones a superar barreras, romper límites y convertir los sueños en realidad desde 1988.",
      paragraphStyles: "text-gray-200",
      className: "p-8 bg-secondary/90 text-white gap-4 h-full",
      content: (
        <div className="flex items-center gap-2">
          <hr className="h-1 w-24 border-2 border-white/30" />
          <span>Innovación Continua</span>
        </div>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-6 max-w-10/12 mx-auto my-12">
      {HISTORY_TILES.map((tile) => (
        <div key={tile.id} className={tile.bentoPositions}>
          <BentoTile {...tile}>{tile.content}</BentoTile>
        </div>
      ))}
    </section>
  );
}
