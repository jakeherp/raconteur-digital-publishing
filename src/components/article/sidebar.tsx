import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Animate from "../ui/animate-in"

const Aside = styled.aside`
  min-width: 250px;
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
      border-bottom: 1px solid #000;
      &:first-of-type {
        border-top: 1px solid #000;
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
  reportTitle: string
  reportSlug: string
  articleList: {
    title: string
    slug: string
  }[]
}

const Sidebar = ({ reportTitle, articleList, reportSlug }: IProps) => {
  return (
    <Aside>
      <Sticky>
        <Animate>
          <h2>{reportTitle}</h2>
        </Animate>
        <nav>
          <ul>
            {articleList.map((article, index) => (
              <li key={index}>
                <Link to={`/${reportSlug}/#${article.slug}`}>
                  <span>{index + 1}</span>
                  <span>{article.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Sticky>
    </Aside>
  )
}

export default Sidebar
