import React from "react";
import links from "./content";

function pathMatches(pathname, target) {
  const p = pathname.replace(/\/$/, "") || "/";
  const t = target.replace(/\/$/, "") || "/";
  return p === t;
}

export default function MenuLinks({ pathname = "/" }) {
  return (
    <nav className="max-[1170px]:hidden">
      <ul className="text-[1.2rem] font-light">
        {links.map((link, i) => (
          <li key={i} className="py-2">
            <a
              href={link.url}
              className={`text-[var(--texts)] no-underline transition-colors duration-500 hover:text-[#0f96a5] ${pathMatches(pathname, link.url) ? "text-[#0f96a5]" : ""}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
