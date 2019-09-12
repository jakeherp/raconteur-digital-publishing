import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import axios from "axios"

import Layout from "../components/layout/layout"
import Footer from "../components/layout/footer"
import SEO from "../components/seo"
import AnimateIn from "../components/ui/animate-in"
import Loader from "../components/ui/loader"

import Homescreen from "../components/sections/homescreen"
import TableOfContents from "../components/sections/table-of-contents"
import Article from "../components/sections/article"
import Infographic from "../components/sections/infographic"

import ReportContext from "../context/report.context"
import IReport from "../interface/report.interface"
import IArticle from "../interface/article.interface"
import IInfographic from "../interface/infographic.interface"

const Report = ({ data }: IReport) => {
                                        const currentReport =
                                          data.contentfulReport
                                        const articles:
                                          | IArticle[]
                                          | IInfographic[] =
                                          currentReport.articles

                                        const {
                                          loadReport,
                                          report,
                                        } = useContext(ReportContext)

                                        const getPdf = (
                                          baseUrl = `http://api.pdflayer.com/api/convert`
                                        ) => {
                                          return axios
                                            .post(baseUrl, {
                                              access_key: `558868f728211280ca9628c27cc2838b`,
                                              document_url: `https://insights.raconteur.net/${currentReport.slug}/`,
                                              document_name: currentReport.slug,
                                              custom_unit: `mm`,
                                              page_size: `A4`,
                                              orientation: `portrait`,
                                              delay: 1000,
                                            })
                                            .then(res => {
                                              console.log(res)
                                            })
                                            .catch(err => {
                                              console.log(err.res)
                                            })
                                        }

                                        http: useEffect(() => {
                                          loadReport(currentReport)
                                        }, [currentReport])

                                        return (
                                          <Layout>
                                            <SEO
                                              title={currentReport.title}
                                              description={
                                                currentReport.metaDescription
                                              }
                                              image={
                                                currentReport.featuredImage.file
                                                  .url
                                              }
                                            />
                                            {report ? (
                                              <AnimateIn>
                                                <Homescreen />
                                                <button
                                                  onClick={() => getPdf()}
                                                >
                                                  Download
                                                </button>
                                                <TableOfContents />
                                                {/*  */
                                                // @ts-ignore
                                                articles.map((article: any) => {
                                                  if (
                                                    article.__typename ===
                                                    "ContentfulArticle"
                                                  ) {
                                                    return (
                                                      <Article
                                                        key={article.slug}
                                                        title={article.title}
                                                        slug={article.slug}
                                                        reportSlug={
                                                          currentReport.slug
                                                        }
                                                        reportTitle={
                                                          currentReport.title
                                                        }
                                                        standFirst={
                                                          article.standFirst
                                                        }
                                                        featuredImage={
                                                          article.featuredImage
                                                        }
                                                        author={
                                                          article.author.name
                                                        }
                                                        copy={article.content}
                                                        allArticles={articles}
                                                        boxOut={
                                                          article.boxOut
                                                            ? {
                                                                title:
                                                                  article.boxOut
                                                                    .title,
                                                                copy:
                                                                  article.boxOut
                                                                    .copy,
                                                              }
                                                            : null
                                                        }
                                                        isAdvertorial={
                                                          article.isAdvertorial
                                                        }
                                                      />
                                                    )
                                                  } else if (
                                                    article.__typename ===
                                                    "ContentfulInfographic"
                                                  ) {
                                                    return (
                                                      <Infographic
                                                        key={article.slug}
                                                        title={article.title}
                                                        slug={article.slug}
                                                        reportSlug={
                                                          currentReport.slug
                                                        }
                                                        reportTitle={
                                                          currentReport.title
                                                        }
                                                        standfirst={
                                                          article.standFirst
                                                            .standFirst
                                                        }
                                                        content={article.body}
                                                        header={
                                                          article.header.hypeId
                                                        }
                                                        allArticles={articles}
                                                      />
                                                    )
                                                  }
                                                })}
                                                <Footer />
                                              </AnimateIn>
                                            ) : (
                                              <Loader />
                                            )}
                                          </Layout>
                                        )
                                      }

export default Report

export const reportQuery = graphql`
  query reportBySlug($slug: String!) {
    contentfulReport(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      color
      hypeAnimation {
        hypeId
        format
      }
      headerColor
      featuredImage {
        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
          ...GatsbyContentfulFluid
        }
        file {
          url
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
        ... on Node {
          __typename
          ... on ContentfulArticle {
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
            isAdvertorial
          }
          ... on ContentfulInfographic {
            title
            slug
            standFirst {
              standFirst
            }
            header {
              hypeId
            }
            body {
              json
            }
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
    }
  }
`
