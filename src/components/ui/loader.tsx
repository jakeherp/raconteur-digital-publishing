import React from "react"
import styled from "styled-components"

import Raconteur from "../../assets/logo.svg"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Logo = styled(Raconteur)`
  fill: #333;
  width: 20vw;
  display: block;
  margin: 0 auto 3rem;
`

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 auto;
  width: 64px;
  height: 64px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #333;
    border-radius: 50%;
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #333 transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loader = () => {
  return (
    <Container>
      <Logo />
      <Spinner>
        <div />
        <div />
        <div />
        <div />
      </Spinner>
    </Container>
  )
}

export default Loader
