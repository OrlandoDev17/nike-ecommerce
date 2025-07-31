// Tipos
import {
  NavbarItem,
  HeaderIcon,
  DiscoverItem,
  AirMaxStory,
  FooterItem,
} from "@/types";

// Iconos
import {
  SearchIcon,
  CartIcon,
  ProfileIcon,
  NikeIcon,
  PlantIcon,
} from "../components/ui/Icons";

import Link from "next/link";

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    id: "home",
    label: "Inicio",
    href: "/",
  },
  {
    id: "catalogue",
    label: "Catalogo",
    href: "/catalogue",
  },
  {
    id: "collections",
    label: "Colecciones",
    href: "/collections",
  },
  {
    id: "history",
    label: "Historia",
    href: "/history",
  },
];

export const HEADER_ICONS: HeaderIcon[] = [
  {
    id: "search",
    icon: SearchIcon,
  },
  {
    id: "cart",
    icon: CartIcon,
  },
  {
    id: "profile",
    icon: ProfileIcon,
  },
];

export const DISCOVER_NIKE: DiscoverItem[] = [
  {
    id: 1,
    className:
      "bg-gradient-to-br from-black via-zinc-900 to-slate-800 text-white items-start p-10",
    bentoPositions:
      "col-start-1 row-start-1 col-span-3 row-span-2 md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-2",
    title: "Just Do It",
    description:
      "Desde 1971, Nike ha sido sinónimo de innovación deportiva. Fundada por Bill Bowerman y Phil Knight, comenzamos como Blue Ribbon Sports y evolucionamos hasta convertirnos en la marca deportiva más reconocida del mundo, inspirando a atletas de todos los niveles.",
    content: (
      <button className="mt-2 bg-white text-secondary font-semibold px-4 py-3 rounded-lg shadow-xl cursor-pointer shadow-white/20 hover:-translate-y-1 hover:scale-110 transition-all">
        Nuestra Historia
      </button>
    ),
    titleStyles: "mt-4",
    paragraphStyles: "text-gray-400",
    Icon: NikeIcon,
  },
  {
    id: 2,
    className:
      "bg-gradient-to-t from-slate-900 to-slate-700 px-4 py-10 items-center h-[260px]",
    bentoPositions:
      "col-start-1 row-start-3 row-span-2 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-2",
    title: "Move to Zero",
    description: "Cero carbono y residuos",
    titleStyles: "text-base text-white",
    paragraphStyles: "text-sm text-gray-400 text-center",
    Icon: PlantIcon,
  },
  {
    id: 3,
    className:
      "bg-gradient-to-br from-black via-zinc-800 to-zinc-700 text-white p-10 h-[260px]",
    bentoPositions:
      "col-start-2 row-start-3 col-span-2 row-span-2 md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2",
    title: "Air Jordan",
    description: "El legado de Michael Jordan desde 1985",
    content: (
      <>
        <p className="text-sm text-gray-400">
          La línea más icónica del basketball mundial
        </p>
        <Link
          className="mt-4 bg-primary text-white font-semibold px-5 py-3 rounded-lg shadow-xl shadow-primary/30 w-fit hover:-translate-y-1 hover:scale-110 transition-all"
          href="/catalogue"
        >
          Ver Colección
        </Link>
      </>
    ),
    titleStyles: "text-xl",
    paragraphStyles: "text-white text-sm",
  },
  {
    id: 4,
    className:
      "bg-gradient-to-b from-primary to-orange-600 text-white p-6 items-center",
    bentoPositions:
      "col-start-4 row-start-1 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1",
    title: "1971",
    description: "Año de Fundación",
    content: <span className="text-xs text-gray-200">Portland, Oregon</span>,
    paragraphStyles: "text-sm",
  },
  {
    id: 5,
    className:
      "bg-gradient-to-tl from-black via-zinc-900 to-slate-700 text-white px-6 py-8",
    bentoPositions:
      "col-start-5 row-start-1 col-span-2 md:col-start-5 md:row-start-1 md:col-span-2 md:row-span-1",
    title: "Nike Air",
    description: "Revolucionando el calzado desde 1979",
    content: (
      <span className="text-xs text-gray-400">
        Tecnología de amortiguación con aire encapsulado
      </span>
    ),
    titleStyles: "text-xl",
    paragraphStyles: "text-sm text-gray-200",
  },
  {
    id: 6,
    className:
      "bg-gradient-to-br from-black via-zinc-900 to-slate-700 text-white px-6 py-4 relative",
    bentoPositions:
      "col-start-4 row-start-2 col-span-2 md:col-start-4 md:row-start-2 md:col-span-2 md:row-span-1",
    title: "Presencia Global",
    description: "Liderando en más de 190 países",
    content: (
      <>
        <ul className="flex items-center gap-6 mt-4">
          <li>
            <h3 className="font-semibold">$51.2B</h3>
            <span className="text-sm text-gray-400">Ingresos 2023</span>
          </li>
          <li>
            <h3 className="font-semibold">19,100+</h3>
            <span className="text-sm text-gray-400">Empleados</span>
          </li>
        </ul>
      </>
    ),
    titleStyles: "text-xl",
    paragraphStyles: "text-gray-400 text-sm",
  },
  {
    id: 7,
    className:
      "col-start-6 row-start-2 md:col-start-6 md:row-start-2 md:col-span-1 md:row-span-1 text-primary justify-center items-center p-6 text-center",
    bentoPositions:
      "col-start-6 row-start-2 md:col-start-6 md:row-start-2 md:col-span-1 md:row-span-1",
    title: "1000+",
    description: "Patentes Registradas",
    paragraphStyles: "text-gray-600 text-sm",
  },
  {
    id: 8,
    className:
      "col-start-4 row-start-3 col-span-2 row-span-2 md:col-start-4 md:row-start-3 md:col-span-2 md:row-span-2 px-6 py-10 h-[260px]",
    bentoPositions:
      "col-start-4 row-start-3 col-span-2 row-span-2 md:col-start-4 md:row-start-3 md:col-span-2 md:row-span-2",
    title: "Tecnologías Nike",
    content: (
      <>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6">
          <li className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">React Foam</h3>
            <span className="text-xs text-gray-700">Amortiguación ligera</span>
          </li>
          <li className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Flyknit</h3>
            <span className="text-xs text-gray-700">
              Construcción sin costuras
            </span>
          </li>
          <li className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Zoom Air</h3>
            <span className="text-xs text-gray-700">Respuesta explosiva</span>
          </li>
          <li className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Dri-FIT</h3>
            <span className="text-xs text-gray-700">Gestion de humedad</span>
          </li>
        </ul>
      </>
    ),
    titleStyles: "text-xl",
  },
];

export const AIR_MAX_STORIES: AirMaxStory[] = [
  {
    id: 1,
    title: 1987,
    description: "Primer Air Max",
    prefix: "",
  },
  {
    id: 2,
    title: 35,
    description: "Modelos Iconicos",
    prefix: "+",
  },
  {
    id: 3,
    title: "∞",
    description: "Innovación",
  },
];

export const FOOTER_ITEMS: FooterItem[] = [
  {
    id: 1,
    description:
      "La mejor selección de productos Nike con la calidad y autenticidad que esperas de la marca líder mundial.",
    image: "/logo.svg",
  },
  {
    id: 2,
    title: "Comprar",
    listItems: [
      "Sneakers",
      "Ropa Deportiva",
      "Accesorios",
      "Ofertas Especiales",
    ],
  },
  {
    id: 3,
    title: "Ayuda",
    listItems: ["Guía de Tallas", "Envios y Devoluciones", "Contacto", "FAQ"],
  },
  {
    id: 4,
    title: "Empresa",
    listItems: [
      "Sobre Nike",
      "Carreras",
      "Términos y Condiciones",
      "Política de Privacidad",
    ],
  },
];
