import { useMemo } from "react";
import { useRouter } from "next/router";

const DOTS = "...";

type Props = {
  currentPage: number;
  totalCount: number;
  perPage: number;
  onClick: (currenPage: number) => void;
};
const Pagination: React.FC<Props> = ({ currentPage, totalCount, perPage, onClick }) => {
  const totalPageCount = Math.ceil(totalCount / perPage);

  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = useMemo(() => {
    let siblingCount = 1;

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, perPage, currentPage]);

  const onNext = () => {
    if (currentPage === totalPageCount) return;
    onClick(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onClick(currentPage - 1);
  };

  if (currentPage === 0 || totalPageCount < 2 || !paginationRange) {
    return null;
  }
  return (
    <ul className="flex justify-center items-center gap-2">
      {/* Left navigation arrow */}
      <li
        className={`p-3  border rounded-md hover:bg-black-600 group transition-all cursor-pointer ${
          currentPage === 1 && "border-gray-400 [&>svg]:fill-gray-400"
        }`}
        onClick={onPrevious}
      >
        <svg viewBox="0 0 320 512" width={20} height={20} className="group-hover:fill-white-500">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </li>
      {paginationRange?.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className=" dots">
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={`text-lg px-4 py-2 border rounded-md hover:bg-black-600 hover:text-white-500 transition-all cursor-pointer ${
              pageNumber === currentPage && "text-white-500 bg-black-600"
            }`}
            onClick={() => onClick(+pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={`p-3  border rounded-md hover:bg-black-600 group transition-all cursor-pointer ${
          currentPage === totalPageCount && "border-gray-400 [&>svg]:fill-gray-400"
        }`}
        onClick={onNext}
      >
        <svg viewBox="0 0 320 512" width={20} height={20} className="group-hover:fill-white-500">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
