import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Homescreen from "../components/sections/homescreen"
import TableOfContents from "../components/sections/table-of-contents"
import Article from "../components/sections/article"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homescreen />
    <TableOfContents />
    <Article />
  </Layout>
)

export default IndexPage
