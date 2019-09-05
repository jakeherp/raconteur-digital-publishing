import React from "react"
import { ThemeProvider } from "styled-components"
import "./layout.css"

import * as Context from "../../hoc/context"

interface IProps {
  children: React.ReactNode
}

const theme = {
  breakpoints: {
    desktop: `992px`,
    tablet: `768px`,
    phone: `576px`,
  },
  container: {
    width: `966px`,
    maxWidth: `90%`,
  },
  colors: {
    black: `#000000`,
    darkGrey: `#404040`,
    lightGrey: `#f6f5f5`,
    mediumGrey: `#d8d8d8`,
    primary: `#040095`, // (context: any) => context.report.primaryColor
    secondary: `#e64150`,
    white: `#ffffff`,
  },
  fonts: {
    tiempos: `"Tiempos", serif`,
    apercu: `"Apercu", sans-serif`,
  },
}

const Layout = ({ children }: IProps) => {
  return (
    <Context.Provider>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <main>{children}</main>
        </React.Fragment>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default Layout
