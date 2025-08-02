"use client";

import FeaturedCard from "../ui/FeaturedCard";
import SectionContainer from "../layout/SectionContainer";
import { FEATURED_PRODUCTS } from "@/lib/mocks";
import { motion } from "motion/react";

export default function Featured() {
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
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 mb-4 md:max-w-full 2xl:max-w-10/12 mx-auto"
      >
        {FEATURED_PRODUCTS.map(
          ({ id, name, description, price, category, image }) => (
            <motion.div key={id} variants={item}>
              <FeaturedCard
                name={name}
                description={description}
                price={price}
                category={category}
                image={image}
              />
            </motion.div>
          )
        )}
      </motion.div>
    </SectionContainer>
  );
}
