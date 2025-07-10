import Link from "next/link";

export default function Footer() {
  interface FooterItem {
    id?: number;
    title?: string;
    listItems?: string[];
    description?: string;
    image?: string;
  }

  const FOOTER_ITEMS: FooterItem[] = [
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

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="grid grid-cols-4 place-items-center max-w-[63.3%] mx-auto text-white">
        {FOOTER_ITEMS.map(({ id, title, listItems, description, image }) => (
          <ul className="flex flex-col gap-4 py-12" key={id}>
            {image && <img className="w-24" src={image} alt="Logo de Nike" />}
            {title && <h3 className="text-xl font-bold">{title}</h3>}
            {description && (
              <p className="text-gray-300 text-balance">{description}</p>
            )}
            {listItems?.map((item) => (
              <li key={item}>
                <Link
                  className="text-gray-300 hover:text-primary transition-all"
                  href={item}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center max-w-[63.3%] mx-auto gap-6">
        <hr className="w-full mx-auto text-gray-500" />
        <span className="text-gray-300 text-balance text-sm">
          Hecho con ❤️ por Orlando López. Para fines educativos.
        </span>
      </div>
    </footer>
  );
}
