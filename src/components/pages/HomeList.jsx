import React from "react";
import Layout from "../Layout";
import PostItem from "../PostItem";
import Pagination from "../Pagination";

export default function HomeList({
  posts,
  currentPage,
  numPages,
  pathname,
  avatarSrc,
}) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}/`;
  const nextPage = `/page/${currentPage + 1}/`;

  return (
    <Layout pathname={pathname} avatarSrc={avatarSrc}>
      {posts.map((p) => (
        <PostItem key={p.slug} {...p} />
      ))}
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        numPages={numPages}
      />
    </Layout>
  );
}
