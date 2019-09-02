import React from "react"
import styled from "styled-components"

const Standfirst = styled.p`
  font-size: 1.8rem;
  line-height: 1.25;
  margin-bottom: 5rem;
`

interface IProps {
  children: React.ReactNode
}

const StandFirst = ({ children }: IProps) => {
  return <Standfirst>{children}</Standfirst>
}

export default StandFirst
