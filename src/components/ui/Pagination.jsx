"use client";

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const Pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-4 flex justify-center gap-4">
      <button
        className={`cursor-pointer rounded border-2 px-4 py-2 text-sm ${
          currentPage === 1
            ? "border-gray-300 bg-gray-300 text-white"
            : "border-gray-400 hover:bg-gray-200"
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {Pages.map((Page) => (
        <button
          key={Page}
          className={`cursor-pointer rounded border-2 px-4 py-2 text-sm ${
            Page === currentPage
              ? "border-blue-500 bg-blue-100"
              : "border-gray-400 hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(Page)}
        >
          {Page}
        </button>
      ))}
      <button
        className={`cursor-pointer rounded border-2 px-4 py-2 text-sm ${
          currentPage === totalPages
            ? "border-gray-300 bg-gray-300 text-white"
            : "border-gray-400 hover:bg-gray-200"
        }`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
