import React from "react"
import styled from "styled-components"

const Article = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 3rem;
    border-left: 1px solid #000;
  }

  & > div > p:first-of-type::first-letter {
    font-size: 4rem;
    font-weight: bold;
    float: left;
    line-height: 4rem;
    color: ${props => props.theme.colors.primary};
    margin-right: 0.5rem;
  }

  p,
  strong,
  h2 {
    padding: 0 1rem;
  }

  aside {
    display: none;

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      display: block;
    }
  }
`

interface IProps {
  children: React.ReactNode
}

const Content = ({ children }: IProps) => {
  return <Article>{children}</Article>
}

export default Content
