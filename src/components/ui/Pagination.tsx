import { Dispatch, SetStateAction } from "react";
import { FilterState } from "@/types";

export default function Pagination({
  totalPages,
  setFilters,
  filters,
}: {
  totalPages: number;
  setFilters: Dispatch<SetStateAction<FilterState>>;
  filters: FilterState;
}) {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() =>
            setFilters((prev: FilterState) => ({ ...prev, currentPage: i + 1 }))
          }
          className={`px-4 py-2 rounded-lg border cursor-pointer ${
            filters.currentPage === i + 1
              ? "bg-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-300 hover:scale-110 transition-all"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
