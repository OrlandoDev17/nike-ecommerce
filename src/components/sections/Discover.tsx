"use client";

import SectionContainer from "../layout/SectionContainer";
import BentoTile from "../ui/BentoTile";
import { DISCOVER_NIKE } from "@/lib/constants";
import { motion } from "motion/react";

export default function Discover() {
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
    <SectionContainer title="Descubre Nike" className="mt-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-4 gap-4 m-4"
      >
        {DISCOVER_NIKE.map(
          ({
            id,
            className,
            title,
            description,
            content,
            titleStyles,
            paragraphStyles,
            Icon,
            bentoPositions,
          }) => (
            <motion.div variants={item} key={id} className={bentoPositions}>
              <BentoTile
                className={className}
                title={title}
                description={description}
                titleStyles={titleStyles}
                paragraphStyles={paragraphStyles}
                Icon={Icon}
              >
                {content}
              </BentoTile>
            </motion.div>
          )
        )}
      </motion.div>
    </SectionContainer>
  );
}
