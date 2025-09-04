"use client";

import { motion } from "motion/react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <motion.div
      className="absolute top-18 right-1 flex flex-col gap-4 bg-primary text-white w-xl rounded-l-2xl p-8"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      transition={{ duration: 0.2 }}
    >
      <h2>Carrito de Compras</h2>
      <div className="flex flex-col gap-4">
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <img className="w-64" src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}
