import React from "react"
import styled from "styled-components"

const ShortArticle = styled.div`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  margin-left: -4rem;
  padding: 2rem 1rem;
  border-top: 5px solid #000;

  h2 {
    font-family: ${props => props.theme.fonts.apercu};
  }
  p {
    column-count: 2;
    font-family: ${props => props.theme.fonts.apercu};
    line-height: 1.7;
  }
`

interface IProps {
  title: string
  children: React.ReactNode
}

const BoxOut = ({ title, children }: IProps) => {
  return (
    <ShortArticle>
      <h2>{title}</h2>
      {children}
    </ShortArticle>
  )
}

export default BoxOut
