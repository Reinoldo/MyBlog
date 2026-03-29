import React from "react";
import Layout from "../Layout";
import RecommendedPost from "../RecommendedPost";
import Comments from "../Comments";

export default function BlogPostView({
  pathname,
  avatarSrc,
  slug,
  title,
  description,
  dateStr,
  minutes,
  html,
  older,
  newer,
}) {
  return (
    <Layout pathname={pathname} avatarSrc={avatarSrc}>
      <header className="post-header">
        <p className="post-date">
          {dateStr}, {minutes} min
        </p>
        <h1 className="post-title">{title}</h1>
        <h2 className="post-description">{description}</h2>
      </header>
      <section className="rich-content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
      <RecommendedPost older={older} newer={newer} />
      <Comments path={slug} title={title} />
    </Layout>
  );
}
