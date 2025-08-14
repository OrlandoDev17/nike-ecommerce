"use client";

//Componentes
import FiltersContainer from "@/components/ui/FiltersContainer";
import ProductCard from "@/components/ui/ProductCard";
import Pagination from "@/components/ui/Pagination";
import { AnimatePresence, motion } from "motion/react";
//Hooks
import { useEffect, useMemo, useRef } from "react";
import { usePagination } from "@/hooks/usePagination";
import { useFilterStore } from "@/store/useFiltersStore";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
//Mocks
import { PRODUCTS } from "@/lib/mocks";

export default function Products() {
  const { filters, filterProducts, searchQuery } = useFilterStore();

  const debouncedQuery = useDebouncedValue(searchQuery, 300);

  const filteredProducts = useMemo(() => {
    return filterProducts(PRODUCTS);
  }, [filterProducts, debouncedQuery, filters]);

  const { currentPage, totalPages, startIndex, endIndex, setCurrentPage } =
    usePagination({
      totalItems: filteredProducts.length,
    });

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const productsGridRef = useRef<HTMLDivElement>(null);

  const handlePageChange = () => {
    if (productsGridRef.current) {
      productsGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery, filters, setCurrentPage]);

  return (
    <section
      className="flex flex-col gap-2 max-w-11/12 2xl:max-w-10/12 mx-auto w-full"
      id="products"
    >
      <FiltersContainer />
      <span>
        Mostrando {paginatedProducts.length} de {PRODUCTS.length} productos
      </span>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          ref={productsGridRef}
          className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8"
        >
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
