import React, { createContext, useState } from "react"
import IReport from "../interface/report.interface"

interface IProps {
  children: React.ReactNode
}

const defaults = {
  report: undefined,
  loadReport: () => {},
}

const ReportContext = createContext<any>(defaults)

export const Provider = ({ children }: IProps) => {
  const [report, setReport] = useState<IReport | undefined>(defaults.report)

  const loadReport = (currentReport: any) => {
    try {
      setReport(currentReport)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ReportContext.Provider
      value={{
        ...defaults,
        report,
        loadReport,
      }}
    >
      {children}
    </ReportContext.Provider>
  )
}

export default ReportContext
