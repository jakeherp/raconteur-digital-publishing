import React, { useContext } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import styled from "styled-components"

import Logo from "../../assets/logo.svg"
import Lines from "../../assets/lines.svg"

import ReportContext from "../../context/report.context"

const Foot = styled.footer`
  font-family: ${props => props.theme.fonts.apercu};
  width: ${props => props.theme.container.width};
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;

  h2,
  h3 {
    font-family: ${props => props.theme.fonts.apercu};
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }

  .sponsored-by {
    margin-bottom: 1rem;
  }
`

const Border = styled(Lines)`
  margin: 2.5rem 0;
`

const Columns = styled.div`
  margin-bottom: 4.75rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Column = styled.div`
  min-width: 288px;
  flex-grow: 1;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
  &:first-of-type {
    width: 32%;
  }
  svg {
    width: 215px;
    height: 28px;
  }
`

const Footer = () => {
  const { report } = useContext(ReportContext)

  const options: any = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p>{children}</p>,
    },
  }

  return (
    <Foot>
      <Border />
      <div>
        <h3 className="sponsored-by">
          {report.sponsoredBy.sponsoredBy
            ? report.sponsoredBy.sponsoredBy
            : `Publication sponsored by`}
        </h3>
        <img src={report.sponsoredBy.logo.file.url} />
      </div>
      <Columns>
        {documentToReactComponents(report.footerText.json, options)}
      </Columns>
      <Wrapper>
        <Column>
          <Logo />
        </Column>
        <Column>
          <strong>Contributors: </strong>
          {report.contributors
            .map((contributor: any) => contributor.name)
            .join(", ")}
        </Column>
      </Wrapper>
      <Border />
    </Foot>
  )
}

export default Footer
