import React from "react";
import Links from "./content";
import Icons from "./Icons";

export default function SocialLinks() {
  return (
    <nav className="mx-auto my-8 w-full max-[1170px]:hidden">
      <ul className="flex list-none items-center justify-around">
        {Links.map((link, i) => {
          const Icon = Icons[link.label];

          return (
            <li key={i}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--texts)] no-underline transition-colors duration-500 hover:text-[#0f96a5]"
              >
                <span className="inline-block h-[30px] w-[30px] fill-[#bbb]">
                  <Icon className="h-[30px] w-[30px]" />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
