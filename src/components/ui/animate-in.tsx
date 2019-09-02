import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import styled from "styled-components"

const Anim = styled.div`
  opacity: 0;
  transform: translateY(100px);

  &.in {
    opacity: 1;
    transform: translateY(0);
  }
`

interface IProps {
  children: React.ReactNode
  duration?: string
  bottomOffset?: string
}

const AnimateIn = ({ children, duration, bottomOffset }: IProps) => {
  const [on, show] = useState(false)

  return (
    <React.Fragment>
      <Waypoint
        onEnter={() => show(true)}
        bottomOffset={bottomOffset ? bottomOffset : `25%`}
      />
      <Anim
        className={on ? "in" : undefined}
        style={duration ? { transition: duration } : { transition: `1s` }}
      >
        {children}
      </Anim>
    </React.Fragment>
  )
}

export default AnimateIn
