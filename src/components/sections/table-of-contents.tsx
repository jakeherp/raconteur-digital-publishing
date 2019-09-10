import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Container from "../layout/container"
import Animate from "../ui/animate-in"

import Lines from "../../assets/lines.svg"
import IArticle from "../../interface/article.interface"
import IInfographic from "../../interface/infographic.interface"

const Section = styled.section`
  padding: 4.75rem 0;

  h2 {
    font-size: 60px;
    text-align: center;
  }
`

const List = styled.ol`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  li {
    max-width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid #000;
    a {
      display: flex;
      flex-direction: row;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      &:nth-of-type(2n + 1) {
        margin-right: 1rem;
      }
    }
  }
`

const Bullet = styled.span`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
  min-width: 3rem;
  width: 3rem;
  height: 3rem;
  background: ${props => props.theme.colors.primary};
  border-radius: 9999px;
  color: #fff;
  font-family: ${props => props.theme.fonts.apercu};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    min-width: 88px;
    width: 88px;
    height: 88px;
    font-size: 50px;
  }
`

const Text = styled.div`
  padding-top: 0.5rem;
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`

interface IProps {
  color?: string
  reportSlug: string
  articles: any
}

const TableOfContents = ({ articles, reportSlug }: IProps) => {
  return (
    <Section id="table-of-contents">
      <Container>
        <Animate>
          <h2>Contents</h2>
        </Animate>
        <Lines />
        <List>
          {articles.map((article: IArticle | IInfographic, index: number) => (
            <li key={index}>
              <Link to={`/${reportSlug}/#${article.slug}`}>
                <Bullet>{index + 1}</Bullet>
                <Text>
                  <h3>{article.title}</h3>
                  <p>{article.standFirst.standFirst}</p>
                </Text>
              </Link>
            </li>
          ))}
        </List>
      </Container>
    </Section>
  )
}

export default TableOfContents
