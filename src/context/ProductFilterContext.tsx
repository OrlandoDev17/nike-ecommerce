import { createContext, useContext, useState } from "react";
import { FilterState } from "@/types";

interface ProductFiltersContextType {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const ProductFilterContext =
  createContext<ProductFiltersContextType | null>(null);

export function ProductFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, setFilters] = useState<FilterState>({
    type: "all-types",
    category: "all-categories",
    collection: "all-collections",
    sortBy: "most-recent",
    search: "",
  });

  return (
    <ProductFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </ProductFilterContext.Provider>
  );
}

export const useProductFilters = () => useContext(ProductFilterContext);
