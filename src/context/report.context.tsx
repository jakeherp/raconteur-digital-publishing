import React, { createContext, useState } from "react"
import IReport from "../interface/report.interface"

interface IProps {
  children: React.ReactNode
}

const Context = createContext<any>({})

const Provider = ({ children }: IProps) => {
  const [report, setReport] = useState<IReport | undefined>(undefined)

  return (
    <Context.Provider
      value={{
        report,
        loadReport: (currentReport: IReport) => {
          setReport(currentReport)
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
export { Provider }