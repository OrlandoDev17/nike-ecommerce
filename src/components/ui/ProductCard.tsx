"use client";

import { CartItem, useCart } from "@/context/CartContext";
import CategoryBadge from "./CategoryBadge";
import { useEffect, useState } from "react";

export default function ProductCard({
  id,
  name,
  description,
  price,
  type,
  collection_slug,
  category_slug,
  image,
  quantity,
  addToCart,
  removeFromCart,
}: CartItem & {
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
}) {
  const { cart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Check if the product is in the cart when the component mounts or when cart changes
    if (id) {
      const productInCart = cart.some((item) => item.id === id);
      setIsInCart(productInCart);
    }
  }, [cart, id]);

  const product = {
    id,
    name,
    description,
    price,
    type,
    collection_slug,
    category_slug,
    image,
    quantity,
  };

  const handleIsInCart = () => {
    if (isInCart && id) {
      removeFromCart(id);
      setIsInCart(false);
    } else {
      addToCart(product);
      setIsInCart(true);
    }
  };

  return (
    <article className="flex flex-col gap-4 rounded-xl shadow-xl p-4 group hover:scale-102 transition-all z-10">
      <header className="bg-gray-300/70 px-4 rounded-xl h-[250px] relative">
        <img
          className="w-full h-full object-contain"
          src={`${image}`}
          alt={`${name}`}
        />
      </header>
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <CategoryBadge category={type as string} />
          <CategoryBadge category={category_slug as string} />
          <CategoryBadge category={collection_slug as string} />
        </div>
        <h3 className="text-xl 2xl:text-2xl font-bold font-titillium-web group-hover:text-primary transition-all duration-200">
          {name}
        </h3>
        <p className="text-sm text-gray-600 text-balance">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl 2xl:text-3xl font-bold font-titillium-web tracking-wide group-hover:text-primary transition-all duration-200">
              ${price}
            </span>
          </div>
        </div>
      </div>
      <footer className="flex flex-grow basis-0 items-end mt-2">
        <button
          className="border-2 w-full border-primary px-4 py-2 rounded-md text-lg hover:-translate-y-1 hover:bg-primary hover:text-white transition-all cursor-pointer"
          onClick={() => handleIsInCart()}
        >
          {isInCart ? "Quitar del carrito" : "Añadir al carrito"}
        </button>
      </footer>
    </article>
  );
}
