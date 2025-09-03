"use client";

import ProductCard from "@/components/ui/ProductCard";
import SectionContainer from "../layout/SectionContainer";
import { motion } from "motion/react";
import { useProducts } from "@/hooks/useProducts";

export default function Featured() {
  const { products } = useProducts({
    isFeatured: true,
  });

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
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
