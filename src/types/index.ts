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

export interface HeaderButtons {
  id: string;
  content: ReactNode;
}

export interface Product {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  type?: string;
  featured?: boolean;
  image?: string;
  sizes?: string[];
  colors?: string[];
  collection_slug?: string;
  category_slug?: string;
  offer?: boolean;
  discount?: number;
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

export interface CollectionCard {
  id: string;
  name: string;
  image: string;
  description: string;
  url: string;
  featured?: boolean;
}

export interface FilterState {
  type: string;
  category: string;
  collection: string;
  sortBy: string;
  search: string;
}
