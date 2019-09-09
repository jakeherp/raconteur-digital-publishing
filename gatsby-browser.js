import React from "react"
import * as Report from "./src/context/report.context"

export const wrapRootElement = ({ element }) => (
  <Report.Provider>{element}</Report.Provider>
)
