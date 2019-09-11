import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Container from "../layout/container"
import Hype from "../ui/hype"

import LogoSvg from "../../assets/logo.svg"
import ScrollDown from "../../assets/scroll-down.svg"
import ReportContext from "../../context/report.context"

const HomeScreen = styled.section`
  position: relative;
  width: 100vw;
  padding: 2rem 0 4rem;

  h1 {
    width: 460px;
    max-width: 90%;
    color: #fff;
    text-align: center;
    display: block;
    margin: 0 auto 2rem;
    font-size: 35px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 55px;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
  }

  .HYPE_document {
    padding-bottom: 56.25%;
  }
`

const Logo = styled(LogoSvg)`
  width: 173px;
  height: 24px;
  fill: #fff;
  display: block;
  margin: 1rem auto;
`

const Wrap = styled.div`
  width: 75vh;
  max-width: 100%;
  margin: 0 auto;
`

const Scroll = styled(ScrollDown)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.5s;
  &:hover {
    margin-bottom: 0.5rem;
  }
`

const Sponsor = styled.img`
  margin: 2rem auto;
  display: block;
`

const Homescreen = () => {
  const { report } = useContext(ReportContext)

  return (
    <HomeScreen style={{ backgroundColor: report.headerColor }}>
      <Container>
        <Logo />
        <h1>{report.title}</h1>
        <Wrap>
          {report.hypeAnimation.hypeId ? (
            <Hype animationName={report.hypeAnimation.hypeId} />
          ) : (
            <Img fluid={report.featuredImage.fluid} />
          )}
        </Wrap>
        <Link to={`/${report.slug}/#table-of-contents`}>
          <Scroll />
        </Link>
        <Sponsor src={report.sponsoredBy.logo.file.url} />
      </Container>
    </HomeScreen>
  )
}

export default Homescreen
