import React from "react"
import styled from "styled-components"

import Quotes from "../../assets/quotes.svg"

const Blockquote = styled.blockquote`
  float: left;
  margin: 1rem 1rem 1rem 0;
  position: relative;
  background: #fff;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  box-sizing: content-box;
  padding: 2rem;
  width: 345px;
  margin-left: -4rem;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5rem;

  svg {
    position: absolute;
    top: -1.25rem;
    left: 0.5rem;
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
