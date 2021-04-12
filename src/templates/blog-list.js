import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import Pagination from "../components/Pagination"
export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            description
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            category
            background
          }
          timeToRead
        }
      }
    }
  }
`

const BlogList = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            fields: { slug },
            frontmatter: { description, title, date, category, background },
            timeToRead,
          },
        }) => {
          return (
            <PostItem
              key={date}
              slug={slug}
              category={category}
              date={date}
              title={title}
              description={description}
              timeToRead={timeToRead + " min"}
            />
          )
        }
      )}
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        numPages={numPages}
      />
    </Layout>
  )
}

export default BlogList
