import React from "react"
import styled from "styled-components"

import Context from "../hoc/context"

const Foot = styled.footer`
  width: ${props => props.theme.breakpoints.desktop};
  background: red;
  margin: 0 auto;
  border: 12px solid transparent;
  border-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9Ii41Ij4gICAgPHBhdGggZD0iTTAgMTEuNWg5NjVNMCA2LjVoOTY1TTAgLjVoOTY1Ii8+ICA8L2c+PC9zdmc+)
    50 100% round;
`

const Footer = () => (
  <Context.Consumer>
    {context => (
      <Foot>
        <div>
          Publication sponsored by <br />
          {context.report.sponsoredBy}
        </div>
        <div>{context.report.footerText}</div>
      </Foot>
    )}
  </Context.Consumer>
)

export default Footer
