import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ProductFilters, useProductFilters } from "./useProductFilters";

export function useProducts(filters?: ProductFilters) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let query = supabase.from("products").select("*");

      if (filters?.category) {
        query = query.eq("category_slug", filters.category);
      }
      if (filters?.collection) {
        query = query.eq("collection_slug", filters.collection);
      }
      if (filters?.types) {
        query = query.eq("types_slug", filters.types);
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
        setProducts([]);
      } else {
        setProducts(data as any);
        setError(null);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [filters]);

  return { products, loading, error };
}
