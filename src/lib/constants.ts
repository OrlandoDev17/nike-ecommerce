// Tipos
import { NavbarItem, HeaderIcon } from "@/types";

// Iconos
import { SearchIcon, CartIcon, ProfileIcon } from "../components/ui/Icons";

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
    id: "sneakers",
    label: "Sneakers",
    href: "/sneakers",
  },
  {
    id: "offers",
    label: "Ofertas",
    href: "/offers",
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
