import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Container from "../layout/container"
import Sidebar from "../article/sidebar"
import StandFirst from "../article/standfirst"
import Content from "../article/content"
import BoxOut from "../article/boxout"
import Blockquote from "../article/quote"

import Lines from "../../assets/lines.svg"

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
    max-height: 100%;
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
  standfirst: object
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
  }
}

const Article = ({ ...props }: IProps) => {
  const options: any = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p>{children}</p>,
      [BLOCKS.QUOTE]: (_node: any, children: any) => (
        <Blockquote>{children}</Blockquote>
      ),
    },
  }

  return (
    <article id="burnout-is-now-a-hot-business-issue">
      <Header>
        <Img fluid={props.featuredImage.fluid} />
      </Header>
      <Container>
        <Headline>
          <h1>{props.title}</h1>
        </Headline>
        <StandFirst>{props.standfirst}</StandFirst>
        <Content>
          <div>
            <Author>{props.author}</Author>
            <Lines />
            {documentToReactComponents(props.content.json, options)}
            <BoxOut title={props.boxOut.title}>
              {documentToReactComponents(props.boxOut.content.json, options)}
            </BoxOut>
          </div>
          <Sidebar
            reportTitle="Championing Mental Health in SMEs"
            articleList={props.allArticles}
          />
        </Content>
      </Container>
    </article>
  )
}

export default Article
