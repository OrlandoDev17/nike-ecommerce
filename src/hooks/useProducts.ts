import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Product } from "@/types";

export type ProductFilters = {
  type?: string;
  category?: string;
  collection?: string;
  sortBy?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
};

export function useProducts(filters?: ProductFilters) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    const sortMap: Record<string, { field: string; ascending: boolean }> = {
      "most-recent": { field: "created_at", ascending: false },
      "most-popular": { field: "views", ascending: false },
      "price-asc": { field: "price", ascending: true },
      "price-desc": { field: "price", ascending: false },
      "alphabetical-asc": { field: "name", ascending: true },
      "alphabetical-desc": { field: "name", ascending: false },
    };

    const applyFilters = (query: any) => {
      if (filters?.type && filters.type !== "all-types") {
        query = query.eq("type", filters.type);
      }
      if (filters?.category && filters.category !== "all-categories") {
        query = query.eq("category_slug", filters.category);
      }
      if (filters?.collection && filters.collection !== "all-collections") {
        query = query.eq("collection_slug", filters.collection);
      }
      if (filters?.search && filters.search.trim() !== "") {
        query = query.ilike("name", `%${filters.search.trim()}%`);
      }
      return query;
    };

    const fetchProducts = async () => {
      setLoading(true);

      // 1. Conteo total
      let countQuery = supabase
        .from("products")
        .select("*", { count: "exact", head: true });
      countQuery = applyFilters(countQuery);

      const { count, error: countError } = await countQuery;
      if (!countError && typeof count === "number") {
        setTotalProducts(count);
      }

      // 2. Consulta principal
      let query = supabase.from("products").select("*");
      query = applyFilters(query);

      // Ordenamiento
      if (filters?.sortBy && sortMap[filters.sortBy]) {
        const { field, ascending } = sortMap[filters.sortBy];
        query = query.order(field, { ascending });
      }

      // Paginación
      const pageSize = filters?.pageSize || 12;
      const currentPage = filters?.currentPage || 1;
      const from = (currentPage - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);

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

  return { products, loading, error, totalProducts };
}
