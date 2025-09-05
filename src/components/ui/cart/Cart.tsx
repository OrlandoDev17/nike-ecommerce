"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/context/CartContext";
import CartCard from "./CartCard";
import { CloseIcon, WalletIcon } from "@/components/ui/Icons";
import { useEffect, useState } from "react";

export default function Cart({
  closeCart,
  isOpen,
}: {
  closeCart: () => void;
  isOpen: boolean;
}) {
  const [totalCost, setTotalCost] = useState<number>(0);

  const { cart, removeFromCart } = useCart();

  const variants = {
    initial: { opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" },
    animate: { opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" },
    exit: { opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" },
  };

  useEffect(() => {
    const totalRaw = cart.reduce((acc, item) => {
      const price = typeof item.price === "number" ? item.price : 0;
      const quantity = item.quantity ?? 1;
      return acc + price * quantity;
    }, 0);
    // Truncar a 2 decimales sin redondear
    const truncated = Math.trunc(totalRaw * 100) / 100;
    setTotalCost(truncated);
  }, [cart]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed top-0 right-0 flex flex-col bg-primary text-white h-screen rounded-l-2xl w-xl"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <header className="flex items-center gap-2 bg-primary-dark p-6 relative rounded-tl-2xl">
          <h3 className="text-2xl font-semibold">Mi Carrito</h3>
          <span className="text-xl font-semibold">({cart.length})</span>
          <button
            onClick={closeCart}
            className="absolute top-5 right-6 cursor-pointer p-2 rounded-xl hover:bg-primary  transition-all"
          >
            <CloseIcon className="size-7" />
          </button>
        </header>
        <div className="flex flex-col gap-4 p-6 flex-grow basis-0 overflow-y-auto">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            cart.map((item) => {
              if (!item.id) return null; // Skip items without an id
              return (
                <CartCard
                  key={item.id}
                  removeFromCart={removeFromCart}
                  {...item}
                />
              );
            })
          )}
        </div>
        <footer className="flex flex-col gap-4 bg-primary-dark p-6 relative rounded-bl-2xl">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl font-semibold">Total:</h3>
            <span className="text-3xl font-semibold font-titillium-web tracking-wide">
              $
              {new Intl.NumberFormat("es-ES", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              }).format(totalCost)}
            </span>
          </div>
          <button className="flex items-center justify-center gap-4 bg-white text-secondary py-3 rounded-xl hover:bg-gray-200 hover:-translate-y-1 transition-all cursor-pointer">
            <WalletIcon className="size-6 text-primary" />
            <span className="text-xl font-medium text-primary">Pagar</span>
          </button>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
