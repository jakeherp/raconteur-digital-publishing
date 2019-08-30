import React from "react"
// import { BLOCKS } from "@contentful/rich-text-types"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Homescreen from "../components/sections/homescreen"
import TableOfContents from "../components/sections/table-of-contents"
import Article from "../components/sections/article"

interface IProps {
  data: {
    contentfulReport: {
      title: string
      slug: string
      color: string
      sponsoredBy: {
        logo: object
        name: string
        slug: string
      }
      articles: {
        title: string
        slug: string
        standfirst: object
        featuredImage: {
          fluid: any
        }
        author: {
          name: string
        }
        content: {
          json: any
        }
        boxOut: {
          title: string
          copy: {
            json: any
          }
        }
      }[]
      contributors: {
        name: string
        bio: object
      }[]
      publisher: string
      projectManager: string
      editorialConsultant: string
      editor: string
      designers: string[]
      headOfProduction: string
      digitalMarketingManager: string
    }
  }
}

const Report = ({ data }: IProps) => {
  const report = data.contentfulReport
  const articles = report.articles

  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <Homescreen slug={report.slug} />
      <TableOfContents />
      {articles.map(article => (
        <Article
          key={article.slug}
          title={article.title}
          slug={article.slug}
          standfirst={article.standfirst}
          featuredImage={article.featuredImage}
          author={article.author.name}
          content={article.content}
          allArticles={articles}
          boxOut={{ title: article.boxOut.title, content: article.boxOut.copy }}
        />
      ))}
    </Layout>
  )
}

export default Report

export const reportQuery = graphql`
  query reportBySlug($slug: String!) {
    contentfulReport(slug: { eq: $slug }) {
      title
      slug
      color
      sponsoredBy {
        logo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        name
        link
      }
      articles {
        title
        slug
        standFirst {
          standFirst
        }
        featuredImage {
          fluid(maxHeight: 600, maxWidth: 1920, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        author {
          name
        }
        content {
          json
        }

        boxOut {
          title
          copy {
            json
          }
        }
      }
      contributors {
        name
        bio {
          bio
        }
      }
      publisher
      projectManager
      editorialConsultant
      editor
      designers
      headOfProduction
      digitalMarketingManager
    }
  }
`
