import React from "react";
import Layout from "../Layout";
import About from "../About";

export default function AboutView({ pathname, avatarSrc }) {
  return (
    <Layout pathname={pathname} avatarSrc={avatarSrc}>
      <About />
    </Layout>
  );
}
