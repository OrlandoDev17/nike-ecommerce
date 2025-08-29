export default function Pagination({
  totalPages,
  setFilters,
  filters,
}: {
  totalPages: number;
  setFilters: (filters: any) => void;
  filters: any;
}) {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() =>
            setFilters((prev: any) => ({ ...prev, currentPage: i + 1 }))
          }
          className={`px-4 py-2 rounded-lg border ${
            filters.currentPage === i + 1
              ? "bg-primary text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
