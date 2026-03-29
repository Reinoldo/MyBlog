import React from "react";
import Profile from "../Profile";
import SocialLinks from "../SocialLinks";
import MenuLinks from "../MenuLinks";

export default function Sidebar({ pathname = "/", avatarSrc }) {
  return (
    <aside className="fixed flex h-screen w-[18rem] flex-col items-center border-r border-[var(--borders)] bg-[var(--mediumBackground)] p-8 text-center max-[1170px]:relative max-[1170px]:h-auto max-[1170px]:w-full max-[1170px]:items-start max-[1170px]:px-8 max-[1170px]:py-4">
      <Profile avatarSrc={avatarSrc} />
      <SocialLinks />
      <MenuLinks pathname={pathname} />
    </aside>
  );
}
