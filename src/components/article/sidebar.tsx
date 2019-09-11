import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ReportContext from "../../context/report.context"

const Aside = styled.aside`
  min-width: 250px;
  max-width: 300px;
  border-left: 1px solid #000;

  h2 {
    font-size: 28px;
    padding: 0 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      flex-direction: row;
      padding: 1rem;
      margin: 0;
      border-bottom: 1px solid #000;
      &:last-of-type {
        border-bottom: none;
      }
      &.active {
        background: ${props => props.theme.colors.primary};
        color: #fff;
      }
    }
    span:first-of-type {
      font-size: 3rem;
      line-height: 3rem;
      margin-right: 1rem;
      font-family: ${props => props.theme.fonts.apercu};
      font-weight: bold;
      float: left;
    }
  }
`

const Sticky = styled.div`
  position: sticky;
  top: 1rem;
  height: auto;
`

interface IProps {
  currentArticle: string
}

const Sidebar = ({ currentArticle }: IProps) => {
  const { report } = useContext(ReportContext)

  return (
    <Aside>
      <Sticky>
        {report ? (
          <React.Fragment>
            <h2>{report.title}</h2>
            <nav>
              <ul>
                {report.articles.map((article: any, index: number) => (
                  <li
                    key={index}
                    className={
                      currentArticle === article.slug ? "active" : undefined
                    }
                  >
                    <Link to={`/${report.slug}/#${article.slug}`}>
                      <span>{index + 1}</span>
                      <span>{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </React.Fragment>
        ) : (
          "Loading"
        )}
      </Sticky>
    </Aside>
  )
}

export default Sidebar
