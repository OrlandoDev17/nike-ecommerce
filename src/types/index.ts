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
  type?: string;
  featured?: boolean;
  image?: string;
  offer?: boolean;
  discount?: number;
  sizes?: string[];
  colors?: string[];
  collection?: string;
}

export interface DiscoverItem {
  id?: number;
  className?: string;
  bentoPositions?: string;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  titleStyles?: string;
  paragraphStyles?: string;
  Icon?: ComponentType;
  children?: ReactNode;
}

export interface AirMaxStory {
  id: number;
  title: number | string;
  description: string;
  prefix?: string;
}

export interface FooterItem {
  id?: number;
  title?: string;
  listItems?: string[];
  description?: string;
  image?: string;
}
