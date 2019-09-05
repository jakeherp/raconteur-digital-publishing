import React from "react"
import styled from "styled-components"

import Quotes from "../../assets/quotes.svg"

const Blockquote = styled.blockquote`
  margin: 1rem 1rem 1rem 0;
  position: relative;
  background: #fff;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  width: 100%;
  box-sizing: content-box;
  padding: 2rem 0;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5rem;

  svg {
    position: absolute;
    top: -1.25rem;
    left: 0.5rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    float: left;
    margin-left: -4rem;
    width: 345px;
  }
`

interface IProps {
  children: React.ReactNode
}

const Quote = ({ children }: IProps) => {
  return (
    <Blockquote>
      <Quotes />
      {children}
    </Blockquote>
  )
}

export default Quote
