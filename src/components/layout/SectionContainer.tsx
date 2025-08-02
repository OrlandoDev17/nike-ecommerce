"use client";

import { ReactNode } from "react";
import { easeInOut, motion } from "motion/react";

interface SectionContainerProps {
  children?: ReactNode;
  title: string;
  className?: string;
  span?: string;
  type?: "home" | "catalogue";
  screenSize?: string;
  color?: string;
  description?: string;
}

export default function SectionContainer({
  children,
  title,
  className,
  span,
  type = "home",
  color = "text-primary",
  screenSize = "max-w-9/12",
  description,
}: SectionContainerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      viewport={{ once: true }}
      className={`flex flex-col items-center w-full md:${screenSize} mx-auto ${className} ${
        type === "home" ? "gap-12" : "gap-4"
      }`}
    >
      {type === "home" ? (
        <h2 className="text-4xl font-bold text-center font-titillium-web tracking-wide">
          {title}
        </h2>
      ) : (
        <>
          <h2 className="text-4xl font-black text-center tracking-wide">
            {title} <span className={color}>{span}</span>
          </h2>
          <p className="text-center text-lg">{description}</p>
        </>
      )}
      {children}
    </motion.section>
  );
}
