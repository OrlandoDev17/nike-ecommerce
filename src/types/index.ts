import { ComponentType, ReactNode, SVGProps } from "react";

import { MouseEvent } from "react";

export interface NavbarItem {
  id: string;
  label: string;
  href: string;
  onMouseEnter?: (e: MouseEvent<HTMLElement>) => void;
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export interface HeaderIcon {
  id: string;
  icon: ComponentType<IconProps>;
}

export interface Product {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  featured?: boolean;
  image?: string;
}

export interface DiscoverItem {
  id?: number;
  className?: string;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  titleStyles?: string;
  paragraphStyles?: string;
  Icon?: ComponentType;
  children?: ReactNode;
}
