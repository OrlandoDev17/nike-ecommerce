"use client";

import ProductCard from "@/components/ui/ProductCard";
import Loader from "@/components/ui/Loader";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export default function ProductList({ products, loading, error }: ProductListProps) {

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
