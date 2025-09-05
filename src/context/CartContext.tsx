"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "@/types";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  addToCart: (item: CartItem) => void;
  cart: CartItem[];
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart: CartItem[]) => {
      const existing = prevCart.find(
        (item: CartItem) => item.id === product.id
      );
      if (existing) {
        return prevCart.map((item: CartItem) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart: CartItem[]) =>
      prevCart.filter((item: CartItem) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
