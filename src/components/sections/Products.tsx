"use client";

import FiltersContainer from "@/components/ui/FiltersContainer";
import { PRODUCTS } from "@/lib/mocks";
import ProductCard from "@/components/ui/ProductCard";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/ui/Pagination";
import { AnimatePresence, motion } from "motion/react";

export default function Products({}) {
  const { currentPage, totalPages, startIndex, endIndex, setCurrentPage } =
    usePagination({ totalItems: PRODUCTS.length, itemsPerPage: 9 });

  const paginatedProducts = PRODUCTS.slice(startIndex, endIndex);

  return (
    <section className="flex flex-col gap-2 max-w-11/12 mx-auto w-full">
      <FiltersContainer />
      <span>
        Mostrando {paginatedProducts.length} de {PRODUCTS.length} productos
      </span>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
