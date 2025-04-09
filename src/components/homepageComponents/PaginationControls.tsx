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
  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <div className="page-numbers">
        {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
          const pageNumber = Math.max(
            1,
            Math.min(totalPages, currentPage - 5 + index)
          );
          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              disabled={pageNumber === currentPage}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
