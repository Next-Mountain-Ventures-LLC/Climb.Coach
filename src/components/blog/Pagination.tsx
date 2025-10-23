import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  baseUrl,
}) => {
  // Don't show pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  // Generate an array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of middle section
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're at the beginning
      if (currentPage <= 3) {
        endPage = 4;
      }
      
      // Adjust if we're at the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis if needed at the beginning
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed at the end
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  // Get the URL for a specific page
  const getPageUrl = (page: number) => {
    if (page === 1) {
      return baseUrl;
    }
    return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}page=${page}`;
  };

  return (
    <nav className="flex justify-center my-10" aria-label="Pagination">
      <ul className="flex items-center gap-1 sm:gap-2">
        {/* Previous button */}
        <li>
          <a
            href={currentPage > 1 ? getPageUrl(currentPage - 1) : '#'}
            className={`flex items-center justify-center px-3 py-2 rounded-md text-sm ${
              currentPage > 1
                ? 'text-dark-slate hover:bg-gray-100'
                : 'text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Previous page"
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline ml-1">Previous</span>
          </a>
        </li>

        {/* Page numbers */}
        {pageNumbers.map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === '...' ? (
              <span className="px-3 py-2 text-gray-500">...</span>
            ) : (
              <a
                href={getPageUrl(pageNumber as number)}
                className={`flex items-center justify-center min-w-[2.5rem] h-10 px-3 py-2 rounded-md text-sm ${
                  pageNumber === currentPage
                    ? 'bg-blue-mell text-white font-medium'
                    : 'text-dark-slate hover:bg-gray-100'
                }`}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
              >
                {pageNumber}
              </a>
            )}
          </li>
        ))}

        {/* Next button */}
        <li>
          <a
            href={currentPage < totalPages ? getPageUrl(currentPage + 1) : '#'}
            className={`flex items-center justify-center px-3 py-2 rounded-md text-sm ${
              currentPage < totalPages
                ? 'text-dark-slate hover:bg-gray-100'
                : 'text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Next page"
            aria-disabled={currentPage >= totalPages}
            tabIndex={currentPage >= totalPages ? -1 : 0}
          >
            <span className="hidden sm:inline mr-1">Next</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;