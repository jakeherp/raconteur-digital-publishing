import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Page Not found"
      description="You just hit a route that doesn't exist..."
    />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Container>
  </Layout>
)

export default NotFoundPage
