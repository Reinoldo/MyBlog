import * as React from "react";
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar";

export default function Layout({ children, pathname = "/", avatarSrc }) {
  return (
    <section className="flex max-[1170px]:flex-col">
      <Sidebar pathname={pathname} avatarSrc={avatarSrc} />
      <MenuBar pathname={pathname} />
      <main className="min-h-screen w-full bg-[var(--background)] pl-[22rem] pr-[3.75rem] max-[1170px]:mt-12 max-[1170px]:p-0">
        {children}
      </main>
    </section>
  );
}
