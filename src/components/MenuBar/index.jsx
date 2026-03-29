import React, { useEffect, useState } from "react";
import { Home } from "@styled-icons/boxicons-regular/Home";
import { GridSmall } from "@styled-icons/boxicons-regular/GridSmall";
import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt";
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2";
import { Lightbulb as Light } from "@styled-icons/material-outlined/Lightbulb";

function pathMatches(pathname, target) {
  const p = pathname.replace(/\/$/, "") || "/";
  const t = target.replace(/\/$/, "") || "/";
  return p === t;
}

const iconClass =
  "h-8 w-8 text-[var(--texts)] transition-colors hover:text-[var(--highlight)]";

export default function MenuBar({ pathname = "/" }) {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === "dark";

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  const homeActive = pathMatches(pathname, "/");

  const itemBase =
    "relative block h-[3.75rem] w-8 cursor-pointer p-[1.1rem] text-[var(--texts)] hover:text-[var(--highlight)] max-[1170px]:h-10 max-[1170px]:w-10 max-[1170px]:p-[0.9rem]";

  return (
    <aside
      className="fixed right-0 top-0 z-10 flex h-screen w-[3.75rem] flex-col items-center justify-between border-l border-[var(--borders)] bg-[var(--mediumBackground)] py-2 transition-colors duration-500 max-[1170px]:bottom-0 max-[1170px]:top-auto max-[1170px]:h-auto max-[1170px]:w-full max-[1170px]:flex-row max-[1170px]:border-l-0 max-[1170px]:border-t max-[1170px]:p-0"
      aria-label="Toolbar"
    >
      <div className="flex flex-col max-[1170px]:flex-row">
        <a
          href="/"
          title="Comeback to home"
          className={
            homeActive
              ? "block [&>span]:text-[var(--highlight)]"
              : "block"
          }
        >
          <span className={itemBase}>
            <Home className={iconClass} />
          </span>
        </a>
        <a href="/search/" title="Search" className="block">
          <span className={itemBase}>
            <Search className={iconClass} />
          </span>
        </a>
      </div>
      <div className="flex flex-col max-[1170px]:flex-row">
        <span
          title="Change theme"
          role="button"
          tabIndex={0}
          onClick={() =>
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              window.__setPreferredTheme(isDarkMode ? "light" : "dark");
          }}
          className={`${itemBase} ${theme === "light" ? "text-[#d4d400] hover:text-[#e2e240]" : ""}`}
        >
          <Light className="h-8 w-8" />
        </span>
        <span title="Change visualization" className={itemBase}>
          <GridSmall className={iconClass} />
        </span>
        <span
          title="Go to the top"
          role="button"
          tabIndex={0}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={itemBase}
        >
          <UpArrowAlt className={iconClass} />
        </span>
      </div>
    </aside>
  );
}
