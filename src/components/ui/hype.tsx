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
  const isBrowser = typeof window !== undefined

  useEffect(() => {
    const container: HTMLElement | null = document.getElementById(
      `rac_hype_container`
    )

    if (isBrowser) {
      const script = document.createElement("script")

      script.src = `https://raconteur.london/upload/uploads/hype/${animationName}/rac.hyperesources/rac_hype_generated_script.js`
      script.async = true

      if (container !== null) {
        container.appendChild(script)
      }
    }
  }, [])

  return (
    <div
      id={`rac_hype_container`}
      className="HYPE_document"
      style={{ position: `relative`, paddingBottom: `56%` }}
    />
  )
}

export default Hype
