"use client";

import { useState, useRef } from "react";
import { NAVBAR_ITEMS, HEADER_ICONS } from "@/lib/constants";
import NavbarItem from "./NavbarItem";
import NavMenu from "./NavMenu";

export default function Header() {
  const [backdropStyle, setBackdropStyle] = useState<React.CSSProperties>({
    opacity: 0,
    visibility: "hidden",
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHover = (rect: DOMRect | null) => {
    if (!rect) {
      timeoutRef.current = setTimeout(() => {
        setBackdropStyle({
          opacity: 0,
          visibility: "hidden",
        });
      }, 150);
      return;
    }

    setBackdropStyle({
      opacity: 1,
      visibility: "visible",
      left: rect.left,
      width: rect.width,
    });
  };

  return (
    <header
      id="header"
      className="fixed top-0 w-full left-0 z-50 nav backdrop-blur-lg"
    >
      <div
        className="flex items-center justify-between max-w-10/12 mx-auto py-4"
        onMouseLeave={() => handleHover(null)}
      >
        <picture className="flex flex-grow basis-0 ">
          <img
            className="w-16 lg:w-24"
            src="/images/logo.svg"
            alt="Logo de Nike"
          />
        </picture>
        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {NAVBAR_ITEMS.map(({ id, label, href }) => (
              <li
                key={id}
                className="px-4 inline-block"
                onMouseEnter={(e) =>
                  handleHover(e.currentTarget.getBoundingClientRect())
                }
              >
                <NavbarItem id={id} label={label} href={href} />
              </li>
            ))}
          </ul>
        </nav>
        <ul className="hidden lg:flex items-center flex-grow basis-0 justify-end">
          {HEADER_ICONS.map(({ id, icon: Icon }) => (
            <li
              key={id}
              className="px-4 inline-block"
              onMouseEnter={(e) =>
                handleHover(e.currentTarget.getBoundingClientRect())
              }
            >
              <Icon className="size-6" />
            </li>
          ))}
        </ul>
        <NavMenu />
        <div
          id="menu-backdrop"
          className="absolute bg-primary rounded-full transition-all duration-300 ease-in-out opacity-1 -z-10"
          style={{
            ...backdropStyle,
            top: 0,
            height: "8px",
            pointerEvents: "none",
          }}
        />
      </div>
    </header>
  );
}
