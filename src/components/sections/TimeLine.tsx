import TimeLineCard, { TimeLineCardProps } from "@/components/ui/TimeLineCard";
import {
  CrownIcon,
  EyeIcon,
  LeafIcon,
  PhoneIcon,
  RocketIcon,
  TrendIcon,
} from "../ui/Icons";

export default function TimeLine() {
  const TIMELNE: TimeLineCardProps[] = [
    {
      id: 1,
      Icon: RocketIcon,
      iconStyles: "bg-blue-500",
      year: 1964,
      title: "Blue Ribbon Sports",
      text: "Phil Knight y Bill Bowerman crean una empresa con $500 y grandes sueños.",
      className: "mr-24 hover:-rotate-6",
    },
    {
      id: 2,
      Icon: TrendIcon,
      iconStyles: "bg-primary",
      year: 1971,
      title: "Nace el Swoosh",
      text: "Carolyn Davidson diseña el icónico logo por $35. Nike toma su nombre de la diosa griega de la victoria",
      className: "ml-24 hover:rotate-6",
    },
    {
      id: 3,
      Icon: CrownIcon,
      iconStyles: "bg-red-500",
      year: 1985,
      title: "Jordan llega al juego",
      text: "Se lanza Air Jordan 1, creando una nueva categoría: las zapatillas como declaración cultural.",
      className: "mr-24 hover:-rotate-6",
    },
    {
      id: 4,
      Icon: EyeIcon,
      iconStyles: "bg-purple-500",
      year: 1987,
      title: "Air Max Revolution",
      text: "Tinker Hatfield revoluciona el calzado con la primera cámara de aire visible en el Air Max 1.",
      className: "ml-24 hover:rotate-6",
    },
    {
      id: 5,
      Icon: TrendIcon,
      iconStyles: "bg-green-500",
      year: 1988,
      title: '"Just Do It" nace',
      text: "Tres palabras que definen una generación y se convierten en el mantra del deporte mundial.",
      className: "mr-24 hover:-rotate-6",
    },
    {
      id: 6,
      Icon: PhoneIcon,
      iconStyles: "bg-violet-500",
      year: 2006,
      title: "Era Digital",
      text: "Nike+ con Apple marca el inicio de la revolución wearable y el fitness conectado.",
      className: "ml-24 hover:rotate-6",
    },
    {
      id: 7,
      Icon: LeafIcon,
      iconStyles: "bg-emerald-500",
      year: 2019,
      title: "Move to Zero",
      text: "Compromiso total con la sostenibilidad: cero emisiones, cero residuos, futuro infinito.",
      className: "mr-24 hover:-rotate-6",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 my-16">
      <div className="flex flex-col items-center gap-8 mb-8">
        <h2 className="text-6xl text-secondary text-center font-black">
          Momentos que
          <br /> <span className="text-primary">Cambiaron todo</span>
        </h2>
        <p className="text-gray-600 max-w-3xl text-center text-lg">
          Cada hito marca una revolución que trasciende el deporte y transforma
          la cultura global.
        </p>
      </div>
      <div className="flex flex-col gap-12 relative">
        <span className="w-2 h-full bg-primary rounded-full absolute left-1/2 top-0"></span>
        {TIMELNE.map((card) => (
          <div
            key={card.id}
            className={`flex items-center z-10 ${card.className} transition-all`}
          >
            <TimeLineCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
}
