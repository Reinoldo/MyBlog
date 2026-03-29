import React from "react";

export default function PostItem({
  slug,
  category,
  background,
  date,
  timeToRead,
  title,
  description,
}) {
  const tagBg = background || "var(--highlight)";
  return (
    <a
      href={slug}
      className="flex text-[var(--texts)] no-underline hover:text-[#0f96a5]"
    >
      <section className="flex w-full items-center border-b border-[var(--borders)] px-12 py-8 max-[1170px]:flex-col max-[1170px]:items-start">
        <div
          className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full text-[1.3rem] font-bold uppercase text-[var(--postColor)] max-[1170px]:mb-4 max-[1170px]:ml-6 max-[1170px]:min-h-[30px] max-[1170px]:min-w-0 max-[1170px]:rounded-none max-[1170px]:text-base"
          style={{ background: tagBg }}
        >
          {category}
        </div>
        <div className="ml-6 flex flex-col">
          <time className="text-[0.9rem]">
            {date}, {timeToRead}
          </time>
          <h1 className="my-2 mb-2 text-[1.6rem] font-bold">{title}</h1>
          <p className="text-[1.2rem] font-light leading-snug">{description}</p>
        </div>
      </section>
    </a>
  );
}
