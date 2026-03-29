import React from "react";
import Avatar from "../Avatar";
import { siteConfig } from "../../site.config";

export default function Profile({ avatarSrc }) {
  const { description, position, author } = siteConfig;
  return (
    <section className="flex flex-col text-[var(--texts)]">
      <a
        href="/"
        className="text-[var(--texts)] no-underline transition-colors duration-500 hover:text-[#0f96a5] max-[1170px]:flex max-[1170px]:text-left"
      >
        <Avatar src={avatarSrc} alt={`${author}'s avatar`} />
        <h1 className="mx-auto mb-6 mt-2 text-[1.6rem] max-[1170px]:mb-0 max-[1170px]:ml-2.5 max-[1170px]:mt-0 max-[1170px]:text-[1.2rem]">
          {author}
          <small className="mt-2 block text-[1.2rem] font-light max-[1170px]:mt-0.5 max-[1170px]:text-[0.8rem]">
            {position}
          </small>
        </h1>
      </a>
      <p className="text-base font-light leading-snug max-[1170px]:hidden">
        {description}
      </p>
    </section>
  );
}
