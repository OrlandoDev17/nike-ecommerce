import { useState } from "react";

export type ProductFilters = {
  collection: string;
  category: string;
  types: string;
};

export function useProductFilters() {
  const [filters, setFilters] = useState<ProductFilters>({
    collection: "all-collections",
    category: "all-categories",
    types: "all-types",
  });

  const updateFilters = (
    key: keyof ProductFilters,
    value: string | boolean | undefined
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () =>
    setFilters({
      collection: "all-collections",
      category: "all-categories",
      types: "all-types",
    });

  return {
    filters,
    updateFilters,
    resetFilters,
  };
}
