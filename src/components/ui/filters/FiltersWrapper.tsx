import { FilterIcon, OrderIcon, SearchIcon } from "@/components/ui/Icons";
import SelectionFilter from "./SelectionFilter";

export default function FiltersWrapper() {
  return (
    <header className="flex flex-col gap-4 justify-center items-center w-full mb-12">
      <div className="flex gap-4 w-full">
        <div className="relative flex-grow basis-0 w-full">
          <SearchIcon className="size-5 text-gray-500 absolute top-1/2 -translate-y-1/2 left-3 cursor-pointer" />
          <input
            className="flex-grow basis-0 w-full p-3 px-10 rounded-lg border-1 border-gray-400 focus:border-primary focus:shadow-lg focus:outline-none"
            type="search"
            placeholder="Buscar Productos por Nombre..."
          />
        </div>
        <div>
          <button
            className="flex gap-2 items-center py-3 px-5 rounded-lg border-1 border-gray-400 hover:border-primary hover:text-primary hover:shadow-lg hover:outline-none
        hover:bg-gray-300 cursor-pointer transition"
          >
            <FilterIcon className="size-5" />
            Filtros
          </button>
        </div>
        <div>
          <button
            className="flex gap-2 items-center py-3 px-5 rounded-lg border-1 border-gray-400 hover:border-primary hover:text-primary hover:shadow-lg hover:outline-none
        hover:bg-gray-300 cursor-pointer transition"
          >
            <OrderIcon className="size-5" />
            Ordenar por
          </button>
        </div>
      </div>
      <SelectionFilter />
    </header>
  );
}
