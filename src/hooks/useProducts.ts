import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Product } from "@/types";

export type ProductFilters = {
  type?: string;
  category?: string;
  collection?: string;
  sortBy?: string;
  search?: string;
};

export function useProducts(filters?: ProductFilters) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sortMap: Record<string, { field: string; ascending: boolean }> = {
      "most-recent": { field: "created_at", ascending: true },
      "most-popular": { field: "views", ascending: true },
      "price-asc": { field: "price", ascending: false },
      "price-desc": { field: "price", ascending: true },
      "alphabetical-asc": { field: "name", ascending: true },
      "alphabetical-desc": { field: "name", ascending: false },
    };

    const fetchProducts = async () => {
      setLoading(true);
      let query = supabase.from("products").select("*");

      // Filtros

      if (filters?.type && filters.type !== "all-types") {
        query = query.eq("type", filters.type);
      }

      if (filters?.category && filters.category !== "all-categories") {
        query = query.eq("category_slug", filters.category);
      }

      if (filters?.collection && filters.collection !== "all-collections") {
        query = query.eq("collection_slug", filters.collection);
      }

      // Ordenar

      if (filters?.sortBy && sortMap[filters.sortBy]) {
        const { field, ascending } = sortMap[filters.sortBy];
        query = query.order(field, { ascending });
      }

      // Buscar

      if (filters?.search && filters.search.trim() !== "") {
        query = query.ilike("name", `%${filters.search.trim()}%`);
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
        setProducts([]);
      } else {
        setProducts(data as Product[]);
        setError(null);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [filters]);

  return { products, loading, error };
}
