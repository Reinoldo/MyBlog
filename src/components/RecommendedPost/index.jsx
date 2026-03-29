import React from "react";

const linkBase =
  "flex flex-1 min-w-0 items-center p-12 text-[#0f96a5] no-underline transition-colors duration-500 hover:bg-[var(--borders)] max-[1170px]:p-8 max-[1170px]:text-[0.9rem] max-[1170px]:leading-snug";

export default function RecommendedPost({ older, newer }) {
  return (
    <section className="flex border-b border-t border-[var(--borders)] bg-[var(--mediumBackground)]">
      {older && (
        <a
          href={older.path}
          className={`${linkBase} ${newer ? "border-r border-[var(--borders)]" : ""} before:mr-2 before:inline-block before:content-['←']`}
        >
          {older.title}
        </a>
      )}
      {newer && (
        <a
          href={newer.path}
          className={`${linkBase} justify-end after:ml-2 after:inline-block after:content-['→']`}
        >
          {newer.title}
        </a>
      )}
    </section>
  );
}
