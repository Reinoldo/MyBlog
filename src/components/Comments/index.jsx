import React from "react";
import { DiscussionEmbed } from "disqus-react";

const SITE = "https://sommerblog.netlify.app";

export default function Comments({ path, title }) {
  const url = `${SITE}${path.startsWith("/") ? path : `/${path}`}`;
  return (
    <section className="comments-section">
      <h2 className="mx-auto mt-[2.4rem] mb-4 pb-8 text-center text-[2.1rem] font-bold leading-snug tracking-wide text-[var(--white)]">
        Comments
      </h2>
      <DiscussionEmbed
        shortname="sommerblog"
        config={{
          url,
          identifier: url,
          title,
        }}
      />
    </section>
  );
}
