import { useEffect, useState } from "react";

export type ProductFilters = {
  type?: string;
  category?: string;
  collection?: string;
  sortBy?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
};

export function useProductFilters() {
  const [filters, setFilters] = useState<ProductFilters>({
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
    setFilters({
      type: params.get("type") || "all-types",
      category: params.get("category") || "all-categories",
      collection: params.get("collection") || "all-collections",
      sortBy: params.get("sortBy") || "most-recent",
      search: params.get("search") || "",
      currentPage: parseInt(params.get("currentPage") || "1"),
      pageSize: parseInt(params.get("pageSize") || "12"),
    });
  }, []);

  // Actualizar la URL cuando cambian los filtros
  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.type && filters.type !== "all-types")
      params.set("type", filters.type);
    if (filters.category && filters.category !== "all-categories")
      params.set("category", filters.category);
    if (filters.collection && filters.collection !== "all-collections")
      params.set("collection", filters.collection);
    if (filters.sortBy) params.set("sortBy", filters.sortBy);
    if (filters.search) params.set("search", filters.search);
    if (filters.currentPage)
      params.set("currentPage", filters.currentPage.toString());
    if (filters.pageSize) params.set("pageSize", filters.pageSize.toString());

    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newURL);
  }, [filters]);

  return { filters, setFilters };
}
