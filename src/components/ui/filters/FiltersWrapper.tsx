"use client";

import { FilterIcon, OrderIcon, SearchIcon } from "@/components/ui/Icons";
import SelectionPanel from "./SelectionPanel";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SortPanel from "./SortPanel";
import { useProductFilters } from "@/context/ProductFilterContext";

export default function FiltersWrapper() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const context = useProductFilters();

  if (!context) {
    throw new Error(
      "useProductFilters must be used within a ProductFilterProvider"
    );
  }

  const { filters, setFilters } = context;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSortOpen = () => {
    setSortOpen(!sortOpen);
  };

  const variants = {
    initial: {
      height: 0,
      opacity: 0,
      zIndex: 1,
      width: "auto",
    },
    animate: {
      height: "auto",
      opacity: 1,
      zIndex: 1,
      width: "auto",
    },
    exit: {
      height: 0,
      opacity: 0,
      zIndex: 1,
    },
  };

  return (
    <header className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex gap-4 w-full">
        <div className="relative flex-grow basis-0 w-full">
          <SearchIcon className="size-5 text-gray-500 absolute top-1/2 -translate-y-1/2 left-3 cursor-pointer" />
          <input
            className="flex-grow basis-0 w-full p-3 px-10 rounded-lg border-1 border-gray-400 focus:border-primary focus:shadow-lg focus:outline-none"
            type="search"
            placeholder="Buscar Productos por Nombre..."
            value={filters.search}
            onChange={handleSearch}
          />
        </div>
        <div>
          <button
            onClick={handleFilterOpen}
            className="flex gap-2 items-center py-3 px-5 rounded-lg border-1 border-gray-400 hover:border-primary hover:text-primary hover:shadow-lg hover:outline-none
        hover:bg-gray-300 cursor-pointer transition"
          >
            <FilterIcon className="size-5" />
            Filtros
          </button>
        </div>
        <div>
          <button
            onClick={handleSortOpen}
            className="flex gap-2 items-center py-3 px-5 rounded-lg border-1 border-gray-400 hover:border-primary hover:text-primary hover:shadow-lg hover:outline-none
        hover:bg-gray-300 cursor-pointer transition"
          >
            <OrderIcon className="size-5" />
            Ordenar por
          </button>
        </div>
      </div>
      <div className="flex gap-4 w-full">
        <AnimatePresence mode="wait">
          {filterOpen && (
            <motion.div
              className="w-full flex-grow basis-0"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3 }}
            >
              <SelectionPanel />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {sortOpen && (
            <motion.div
              className={`${!filterOpen ? "w-full flex-grow basis-0" : "w-0"}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3 }}
            >
              <SortPanel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
