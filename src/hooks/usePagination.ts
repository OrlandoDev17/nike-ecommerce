import { useState, useEffect } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage: defaultItemsPerPage = 15, // Default for large screens
  initialPage = 1,
}: PaginationProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 2000) {
        setItemsPerPage(defaultItemsPerPage); // XL screens
      } else if (width >= 1536) {
        setItemsPerPage(12); // LG screens
      } else {
        setItemsPerPage(9); // MD and below
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, [defaultItemsPerPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Ensure currentPage does not exceed totalPages when itemsPerPage changes
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages > 0 ? totalPages : 1);
    }
  }, [currentPage, totalPages]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsPerPage,
  };
};
