const postsQuery = `{
    posts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        
      ) {
        edges {
          node {
            objectID: id
            fields {
              slug
            }
            frontmatter {
              description
              background
              title
              date_timestamp: date
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              category
              
            }
            excerpt(pruneLength: 5000)
            timeToRead
          }
        }
      }
  }`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    settings: {
      attributesToSnippet: ["excerpt:20"],
    },
  },
]

module.exports = queries
