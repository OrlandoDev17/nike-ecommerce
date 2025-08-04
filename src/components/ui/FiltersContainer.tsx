"use client";

import { useState } from "react";
import { FilterIcon, SearchIcon } from "./Icons";
import FiltersModal from "./FiltersModal";
import { motion } from "motion/react";

export default function FiltersContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalState = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const variants = {
    initial: {
      opacity: 0,
      visibility: "hidden",
      height: 0,
      zIndex: -1,
    },
    visible: {
      opacity: 1,
      visibility: "visible",
      height: "auto",
      zIndex: 1,
    },
    exit: {
      opacity: 0,
      visibility: "hidden",
      height: 0,
      zIndex: -1,
    },
  };
  return (
    <div className="flex flex-col gap-4 items-center w-full mb-6">
      <div className="flex items-center gap-4 w-full">
        <form className="flex-grow basis-0 flex relative">
          <SearchIcon className="size-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            className="flex-grow basis-0 w-full border-1 border-gray-400 rounded-lg px-10 py-3 focus:outline-none focus:border-primary focus:shadow-lg"
            type="search"
            placeholder="Buscar productos..."
          />
        </form>
        <button
          onClick={handleModalState}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border-1 border-gray-400 hover:border-primary hover:text-primary hover:bg-gray-200 hover:shadow-lg cursor-pointer transition-all"
        >
          <FilterIcon className="size-5" />
          Filtros
        </button>
      </div>
      <motion.div
        variants={variants}
        initial="initial"
        animate={isOpen ? "visible" : "exit"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full flex-grow basis-0"
      >
        <FiltersModal />
      </motion.div>
    </div>
  );
}
