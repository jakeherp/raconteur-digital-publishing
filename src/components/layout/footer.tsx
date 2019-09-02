import React from "react"
import styled from "styled-components"

import Logo from "../../assets/logo.svg"
import Lines from "../../assets/lines.svg"

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
`

const Border = styled(Lines)`
  margin: 2.5rem 0;
`

const Columns = styled.div`
  column-count: 2;
  column-gap: 2rem;
  margin-bottom: 4.75rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Third = styled.div`
  width: 32%;
  min-width: 288px;
  flex-grow: 1;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  h2 {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #000;
    height: 50px;
    margin-bottom: 1rem;
    svg {
      width: 215px;
      height: 28px;
    }
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0;
    h3 {
      display: inline-block;
    }
  }
`

interface IProps {
  sponsoredBy: {
    name: string
    logo: any
    slug: string
  }
  footerText: string
  publisher: string
  projectManager: string
  editorialConsultant?: string
  editor: string
  designers: string[]
  headOfProduction: string
  digitalMarketingManager: string
  contributors: {
    name: string
    bio: {
      bio: string
    }
  }[]
}

const Footer = ({ ...props }: IProps) => (
  <Foot>
    <Border />
    <div>
      <h3>Publication sponsored by</h3>
      <img src={props.sponsoredBy.logo.file.url} />
    </div>
    <Columns>{props.footerText}</Columns>
    <Wrapper>
      <Third>
        <h2>
          <Logo />
        </h2>
        <List>
          <li>
            <h3>Publisher</h3> {props.publisher}
          </li>
          <li>
            <h3>Project manager</h3> {props.projectManager}
          </li>
          {props.editorialConsultant !== undefined && (
            <li>
              <h3>Editorial consultant</h3> {props.editorialConsultant}
            </li>
          )}
          <li>
            <h3>Editor</h3> {props.editor}
          </li>
          <li>
            <h3>Designers</h3>{" "}
            {props.designers.map((designer: React.ReactNode, i: number) => (
              <span key={i}>{designer}</span>
            ))}
          </li>
          <li>
            <h3>Head of production</h3> {props.headOfProduction}
          </li>
          <li>
            <h3>Digital marketing manager</h3> {props.digitalMarketingManager}
          </li>
        </List>
      </Third>
      {props.contributors.map((contributor, index) => (
        <Third key={index}>
          <h2>{index === 0 ? `Contributors` : ` `}</h2>
          <h3>{contributor.name}</h3>
          <p>{contributor.bio.bio}</p>
        </Third>
      ))}
    </Wrapper>
    <Border />
  </Foot>
)

export default Footer
