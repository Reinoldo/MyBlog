import React from "react";

export default function Avatar({ src, alt }) {
  return (
    <div className="mx-auto h-[3.75rem] w-[3.75rem] overflow-hidden rounded-full max-[1170px]:h-[1.875rem] max-[1170px]:w-[1.875rem]">
      <img
        src={src}
        alt={alt}
        width={60}
        height={60}
        loading="lazy"
        className="block h-full w-full object-cover"
      />
    </div>
  );
}
