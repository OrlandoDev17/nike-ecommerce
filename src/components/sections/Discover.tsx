import Link from "next/link";
import SectionContainer from "../layout/SectionContainer";
import BentoTile from "../ui/BentoTile";

export interface DiscoverItem {
  id?: number;
  className?: string;
  title?: string;
  description?: string;
  content?: React.ReactNode;
}

export default function Discover() {
  const DISCOVER_NIKE: DiscoverItem[] = [
    {
      id: 1,
      className:
        "col-start-1 row-start-1 col-span-3 row-span-2 md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-2 bg-gray-300",
      title: "Just Do It",
      description:
        "Desde 1971, Nike ha sido sinónimo de innovación deportiva. Fundada por Bill Bowerman y Phil Knight, comenzamos como Blue Ribbon Sports y evolucionamos hasta convertirnos en la marca deportiva más reconocida del mundo, inspirando a atletas de todos los niveles.",
    },
    {
      id: 2,
      className:
        "col-start-1 row-start-3 row-span-2 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-2 bg-gray-300",
      title: "Move to Zero",
      description: "Cero carbono y residuos",
    },
    {
      id: 3,
      className:
        "col-start-2 row-start-3 col-span-2 row-span-2 md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2 bg-gray-300",
      title: "Air Jordan",
      description: "El legado de Michael Jordan desde 1985",
      content: (
        <>
          <p>La línea más icónica del basketball mundial</p>
          <Link href="/catalogue">Ver Colección</Link>
        </>
      ),
    },
    {
      id: 4,
      className:
        "col-start-4 row-start-1 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1 bg-gray-300",
      title: "1971",
      description: "Año de Fundación",
      content: <span>Portland, Oregon</span>,
    },
    {
      id: 5,
      className:
        "col-start-5 row-start-1 col-span-2 md:col-start-5 md:row-start-1 md:col-span-2 md:row-span-1 bg-gray-300",
      title: "Nike Air",
      description: "Revolucionando el calzado desde 1979",
      content: <span>Tecnología de amortiguación con aire encapsulado</span>,
    },
    {
      id: 6,
      className:
        "col-start-4 row-start-2 col-span-2 md:col-start-4 md:row-start-2 md:col-span-2 md:row-span-1 bg-gray-300",
      title: "Presencia Global",
      description: "Liderando en más de 190 países",
      content: (
        <>
          <ul>
            <li>
              <h3>$51.2B</h3>
              <span>Ingresos 2023</span>
            </li>
            <li>
              <h3>19,100+</h3>
              <span>Empleados</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 7,
      className:
        "col-start-6 row-start-2 md:col-start-6 md:row-start-2 md:col-span-1 md:row-span-1 bg-gray-300",
      title: "1000+",
      description: "Patentes Registradas",
    },
    {
      id: 8,
      className:
        "col-start-4 row-start-3 col-span-2 row-span-2 md:col-start-4 md:row-start-3 md:col-span-2 md:row-span-2 bg-gray-300",
      title: "Tecnologías Nike",
      content: (
        <>
          <ul>
            <li>
              <h3>React Foam</h3>
              <span>Amortiguación ligera</span>
            </li>
            <li>
              <h3>Flyknit</h3>
              <span>Construcción sin costuras</span>
            </li>
            <li>
              <h3>Zoom Air</h3>
              <span>Respuesta explosiva</span>
            </li>
            <li>
              <h3>Dri-FIT</h3>
              <span>Gestion de humedad</span>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <SectionContainer title="Descubre Nike" className="mt-24">
      <div className="grid grid-cols-6 md:grid-cols-6 grid-rows-4 md:grid-rows-4 gap-4 md:gap-4 m-4">
        {DISCOVER_NIKE.map(({ id, className, title, description, content }) => (
          <BentoTile
            key={id}
            className={className}
            title={title}
            description={description}
          >
            {content}
          </BentoTile>
        ))}
      </div>
    </SectionContainer>
  );
}
