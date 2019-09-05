import React, { createContext, useState } from "react"

interface IProps {
  children: React.ReactNode
}

interface IReport {
  title: string
  slug: string
  color?: string
  sponsoredBy?: {
    logo: any
    name: string
    link: string
  }
  articles: {
    title: string
    slug: string
    standFirst: {
      standFirst: string
    }
    featuredImage: any
    author: string
    content: any
    boxOut?: {
      title: string
      copy: any
    }
  }[]
  contributors: {
    name: string
    bio: {
      bio: string
    }
  }[]
  publisher: string
  projectManager: string
  editorialConsultant: string
  editor: string
  designers: string[]
  headOfProduction: string
  digitalMarketingManager: string
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
