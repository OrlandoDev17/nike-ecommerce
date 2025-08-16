import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  collection_slug?: string;
  category_slug?: string;
  // Add other product properties as needed
}

export function useProducts(filters?: {
  collection?: string;
  category?: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      let query = supabase.from("products").select("*");

      if (filters?.collection) {
        query = query.eq("collection_slug", filters.collection);
      }

      if (filters?.category) {
        query = query.eq("category_slug", filters.category);
      }

      const { data, error } = await query.returns<Product[]>();

      if (error) {
        setError(error.message);
        setProducts([]);
      } else {
        setProducts(data);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters?.collection, filters?.category]);

  return { products, loading, error };
}
