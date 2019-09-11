import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Container from "../layout/container"
import Hype from "../ui/hype"

import LogoSvg from "../../assets/logo.svg"
import ScrollDown from "../../assets/scroll-down.svg"

const HomeScreen = styled.section`
  position: relative;
  width: 100vw;
  padding: 2rem 2rem 4rem;

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

interface IProps {
  slug: string
  title: string
  color: string
  image: any
  sponsor: string
  hypeId?: string
}

const Homescreen = ({ slug, title, image, color, sponsor, hypeId }: IProps) => {
  return (
    <HomeScreen style={{ backgroundColor: color }}>
      <Container>
        <Logo />
        <h1>{title}</h1>
        <Wrap>
          {hypeId ? (
            <Hype animationName={hypeId} />
          ) : (
            <Img fluid={image.fluid} />
          )}
        </Wrap>
        <Link to={`/${slug}/#table-of-contents`}>
          <Scroll />
        </Link>
        <Sponsor src={sponsor} />
      </Container>
    </HomeScreen>
  )
}

export default Homescreen
