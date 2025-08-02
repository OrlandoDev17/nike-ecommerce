"use client";

import { useState } from "react";
import { FilterIcon, SearchIcon } from "../ui/Icons";
import FilterModal from "../ui/FilterModal";

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <section className="flex flex-col gap-2 w-full max-w-11/12 mx-auto pb-12">
        <form className="flex items-center relative flex-grow basis-0">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input
            type="search"
            id="search"
            placeholder="Buscar Productos por nombre..."
            className="w-full border-1 border-gray-400 rounded-lg px-4 py-3 pl-12"
          />
          <button
            onClick={handleOpen}
            className="flex items-center gap-3 border-1 border-gray-400 rounded-lg px-6 py-3 hover:border-primary hover:bg-gray-200 hover:text-primary transition-all cursor-pointer"
          >
            <FilterIcon className="size-5" />
            Filtros
          </button>
        </form>
        {isOpen && <FilterModal />}
      </section>
    </>
  );
}
