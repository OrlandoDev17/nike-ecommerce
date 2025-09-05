import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { CartItem } from "@/context/CartContext";

export function useFeaturedProducts(limit: number = 6) {
  const [featuredProducts, setFeaturedProducts] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_featured", true)
        .limit(limit);

      if (error) {
        setError(error.message);
        setFeaturedProducts([]);
      } else {
        setFeaturedProducts(data as CartItem[]);
        setError(null);
      }

      setLoading(false);
    };

    fetchFeatured();
  }, [limit]);

  return { featuredProducts, loading, error };
}
