"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [filters, setFilters] = useState<FilterState>({
    type: "all-types",
    category: "all-categories",
    collection: "all-collections",
    sortBy: "most-recent",
    search: "",
    currentPage: 1,
    pageSize: 12,
  });

  // Leer filtros desde la URL al cargar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFilters((prev) => ({
      ...prev,
      type: params.get("type") || "all-types",
      category: params.get("category") || "all-categories",
      collection: params.get("collection") || "all-collections",
      sortBy: params.get("sortBy") || "most-recent",
      search: params.get("search") || "",
      currentPage: parseInt(params.get("currentPage") || "1"),
      pageSize: parseInt(params.get("pageSize") || "12"),
    }));
  }, [router]);

  // Actualizar la URL cuando cambian los filtros
  useEffect(() => {
    const params = new URLSearchParams();

    // Solo los filtros que deben reflejarse en la URL
    if (filters.type && filters.type !== "all-types")
      params.set("type", filters.type);
    if (filters.category && filters.category !== "all-categories")
      params.set("category", filters.category);
    if (filters.collection && filters.collection !== "all-collections")
      params.set("collection", filters.collection);
    if (filters.search && filters.search.trim() !== "")
      params.set("search", filters.search.trim());

    // Solo actualizamos pagination si el usuario la cambia
    if (filters.currentPage && filters.currentPage !== 1)
      params.set("currentPage", filters.currentPage.toString());
    if (filters.pageSize && filters.pageSize !== 12)
      params.set("pageSize", filters.pageSize.toString());

    const newURL = `${window.location.pathname}?${params.toString()}`;
    router.push(newURL);
  }, [filters]);

  return (
    <ProductFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </ProductFilterContext.Provider>
  );
}

export const useProductFilters = () => {
  const context = useContext(ProductFilterContext);
  if (!context)
    throw new Error(
      "useProductFilters must be used within ProductFilterProvider"
    );
  return context;
};
