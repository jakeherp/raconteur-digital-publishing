import React, { createContext, useState } from "react"

interface IProps {
  children: React.ReactNode
}

const Context = createContext<any>({})

const Provider = ({ children }: IProps) => {
  const [report, setReport] = useState<object>({
    sponsoredBy: `Axa`,
    footerText: `Exercitation anim do consequat fugiat est nisi elit. Ex magna culpa et ad ullamco esse amet. Veniam do anim commodo laborum elit laboris. Nulla irure cillum pariatur do mollit voluptate do duis sit ut quis magna. Enim et aute dolore anim. Ad deserunt officia et irure aute duis aute laborum ullamco aliquip qui excepteur. Commodo ullamco officia voluptate qui nulla nostrud non ad proident esse magna in. Anim eu reprehenderit est enim tempor.`,
    publisher: `John Doe`,
    projectManager: `John Doe`,
    editorialConsultant: `John Doe`,
    editor: `John Doe`,
    designers: [`John Doe`, `Jane Doe`],
    headOfProduction: `John Doe`,
    digitalMarketingManager: `John Doe`,
    contributors: [
      {
        name: `John Doe`,
        bio: `Lorem anim fugiat pariatur fugiat est aute eiusmod aliquip ut incididunt. Ex eiusmod pariatur mollit laborum incididunt ullamco. Mollit elit duis cillum ad culpa. Ex ea eiusmod excepteur elit cupidatat excepteur cupidatat occaecat commodo amet.`,
      },
      {
        name: `John Doe`,
        bio: `Consequat ad et nisi laboris ipsum occaecat veniam mollit consequat irure ut officia. Minim fugiat velit ut aliqua sint non aute esse laboris. Ullamco Lorem occaecat minim ea sit fugiat dolor Lorem exercitation elit occaecat pariatur.`,
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
