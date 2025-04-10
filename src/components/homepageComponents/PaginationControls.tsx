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

    // Show the first page, current page, and last page with some logic to ensure spacing
    if (totalPages <= maxVisiblePages) {
      // If total pages are less than or equal to max visible pages, show them all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first page
      pages.push(1);

      // Add ellipsis if we're far from the first page
      if (currentPage > 3) {
        pages.push("...");
      }

      // Show the 2 pages before and after the current page, limited by the range
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(i);
        }
      }

      // Add ellipsis if we're far from the last page
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show the last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-red-600 disabled:opacity-50 transition-colors"
      >
        Prev
      </button>

      <div className="flex items-center space-x-2">
        {getPages().map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="text-gray-400 text-lg">
                &#8230;
              </span>
            );
          }
          return (
            <button
              key={page} // Now each page number and ellipsis has a unique key
              onClick={() => onPageChange(Number(page))}
              disabled={page === currentPage}
              className={`px-4 py-2 text-lg font-roboto rounded-lg transition-all ${
                page === currentPage
                  ? "bg-accent-blue text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-accent-purple hover:text-white"
              } disabled:opacity-50`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <span className="text-gray-300 font-roboto">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
