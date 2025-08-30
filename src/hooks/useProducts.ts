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

  // Función para aplicar filtros a una consulta
  const applyFilters = (query: any, filters?: ProductFilters) => {
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

  useEffect(() => {
    const sortMap: Record<
      string,
      { field: keyof Product; ascending: boolean }
    > = {
      "most-recent": { field: "created_at", ascending: false },
      "most-popular": { field: "views", ascending: false },
      "price-asc": { field: "price", ascending: true },
      "price-desc": { field: "price", ascending: false },
      "alphabetical-asc": { field: "name", ascending: true },
      "alphabetical-desc": { field: "name", ascending: false },
    };

    const fetchProducts = async () => {
      setLoading(true);

      // Base query
      let query = supabase.from("products").select("*");

      // Filtros
      query = applyFilters(query, filters);

      // Conteo total
      const countQuery = supabase
        .from("products")
        .select("*", { count: "exact", head: true });
      const filteredCountQuery = applyFilters(countQuery, filters);
      const { count, error: countError } = await filteredCountQuery;
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
      query = applyFilters(query.range(from, to));

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
