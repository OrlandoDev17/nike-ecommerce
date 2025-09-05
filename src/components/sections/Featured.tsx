"use client";

import ProductCard from "@/components/ui/ProductCard";
import SectionContainer from "../layout/SectionContainer";
import { motion } from "motion/react";
import Loader from "@/components/ui/Loader";
import { useFeaturedProducts } from "@/hooks/useFeaturedProducts";
import { useCart } from "@/context/CartContext";

export default function Featured() {
  const { featuredProducts, loading, error } = useFeaturedProducts();
  const { addToCart, removeFromCart } = useCart();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay entre cada elemento
        delayChildren: 0.1, // Delay del primero
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <SectionContainer title="Productos Destacados">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full relative"
      >
        {loading && <Loader />}
        {error && <p>Error: {error}</p>}
        {featuredProducts.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard
              {...product}
              addToCart={() => addToCart(product)}
              removeFromCart={() => product.id && removeFromCart(product.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
