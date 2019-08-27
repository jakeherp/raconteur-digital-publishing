import React from "react"
import styled from "styled-components"

import LogoSvg from "../../assets/logo.svg"
import ScrollDown from "../../assets/scroll-down.svg"

const HomeScreen = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  background: #656abe;

  h1 {
    width: 460px;
    max-width: 90%;
    color: #fff;
    text-align: center;
    display: block;
    margin: 0 auto;
    font-size: 65px;
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
`

const Homescreen = () => {
  return (
    <HomeScreen>
      <Logo />
      <h1>Championing Mental Health in SMEs</h1>
      <Scroll />
    </HomeScreen>
  )
}

export default Homescreen
