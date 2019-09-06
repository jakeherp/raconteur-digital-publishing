/*
========================== Hype Animation Template ==========================

Animations need to be named without spaces / underscores / hyphens
and placed in a folder of their own name in order to work.

=============================================================================
*/

import React, { useEffect } from "react"

interface IProps {
  animationName: string
}

const Hype = ({ animationName }: IProps) => {
  if (window !== undefined) {
    const script = document.createElement("script")

    script.src = `https://raconteur.london/upload/uploads/hype/${animationName}/${animationName}.hyperesources/${animationName}_hype_generated_script.js`
    script.async = true

    const container: HTMLElement | null = document.getElementById(
      `${animationName}_hype_container`
    )

    useEffect(() => {
      if (container !== null) {
        container.appendChild(script)
      }
    }, [container])
  }

  return (
    <div
      id={`${animationName}_hype_container`}
      className="HYPE_document"
      style={{ position: `relative` }}
    />
  )
}

export default Hype
