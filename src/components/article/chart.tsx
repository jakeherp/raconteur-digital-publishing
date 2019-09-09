import React from "react"
import styled from "styled-components"

const Chart = styled.div`
  margin: 1rem 1rem 1rem 0;
  position: relative;
  background: #fff;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  width: 100%;
  box-sizing: content-box;
  padding: 1rem 0;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    float: left;
    margin-left: -4rem;
    width: 50%;
    &.full {
      width: 110%;
    }
  }
`

interface IProps {
  children: React.ReactNode
  format: string
}

const ChartWrapper = ({ children, format }: IProps) => {
  return (
    <Chart className={format === "Full width" ? "full" : undefined}>
      {children}
    </Chart>
  )
}

export default ChartWrapper
