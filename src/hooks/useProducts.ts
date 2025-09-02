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
    const sortMap: Record<
      string,
      { field: keyof Product; ascending: boolean }
    > = {
      "most-recent": { field: "created_at", ascending: true },
      "most-popular": { field: "views", ascending: true },
      "price-asc": { field: "price", ascending: false },
      "price-desc": { field: "price", ascending: true },
      "alphabetical-asc": { field: "name", ascending: true },
      "alphabetical-desc": { field: "name", ascending: false },
    };

    const fetchProducts = async () => {
      setLoading(true);

      // Base query
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
      if (filters?.search && filters.search.trim() !== "") {
        query = query.ilike("name", `%${filters.search.trim()}%`);
      }

      // Conteo total
      let countQuery = supabase
        .from("products")
        .select("*", { count: "exact", head: true });

      // Aplicar los mismos filtros que la consulta principal
      if (filters?.type && filters.type !== "all-types") {
        countQuery = countQuery.eq("type", filters.type);
      }
      if (filters?.category && filters.category !== "all-categories") {
        countQuery = countQuery.eq("category_slug", filters.category);
      }
      if (filters?.collection && filters.collection !== "all-collections") {
        countQuery = countQuery.eq("collection_slug", filters.collection);
      }
      if (filters?.search && filters.search.trim() !== "") {
        countQuery = countQuery.ilike("name", `%${filters.search.trim()}%`);
      }

      const { count, error: countError } = await countQuery;
      if (!countError && typeof count === "number") {
        setTotalProducts(count);
      }

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

      // Fetch final
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
