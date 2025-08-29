"use client";

import FiltersWrapper from "@/components/ui/filters/FiltersWrapper";
import ProductList from "./ProductList";
import { useProductFilters } from "@/context/ProductFilterContext";
import { useProducts } from "@/hooks/useProducts";
import Pagination from "@/components/ui/Pagination";
import { useRef, useEffect } from "react";

export default function ProductsWrapper() {
  const productSetionRef = useRef<HTMLDivElement>(null);
  const { totalProducts } = useProducts();
  const context = useProductFilters();

  if (!context) {
    throw new Error(
      "useProductFilters must be used within a ProductFilterProvider"
    );
  }

  const { filters, setFilters } = context;

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
      <ProductList />
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          setFilters={setFilters}
          filters={filters}
        />
      )}
    </section>
  );
}
