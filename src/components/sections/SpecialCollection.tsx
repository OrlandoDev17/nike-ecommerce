"use client";

import Link from "next/link";
import SectionContainer from "../layout/SectionContainer";
import { AIR_MAX_STORIES } from "@/lib/constants";
import { motion, easeInOut } from "motion/react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function SpecialCollection() {
  return (
    <SectionContainer title="Colecciones Especiales" className="mt-12 md:mt-0">
      <article className="flex flex-col md:flex-row justify-between items-center max-w-full gap-20 mb-12">
        <motion.picture
          initial={{ opacity: 0, x: -50, y: -100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <img
            className="w-full h-full object-contain rounded-xl shadow-gray-500 shadow-lg"
            src="/images/air-max-collection.webp"
            alt="Colección Especial Air Max"
          />
        </motion.picture>
        <motion.div
          initial={{ opacity: 0, x: 50, y: -100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:max-w-1/2"
        >
          <motion.h2
            initial={{ opacity: 0, x: 50, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-titillium-web"
          >
            Nike Air Max Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg"
          >
            Descubre la icónica colección Air Max con la tecnología de
            amortiguación visible que revolucionó el mundo del calzado
            deportivo. Desde el clásico Air Max 90 hasta las últimas
            innovaciones, cada modelo representa décadas de investigación y
            desarrollo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.35 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mt-2"
          >
            <Link
              className="px-6 py-2.5 rounded-full bg-primary text-white hover:-translate-y-1 hover:scale-110 transition-all"
              href="/catalogue"
            >
              Explorar Colección
            </Link>
            <Link
              className="px-6 py-2.5 rounded-full border-2 border-secondary/70 hover:-translate-y-1 hover:scale-110 transition-all"
              href="#discover"
            >
              Ver Historia
            </Link>
          </motion.div>
          <ul className="flex items-center justify-between flex-wrap mt-4">
            {AIR_MAX_STORIES.map(({ id, title, description, prefix }) => (
              <li key={id} className="flex flex-col gap-2 items-center">
                {typeof title === "number" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter
                      className="text-3xl text-primary font-titillium-web font-extrabold"
                      target={title}
                      prefix={prefix}
                    />
                  </motion.div>
                ) : (
                  <h3 className="text-3xl text-primary font-titillium-web font-extrabold">
                    {title}
                  </h3>
                )}
                <span className="text-gray-700">{description}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </article>
    </SectionContainer>
  );
}
