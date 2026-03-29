import React from "react";
import Layout from "../Layout";

export default function NotFoundView({ pathname, avatarSrc }) {
  return (
    <Layout pathname={pathname} avatarSrc={avatarSrc}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}
