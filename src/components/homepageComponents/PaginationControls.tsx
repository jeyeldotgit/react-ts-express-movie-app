interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) => {
  const getPages = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-x-2 sm:space-x-4 space-y-2 sm:space-y-0 py-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
      >
        Prev
      </button>

      <div className="flex items-center space-x-2 sm:space-x-3">
        {getPages().map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="text-gray-400">
                &#8230;
              </span>
            );
          }
          return (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              disabled={page === currentPage}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base transition-all ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-blue-500"
              } disabled:opacity-50`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <span className="text-gray-300 text-sm sm:text-base">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
