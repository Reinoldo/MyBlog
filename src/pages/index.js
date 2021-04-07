import * as React from "react"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="misc"
      date="26 outubro 1991"
      title="Meu primeiro post"
      description="teste de descricao"
      timeRead="4 min"
    />
  </Layout>
)

export default IndexPage
