"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ currentPage, totalPages, perPage = 2 }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (paramsToUpdate) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(paramsToUpdate).forEach(([key, value]) => {
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    return params.toString() ? `?${params.toString()}` : "";
  };

  const onPageChange = (page) => {
    const updatedQueryString = createQueryString({
      page: page,
      per_page: perPage,
    });

    router.push(`${pathName}${updatedQueryString}`);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pageNumbers.push(1);

    if (currentPage > 3) {
      pageNumbers.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push("...");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button
        className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600"
        } border border-gray-200 shadow-sm`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="flex gap-1">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 ${
              page === currentPage
                ? "bg-blue-600 text-white shadow-md"
                : page === "..."
                  ? "cursor-default bg-white text-gray-400"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            } border border-gray-200 shadow-sm`}
            onClick={() => page !== "..." && onPageChange(page)}
            disabled={page === "..."}
            aria-label={page === "..." ? "More pages" : `Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600"
        } border border-gray-200 shadow-sm`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
