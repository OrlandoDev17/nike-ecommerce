"use client";

import { useState } from "react";
import { CartIcon } from "../Icons";
import { useCart } from "@/context/CartContext";
import Cart from "./Cart";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const handleToggleCart = () => {
    setIsOpen(!isOpen);
    isOpen
      ? document.body.classList.remove("open")
      : document.body.classList.add("open");
  };

  return (
    <>
      <button className="relative" onClick={handleToggleCart}>
        <span className="absolute flex items-center justify-center text-white -top-2 -right-6 size-6 bg-primary rounded-full">
          {cart.length}
        </span>
        <CartIcon className="size-8 cursor-pointer hover:text-primary transition" />
      </button>
      <Cart closeCart={handleToggleCart} isOpen={isOpen} />
    </>
  );
}
