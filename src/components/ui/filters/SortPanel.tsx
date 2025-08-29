import { SORTS } from "@/lib/constants";
import { useProductFilters } from "@/context/ProductFilterContext";
import { FilterState } from "@/types";

export default function SortPanel() {
  const context = useProductFilters();

  if (!context) {
    throw new Error(
      "useProductFilters must be used within a ProductFilterProvider"
    );
  }

  const { filters, setFilters } = context;

  const updateSort = (id: string) => {
    setFilters({ ...filters, sortBy: id });
  };

  return (
    <ul
      className={`w-fit flex flex-col gap-4 border-1 border-gray-400 py-8 px-12 rounded-lg shadow-lg`}
    >
      {SORTS.map(({ id, title }) => (
        <li
          key={id}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => updateSort(id)}
        >
          <div
            className={`relative rounded-full size-5 ${
              filters.sortBy === id
                ? "bg-primary"
                : " border-3 border-gray-400 group-hover:border-primary transition"
            }`}
          >
            {filters.sortBy === id && (
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white"></span>
            )}
          </div>
          <span className="group-hover:text-primary transition">{title}</span>
        </li>
      ))}
    </ul>
  );
}
