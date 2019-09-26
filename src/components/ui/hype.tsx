/*
========================== Hype Animation Template ==========================

Animations need to be named without spaces / underscores / hyphens
and placed in a folder of their own name in order to work.

=============================================================================
*/

import React, { useEffect, useContext } from "react"
import ReportContext from "../../context/report.context"

interface IProps {
  animationName: string
}

const Hype = ({ animationName }: IProps) => {
  const isBrowser = typeof window !== undefined

  const { report } = useContext(ReportContext)

  useEffect(() => {
    const container: HTMLElement | null = document.getElementById(
      `${animationName}_hype_container`
    )

    if (isBrowser) {
      const script = document.createElement("script")

      script.src = `https://raconteur.london/upload/uploads/hype/longscroll/${report.slug}/${animationName}/${animationName}.hyperesources/${animationName}_hype_generated_script.js`
      script.async = true

      if (container !== null) {
        container.appendChild(script)
      }
    }
  }, [])

  return (
    <div
      id={`${animationName}_hype_container`}
      className="HYPE_document"
      style={{ position: `relative` }}
    />
  )
}

export default Hype
