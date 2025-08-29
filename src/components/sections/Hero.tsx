"use client";

import { easeInOut, motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative top-24 md:top-0 min-h-screen flex flex-col md:flex-row grow-0 md:justify-between items-center max-w-10/12 2xl:max-w-0/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -50, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-6xl 2xl:text-7xl font-black font-titillium-web tracking-wider"
        >
          Nike Dunk High
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -50, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.25 }}
          viewport={{ once: true }}
          className="text-5xl 2xl:text-6xl text-primary font-light font-titillium-web tracking-wide"
        >
          Black Orange
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-lg 2xl:max-w-xl mt-6 text-gray-600 text-balance"
        >
          Este modelo de Nike Dunk High es una declaración de estilo audaz y
          urbano. Su diseño combina una paleta vibrante de naranja intenso con
          negro profundo, creando un contraste visual que no pasa desapercibido.
          Está confeccionado en cuero premium, lo que le da un acabado pulido y
          duradero.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -20, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-12 mt-8"
        >
          <button className="px-7 py-4 bg-primary/80 text-white rounded-xl shadow-primary hover:-translate-y-1 hover:bg-primary hover:scale-110 transition-all">
            Agregar al carrito
          </button>
          <span className="text-4xl font-titillium-web font-bold tracking-wider">
            $385
          </span>
        </motion.div>
      </motion.div>
      <motion.picture
        initial={{ opacity: 0, x: 100, y: -100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        viewport={{ once: true }}
        className="md:flex-grow md:basis-0"
      >
        <img
          className="w-full h-full mb-32 md:mb-0 drop-shadow-2xl drop-shadow-primary"
          src="/images/shoe.webp"
          alt="Zapato Promocional de Nike"
        />
      </motion.picture>
    </section>
  );
}
