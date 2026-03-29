import React from "react";

const linkClass =
  "text-[var(--texts)] no-underline transition-colors duration-500 hover:text-[var(--highlight)]";

export default function Pagination({
  numPages,
  isFirst,
  isLast,
  currentPage,
  prevPage,
  nextPage,
}) {
  return (
    <section className="flex items-center justify-between border-t border-[var(--borders)] px-12 py-6 text-[var(--texts)]">
      <div className="min-w-[7rem] flex-1">
        {!isFirst && (
          <a href={prevPage} className={linkClass}>
            previus page
          </a>
        )}
      </div>
      <div className="flex-none text-center">
        {currentPage} of {numPages}
      </div>
      <div className="min-w-[7rem] flex-1 text-right">
        {!isLast && (
          <a href={nextPage} className={linkClass}>
            next page
          </a>
        )}
      </div>
    </section>
  );
}
