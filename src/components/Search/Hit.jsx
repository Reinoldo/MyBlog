import React from "react";
import PostItem from "../PostItem";

export default function Hit({ hit }) {
  const slug = hit.fields?.slug ?? hit.slug;
  return (
    <PostItem
      description={hit.description}
      title={hit.title}
      slug={slug}
      date={hit.date}
      category={hit.category}
      timeToRead={hit.timeToRead + " min"}
      background={hit.background}
    />
  );
}
