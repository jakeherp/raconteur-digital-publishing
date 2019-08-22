import React, { createContext, useState } from "react"

interface IProps {
  children: React.ReactNode
}

const Context = createContext<any>({})

const Provider = ({ children }: IProps) => {
  const [report, setReport] = useState<object>({
    sponsoredBy: `Axa`,
    footerText: `Lorem ipsum`,
    publisher: `John Doe`,
    projectManager: `John Doe`,
    editorialConsultant: `John Doe`,
    editor: `John Doe`,
    designers: [`John Doe`],
    headOfProduction: `John Doe`,
    digitalMarketingManager: `John Doe`,
    contributors: [
      {
        name: `John Doe`,
        bio: `Lorem ipsum dolor sit amet`,
      },
      {
        name: `John Doe`,
        bio: `Lorem ipsum dolor sit amet`,
      },
    ],
  })

  const handleReport = () => {
    setReport({ report: `Just a test` })
  }

  return (
    <Context.Provider
      value={{
        report,
        handleReport,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
export { Provider }
