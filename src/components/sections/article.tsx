import React, { useContext } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import ReportContext from "../../context/report.context"
import Container from "../layout/container"
import Sidebar from "../article/sidebar"
import StandFirst from "../article/standfirst"
import Content from "../article/content"
import BoxOut from "../article/boxout"
import Blockquote from "../article/quote"
import Animate from "../ui/animate-in"
import Hype from "../ui/hype"

import Lines from "../../assets/lines.svg"

const Section = styled.article`
  margin-bottom: 5rem;
`

const Header = styled.header`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 600px;

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const Headline = styled.div`
  margin: -3rem 0 2rem;
  max-width: 600px;

  h1 {
    font-size: 60px;
    line-height: 1.1;
    color: #fff;
    display: inline;
    background: ${props => props.theme.colors.primary};
    padding: 0.25rem 0.5rem;
  }
`

const Author = styled.strong`
  font-family: ${props => props.theme.fonts.apercu};
`

interface IProps {
  title: string
  slug: string
  reportSlug: string
  standfirst: string
  featuredImage: {
    fluid: any
  }
  author: string
  content: {
    json: any
  }
  allArticles: {
    title: string
    slug: string
  }[]
  boxOut: {
    title: string
    content: {
      json: any
    }
  } | null
}

const Article = ({ ...props }: IProps) => {
  const options: any = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p>{children}</p>,
      [BLOCKS.QUOTE]: (_node: any, children: any) => (
        <Blockquote>{children}</Blockquote>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (_node: any, { hypeId }: any) => (
        <Hype animationName={hypeId} />
      ),
    },
  }

  const { report } = useContext(ReportContext)
  console.log(report)

  return (
    <Section id={props.slug}>
      <Header>
        <Img fluid={props.featuredImage.fluid} />
      </Header>
      <Container>
        <Animate>
          <Headline>
            <h1>{props.title}</h1>
          </Headline>
        </Animate>
        <Animate>
          <StandFirst>{props.standfirst}</StandFirst>
        </Animate>
        <Content>
          <div>
            <Author>{props.author}</Author>
            <Lines />
            {documentToReactComponents(props.content.json, options)}
            {props.boxOut !== null && (
              <BoxOut title={props.boxOut.title}>
                {documentToReactComponents(props.boxOut.content.json, options)}
              </BoxOut>
            )}
          </div>
          <Sidebar
            reportTitle="Championing Mental Health in SMEs"
            reportSlug={props.reportSlug}
            currentArticle={props.slug}
            articleList={props.allArticles}
          />
        </Content>
      </Container>
    </Section>
  )
}

export default Article
