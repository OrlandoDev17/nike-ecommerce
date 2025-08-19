"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductList() {
  const { products, loading, error } = useProducts();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
