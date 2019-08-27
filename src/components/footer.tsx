import React from "react"
import styled from "styled-components"

import Context from "../hoc/context"

import Logo from "../assets/logo.svg"
import Lines from "../assets/lines.svg"

const Foot = styled.footer`
  font-family: ${props => props.theme.fonts.apercu};
  width: ${props => props.theme.breakpoints.desktop};
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
`

const Third = styled.div`
  width: 32%;

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

const Footer = () => (
  <Context.Consumer>
    {context => (
      <Foot>
        <Border />
        <div>
          <h3>Publication sponsored by</h3>
          {context.report.sponsoredBy}
        </div>
        <Columns>{context.report.footerText}</Columns>
        <Wrapper>
          <Third>
            <h2>
              <Logo />
            </h2>
            <List>
              <li>
                <h3>Publisher</h3> {context.report.publisher}
              </li>
              <li>
                <h3>Project manager</h3> {context.report.projectManager}
              </li>
              <li>
                <h3>Editorial consultant</h3>{" "}
                {context.report.editorialConsultant}
              </li>
              <li>
                <h3>Editor</h3> {context.report.editor}
              </li>
              <li>
                <h3>Designers</h3>{" "}
                {context.report.designers.map(
                  (designer: React.ReactNode, i: number) => (
                    <span key={i}>{designer}</span>
                  )
                )}
              </li>
              <li>
                <h3>Head of production</h3> {context.report.headOfProduction}
              </li>
              <li>
                <h3>Digital marketing manager</h3>{" "}
                {context.report.digitalMarketingManager}
              </li>
            </List>
          </Third>
          {context.report.contributors.map(
            (contributor: { name: React.ReactNode; bio: React.ReactNode }) => (
              <Third>
                <h2>Contributors</h2>
                <h3>{contributor.name}</h3>
                <p>{contributor.bio}</p>
              </Third>
            )
          )}
        </Wrapper>
        <Border />
      </Foot>
    )}
  </Context.Consumer>
)

export default Footer
