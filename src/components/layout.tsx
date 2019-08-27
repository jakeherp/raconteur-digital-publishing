import React from "react"
import { ThemeProvider } from "styled-components"
import "./layout.css"

import { Provider } from "../hoc/context"
import Footer from "./footer"

interface IProps {
  children: React.ReactNode
}

const theme = {
  breakpoints: {
    desktop: `966px`,
    tablet: `768px`,
    phone: `576px`,
  },
  colors: {
    black: `#000000`,
    darkGrey: `#404040`,
    lightGrey: `#f6f5f5`,
    mediumGrey: `#d8d8d8`,
    primary: `#78c8d7`,
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
    <ThemeProvider theme={theme}>
      <Provider>
        <React.Fragment>
          <main>{children}</main>
          <Footer />
        </React.Fragment>
      </Provider>
    </ThemeProvider>
  )
}

export default Layout
