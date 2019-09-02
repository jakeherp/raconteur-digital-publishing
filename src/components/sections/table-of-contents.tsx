import React from "react"
import styled from "styled-components"

import Container from "../layout/container"
import Animate from "../ui/animate-in"

import Lines from "../../assets/lines.svg"

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
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  li {
    padding-bottom: 1rem;
    border-bottom: 1px solid #000;
    display: flex;
    flex-direction: row;

    &:nth-of-type(2n + 1) {
      margin-right: 1rem;
    }
  }
`

const Bullet = styled.span`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 88px;
  width: 88px;
  height: 88px;
  margin-right: 1rem;
  background: ${props => props.theme.colors.primary};
  border-radius: 9999px;
  color: #fff;
  font-family: ${props => props.theme.fonts.apercu};
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
`

const Text = styled.div`
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`

interface IProps {
  color?: string
  articles: {
    title: string
    slug: string
    standFirst: {
      standFirst: string
    }
    featuredImage: {
      fluid: any
    }
    author: {
      name: string
    }
    content: {
      json: any
    }
    boxOut: {
      title: string
      copy: {
        json: any
      }
    } | null
  }[]
}

const TableOfContents = ({ articles }: IProps) => {
  return (
    <Section id="table-of-contents">
      <Container>
        <Animate>
          <h2>Contents</h2>
        </Animate>
        <Lines />
        <List>
          {articles.map((article, index) => (
            <li key={index}>
              <Bullet>{index + 1}</Bullet>
              <Text>
                <h3>{article.title}</h3>
                <p>{article.standFirst.standFirst}</p>
              </Text>
            </li>
          ))}
        </List>
      </Container>
    </Section>
  )
}

export default TableOfContents
