import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// import ReportContext from "../../context/report.context"
import Container from "../layout/container"
import Sidebar from "../article/sidebar"
import StandFirst from "../article/standfirst"
import Content from "../article/content"
import BoxOut from "../article/boxout"
import Blockquote from "../article/quote"
import Animate from "../ui/animate-in"
import Hype from "../ui/hype"
import Chart from "../article/chart"

import Lines from "../../assets/lines.svg"

import IArticle from "../../interface/article.interface"

const Header = styled.header`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  padding-bottom: 56%;
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 600px;
    padding-bottom: 0;
  }
  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const Author = styled.strong`
  font-family: ${props => props.theme.fonts.apercu};
`

interface IProps extends IArticle {
  reportSlug: string
  reportTitle: string
  allArticles: {
    title: string
    slug: string
  }[]
}

const Article = ({ ...props }: IProps) => {
  const advertorial = props.isAdvertorial
    ? {
        fontFamily: `"Apercu", sans-serif`,
        marginTop: `-5rem`,
      }
    : {
        fontFamily: `"Tiempos", serif`,
        marginTop: `-3rem`,
      }

  const Section = styled.article`
    margin-bottom: 5rem;
    font-family: ${advertorial.fontFamily};

    h1 {
      font-family: ${advertorial.fontFamily};
    }
  `

  const Headline = styled.div`
    margin: ${advertorial.marginTop} 0 2rem;
    max-width: 600px;

    h1 {
      font-size: 35px;
      line-height: 1.2;
      padding: 0.25rem 0;
      span {
        background: ${props => props.theme.colors.primary};
        color: #fff;
        display: inline;
        padding: 0.5rem;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
      }
      @media screen and (min-width: ${props =>
          props.theme.breakpoints.tablet}) {
        font-size: 60px;
      }
    }
  `

  const Feature = styled.span`
    background: #fff;
    padding: 0.5rem;
    margin-bottom: 0.25rem;
    display: inline-block;
    color: #000;
    font-size: 20px;
  `

  const Small = styled.small`
    font-size: 0.7rem;
    line-height: 1.25em !important;
  `

  const options: any = {
    renderNode: {
      [BLOCKS.QUOTE]: (_node: any, children: any) => (
        <Blockquote>{children}</Blockquote>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (_node: any) => {
        const entry = _node.data.target

        if (
          entry.sys.type === "Entry" &&
          entry.sys.contentType.sys.id !== "smallPrint"
        ) {
          return (
            <Chart format={entry.fields.format["en-GB"]}>
              <Hype animationName={entry.fields.hypeId["en-GB"]} />
            </Chart>
          )
        } else if (
          entry.sys.type === "Entry" &&
          entry.sys.contentType.sys.id === "smallPrint"
        ) {
          return entry.fields.text["en-GB"].content.map((c: any, i: number) => (
            <p key={i}>
              <Small>{c.content.map((text: any) => text.value)}</Small>
            </p>
          ))
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (_node: any) => (
        <p>
          <img
            src={_node.data.target.fields.file["en-GB"].url}
            alt={_node.data.target.fields.title["en-GB"]}
          />
        </p>
      ),
    },
  }

  // const { report } = useContext(ReportContext)
  return (
    <Section id={props.slug}>
      {props.featuredImage && (
        <Header>
          <Img fluid={props.featuredImage.fluid} />
        </Header>
      )}
      <Container>
        <Animate>
          <Headline>
            {props.isAdvertorial && <Feature>Commercial feature</Feature>}
            <h1>
              <span>{props.title}</span>
            </h1>
          </Headline>
        </Animate>
        <Animate>
          <StandFirst>{props.standFirst.standFirst}</StandFirst>
        </Animate>
        <Content>
          <div>
            <Author>{props.author}</Author>
            <Lines />
            {documentToReactComponents(props.copy.json, options)}
            {props.boxOut !== null && (
              <BoxOut title={props.boxOut.title}>
                {documentToReactComponents(props.boxOut.copy.json, options)}
              </BoxOut>
            )}
          </div>
          <Sidebar currentArticle={props.slug} />
        </Content>
      </Container>
    </Section>
  )
}

export default Article
