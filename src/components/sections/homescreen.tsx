import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import LogoSvg from "../../assets/logo.svg"
import ScrollDown from "../../assets/scroll-down.svg"

const HomeScreen = styled.section`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  padding: 2rem;

  h1 {
    width: 460px;
    max-width: 90%;
    color: #fff;
    text-align: center;
    display: block;
    margin: 0 auto;
    font-size: 35px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 55px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      font-size: 65px;
    }
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

const Logo = styled(LogoSvg)`
  width: 173px;
  height: 24px;
  fill: #fff;
  display: block;
  margin: 1rem auto;
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

interface IProps {
  slug: string
  image: any
}

const Homescreen = ({ slug, image }: IProps) => {
  return (
    <HomeScreen>
      <Logo />
      <h1>Championing Mental Health in SMEs</h1>
      <Link to={`/${slug}/#table-of-contents`}>
        <Scroll />
      </Link>
      <Img fluid={image.fluid} />
    </HomeScreen>
  )
}

export default Homescreen
