import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import ReportContext from "../../context/report.context"

import "./layout.css"
import Loader from "../ui/loader"
import AnimateIn from "../ui/animate-in"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
  })
}

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  const { report } = useContext(ReportContext)

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
      primary: report ? report.color : `#333`, // (context: any) => context.report.primaryColor
      secondary: `#e64150`,
      white: `#ffffff`,
    },
    fonts: {
      tiempos: `"Tiempos", serif`,
      apercu: `"Apercu", sans-serif`,
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {report ? (
          <AnimateIn>
            <main>{children}</main>
          </AnimateIn>
        ) : (
          <Loader />
        )}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Layout
