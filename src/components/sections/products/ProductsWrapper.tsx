"use client";

import FiltersWrapper from "@/components/ui/filters/FiltersWrapper";
import ProductList from "./ProductList";
import { useProductFilters } from "@/context/ProductFilterContext";
import { useProducts } from "@/hooks/useProducts";
import Pagination from "@/components/ui/Pagination";
import { useRef, useEffect } from "react";

export default function ProductsWrapper() {
  const productSetionRef = useRef<HTMLDivElement>(null);
  const context = useProductFilters();

  if (!context) {
    throw new Error(
      "useProductFilters must be used within a ProductFilterProvider"
    );
  }

  const { filters, setFilters } = context;
  const { products, loading, error, totalProducts } = useProducts(filters);

  useEffect(() => {
    if (productSetionRef.current) {
      productSetionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [filters.currentPage]);

  const totalPages = Math.ceil(totalProducts / (filters?.pageSize || 12));

  return (
    <section
      ref={productSetionRef}
      className="flex flex-col gap-4 w-full max-w-10/12 mx-auto mb-12"
    >
      <FiltersWrapper />
      <ProductList products={products} loading={loading} error={error} />
      {totalPages > 1 && loading === false && (
        <Pagination
          totalPages={totalPages}
          setFilters={setFilters}
          filters={filters}
        />
      )}
    </section>
  );
}
