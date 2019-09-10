import React from "react"
import styled from "styled-components"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// import ReportContext from "../../context/report.context"
import Container from "../layout/container"
import Sidebar from "../article/sidebar"
import StandFirst from "../article/standfirst"
import Content from "../article/content"
import Blockquote from "../article/quote"
import Animate from "../ui/animate-in"
import Hype from "../ui/hype"

const Section = styled.article`
  margin-bottom: 5rem;
`

const Header = styled.header`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
`

const Headline = styled.div`
  margin: 0 0 2rem;
  max-width: 600px;

  h1 {
    font-size: 60px;
    line-height: 1.1;
    padding: 0.25rem 0;
    span {
      background: ${props => props.theme.colors.primary};
      color: #fff;
      display: inline;
      padding: 0.5rem;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }
  }
`

const Chart = styled.div`
  width: 100% !important;
`

const Infographics = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
`

interface IProps {
  title: string
  slug: string
  reportTitle: string
  reportSlug: string
  standfirst: string
  header: string
  content: {
    json: any
  }
  allArticles: {
    title: string
    slug: string
  }[]
}

const Infographic = ({ ...props }: IProps) => {
  const options: any = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p>{children}</p>,
      [BLOCKS.QUOTE]: (_node: any, children: any) => (
        <Blockquote>{children}</Blockquote>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (_node: any) => (
        <Chart>
          <Hype animationName={_node.data.target.fields.hypeId["en-GB"]} />
        </Chart>
      ),
    },
  }

  // const { report } = useContext(ReportContext)
  return (
    <Section id={props.slug}>
      <Header>
        <Container>
          <Animate>
            <Headline>
              <h1>
                <span>{props.title}</span>
              </h1>
            </Headline>
          </Animate>
          <Animate>
            <StandFirst>{props.standfirst}</StandFirst>
          </Animate>
          <Hype animationName={props.header} />
        </Container>
      </Header>
      <Container>
        <Content>
          <Infographics>
            {documentToReactComponents(props.content.json, options)}
          </Infographics>
          <Sidebar
            reportTitle={props.reportTitle}
            reportSlug={props.reportSlug}
            currentArticle={props.slug}
            articleList={props.allArticles}
          />
        </Content>
      </Container>
    </Section>
  )
}

export default Infographic
