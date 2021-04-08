import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
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
  )
  const items = allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      {items.map(
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
    </Layout>
  )
}

export default IndexPage
