import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: ${props => props.theme.container.width};
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
`

interface IProps {
  children: React.ReactNode
}

const Container = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default Container
