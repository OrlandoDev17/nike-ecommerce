import { ComponentType, SVGProps } from "react";

import { MouseEvent } from 'react';

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
