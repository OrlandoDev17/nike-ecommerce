import { useState } from "react";

export const usePagination = ({
  totalItems,
  itemsPerPage,
}: {
  totalItems: number;
  itemsPerPage: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    setCurrentPage,
  };
};
