"use client";

import { ReactNode } from "react";
import { easeInOut, motion } from "motion/react";

interface SectionContainerProps {
  children?: ReactNode;
  title: string;
  className?: string;
}

export default function SectionContainer({
  children,
  title,
  className,
}: SectionContainerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      viewport={{ once: true }}
      className={`flex flex-col gap-12 items-center w-full 2xl:max-w-9/12 mx-auto ${className}`}
    >
      <h2 className="text-4xl font-bold text-center font-titillium-web tracking-wide">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
