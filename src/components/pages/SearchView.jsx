import React from "react";
import Layout from "../Layout";
import Search from "../Search";

export default function SearchView({ pathname, avatarSrc }) {
  return (
    <Layout pathname={pathname} avatarSrc={avatarSrc}>
      <Search />
    </Layout>
  );
}
