import React from "react"
// import { BLOCKS } from "@contentful/rich-text-types"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Footer from "../components/layout/footer"
import SEO from "../components/seo"

import Homescreen from "../components/sections/homescreen"
import TableOfContents from "../components/sections/table-of-contents"
import Article from "../components/sections/article"

// import Hype from "../components/ui/hype"

interface IProps {
  data: {
    contentfulReport: {
      title: string
      slug: string
      color: string
      featuredImage: {
        fluid: any
      }
      sponsoredBy: {
        logo: {
          file: {
            url: string
          }
        }
        name: string
        slug: string
      }
      articles: {
        title: string
        slug: string
        standFirst: {
          standFirst: string
        }
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
        } | null
      }[]
      footerText: {
        footerText: string
      }
      contributors: {
        name: string
        bio: {
          bio: string
        }
      }[]
    }
  }
}

const Report = ({ data }: IProps) => {
  const report = data.contentfulReport
  const articles = report.articles

  return (
    <Layout>
      <SEO title={report.title} />
      <Homescreen slug={report.slug} image={report.featuredImage} />
      <TableOfContents
        articles={articles}
        reportSlug={report.slug}
        color={report.color}
      />
      {articles.map(article => (
        <Article
          key={article.slug}
          title={article.title}
          slug={article.slug}
          reportSlug={report.slug}
          standfirst={article.standFirst.standFirst}
          featuredImage={article.featuredImage}
          author={article.author.name}
          content={article.content}
          allArticles={articles}
          boxOut={
            article.boxOut
              ? { title: article.boxOut.title, content: article.boxOut.copy }
              : null
          }
        />
      ))}
      <Footer
        sponsoredBy={report.sponsoredBy}
        footerText={report.footerText.footerText}
        contributors={report.contributors}
      />
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
      featuredImage {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      sponsoredBy {
        logo {
          file {
            url
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
      footerText {
        footerText
      }
      contributors {
        name
        bio {
          bio
        }
      }
      publisher
      projectManager
      editor
      designers
      headOfProduction
      digitalMarketingManager
    }
  }
`
