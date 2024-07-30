/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  totalDocument,
  currentPage,
  totalPages,
  resultsPerPage,
  setPageNum,
}) {
  const renderPageNumbers = () => {
    const displayPageCount = 5;
    const sidePages = 2;
    const pageNumbers = [];

    if (totalPages <= 10) {
      for (let index = 1; index <= totalPages; index++) {
        pageNumbers.push(
          <button
          key={index}
            onClick={() => {
              setPageNum(index);
            }}
            aria-current="page"
            className={
              currentPage === index
                ? "relative z-10 inline-flex items-center bg-amber-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            }
          >
            {index}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          onClick={() => {
            setPageNum(1);
          }}
          aria-current="page"
          className={
            currentPage === 1
              ? "relative z-10 inline-flex items-center bg-amber-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          }
        >
          1
        </button>
      );

      if (currentPage > displayPageCount) {
        pageNumbers.push(
          <span
            key="left-ellipsis"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
          >
            ...
          </span>
        );
      }

    let startPage = Math.max(2, currentPage - sidePages);
    let endPage = Math.min(totalPages - 1, currentPage + sidePages);

    if (currentPage <= displayPageCount) {
      endPage = displayPageCount;
    }

    if (currentPage > totalPages - displayPageCount) {
      startPage = totalPages - displayPageCount;
    }

    for (let index = startPage; index <= endPage; index++) {
      pageNumbers.push(
        <button
        key={index}
          onClick={() => {
            setPageNum(index);
          }}
          aria-current="page"
          className={
            currentPage === index
              ? "relative z-10 inline-flex items-center bg-amber-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          }
        >
          {index}
        </button>
      );
    }

    if (currentPage < totalPages - sidePages) {
      pageNumbers.push(
        <span
          key="right-ellipsis"
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
        >
          ...
        </span>
      );
    }

    pageNumbers.push(
      <button
        onClick={() => {
          setPageNum(totalPages);
        }}
        aria-current="page"
        className={
          currentPage === totalPages
            ? "relative z-10 inline-flex items-center bg-amber-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        }
      >
        {totalPages}
      </button>
    );
  }
    return pageNumbers;
  };

  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-4 mb-4 sm:px-6 mt-10">
        <div className="flex flex-1 justify-between sm:hidden bg-white">
          <button
            onClick={() => setPageNum(currentPage - 1)}
            disabled={currentPage === 1 ? true : false}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPageNum(currentPage + 1)}
            disabled={currentPage === totalPages ? true : false}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * resultsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(currentPage * resultsPerPage, totalDocument)}
              </span>{" "}
              of <span className="font-medium">{totalDocument}</span> results
            </p>
          </div>
          <div>
            <nav
              className="bg-white isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={() => setPageNum(currentPage - 1)}
                disabled={currentPage === 1 ? true : false}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              {renderPageNumbers()}
              <button
                onClick={() => setPageNum(currentPage + 1)}
                disabled={currentPage === totalPages ? true : false}
                className=" relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
