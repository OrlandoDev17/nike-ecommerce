"use client";

import { useProducts } from "@/hooks/useProducts";
import { useProductFilters } from "@/context/ProductFilterContext";
import ProductCard from "@/components/ui/ProductCard";
import Loader from "@/components/ui/Loader";

export default function ProductList() {
  const context = useProductFilters();

  if (!context) {
    throw new Error(
      "useProductFilters must be used within a ProductFilterProvider"
    );
  }

  const { filters } = context;
  const { products, loading, error } = useProducts(filters);

  return (
    <>
      {error && <p>Error: {error}</p>}
      <span className="text-xl text-gray-500 font-bold font-titillium-web">
        Mostrando {products.length} Productos
      </span>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-full">
        {loading && <Loader />}
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
