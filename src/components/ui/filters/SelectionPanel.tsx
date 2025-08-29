"use client";

import { SELECTIONS } from "@/lib/constants";
import { useProductFilters } from "@/context/ProductFilterContext";
import { FilterState } from "@/types";

export default function SelectionFilter() {
  const context = useProductFilters();

  if (!context) {
    throw new Error(
      "useProductFilters must be used within a ProductFilterProvider"
    );
  }

  const { filters, setFilters } = context;

  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters((prevState) => ({
      ...prevState,
      [filterKey]: value,
      currentPage: 1,
    }));
  };

  return (
    <div className="grid grid-cols-3 gap-4 border-1 border-gray-400 py-8 px-12 rounded-lg shadow-lg w-full">
      {SELECTIONS.map(({ id, title, options }) => (
        <div key={id} className="flex flex-col gap-4">
          <span className="text-2xl font-titillium-web font-semibold transition-all duration-200">
            {title}
          </span>
          <div className="flex flex-col gap-2">
            {options.map((option) => (
              <article
                key={option.id}
                className="flex gap-2 items-center cursor-pointer group"
                onClick={() =>
                  handleFilterChange(id as keyof FilterState, option.id)
                }
              >
                <div
                  className={`relative size-5 rounded-full ${
                    filters[id as keyof FilterState] === option.id
                      ? "bg-primary"
                      : "border-3 border-gray-400 group-hover:border-primary transition"
                  }`}
                >
                  {filters[id as keyof FilterState] === option.id && (
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white"></span>
                  )}
                </div>
                <span
                  className="group-hover:text-primary transition"
                  key={option.id}
                >
                  {option.title}
                </span>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
