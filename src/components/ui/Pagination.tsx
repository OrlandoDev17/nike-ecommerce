interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  onPageChange?: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  onPageChange,
}: Props) {
  return (
    <div className="flex gap-2 justify-center my-4">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => {
              setCurrentPage(page);
              if (onPageChange) {
                onPageChange();
              }
            }}
            className={`px-4 py-2 rounded-xl transition ${
              currentPage === page
                ? "bg-primary text-white"
                : "bg-gray-200 hover:bg-primary hover:scale-110 hover:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
