"use client";

import AnimatedCounter from "./AnimatedCounter";
import { motion } from "motion/react";

export interface HistoryTileProps {
  id?: number;
  position: string;
  number: number | string;
  prefix: string;
  subtitle: string;
  paragraph: string;
}

export default function HistoryTile({
  position,
  number,
  prefix,
  subtitle,
  paragraph,
}: HistoryTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col gap-2 items-start col-span-1 row-span-2 shadow-lg shadow-primary/30 px-8 py-6 rounded-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all ${position}`}
    >
      {number === Number(number) ? (
        <AnimatedCounter
          target={number}
          prefix={prefix}
          className="text-3xl text-primary font-titillium-web font-extrabold"
        />
      ) : (
        <span className="text-3xl text-primary font-titillium-web font-extrabold">
          {number}
        </span>
      )}
      <h4 className="text-lg font-semibold text-secondary">{subtitle}</h4>
      <p className="text-gray-500 text-balance">{paragraph}</p>
    </motion.article>
  );
}
