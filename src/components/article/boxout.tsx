import React from "react"
import styled from "styled-components"

import Animate from "../ui/animate-in"

const ShortArticle = styled.div`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  margin: 0 -5%;
  padding: 2rem 1rem;
  border-top: 5px solid #000;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin: 0 0 0 -4rem;
  }

  h2 {
    font-family: ${props => props.theme.fonts.apercu};
  }
  p {
    font-family: ${props => props.theme.fonts.apercu};
    line-height: 1.7;
  }
  img {
    width: 300px;
    max-width: 100%;
  }
`

interface IProps {
  title: string
  children: React.ReactNode
}

const BoxOut = ({ title, children }: IProps) => {
  return (
    <ShortArticle>
      <Animate>
        <h2>{title}</h2>
      </Animate>
      {children}
    </ShortArticle>
  )
}

export default BoxOut
