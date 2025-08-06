import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { Product } from "@/types";
import { create } from "zustand";

type Filters = {
  type: string;
  collections: string;
  category: string;
};

interface FilterStore {
  filters: Filters;
  setFilter: (type: keyof Filters, value: string) => void;
  filterProducts: (products: Product[]) => Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  filters: {
    type: "all-types",
    collections: "all-collections",
    category: "all-categories",
  },
  searchQuery: "",

  setFilter: (type: keyof Filters, value: string) =>
    set((state) => ({
      filters: { ...state.filters, [type]: value },
    })),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  filterProducts: (products) => {
    const { filters } = get();
    const query = get().searchQuery;
    return products.filter((product) => {
      const matchType =
        filters.type === "all-types" || product.type === filters.type;

      const matchCollection =
        filters.collections === "all-collections" ||
        product.collection === filters.collections;

      const matchCategory =
        filters.category === "all-categories" ||
        product.category === filters.category;

      const matchSearch =
        query === "" ||
        product.name?.toLowerCase().includes(query) ||
        product.collection?.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query);
      return matchType && matchCollection && matchCategory && matchSearch;
    });
  },
}));
