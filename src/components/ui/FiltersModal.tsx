"use client";

import { useFilterStore } from "@/store/useFiltersStore";
import { SELECTIONS } from "@/lib/constants";

export default function FiltersModal() {
  const { filters, setFilter } = useFilterStore();

  return (
    <div className="grid grid-cols-3 w-full border-1 border-gray-400 shadow-lg rounded-lg px-12 py-8">
      {SELECTIONS.map(({ id, title, options }) => (
        <form className="flex flex-col gap-4" key={id}>
          <label className="text-2xl font-titillium-web font-semibold tracking-wide">
            {title}
          </label>
          <div className="flex flex-col gap-4">
            {options.map(({ id: optionId, title }) => (
              <label
                className="flex items-center group cursor-pointer"
                key={optionId}
                onClick={() => setFilter(id as keyof typeof filters, optionId)}
              >
                {filters[id as keyof typeof filters] === optionId ? (
                  <div className="size-5 rounded-full mr-3 bg-primary flex items-center justify-center">
                    <div className="size-2 rounded-full bg-white" />
                  </div>
                ) : (
                  <div className="size-5 rounded-full border-2 mr-3 border-gray-500 group-hover:border-primary transition" />
                )}
                <span className="group-hover:text-primary transition">
                  {title}
                </span>
              </label>
            ))}
          </div>
        </form>
      ))}
    </div>
  );
}
