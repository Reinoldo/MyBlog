import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPost from "../components/RecommendedPost"
import * as S from "../components/Post/styled"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        background
        category
      }
      html
      timeToRead
    }
  }
`

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date}, {post.timeToRead} min
        </S.PostDate>

        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPost next={next} previous={previous} />
    </Layout>
  )
}

export default Post
