import React from "react"
import styled from "styled-components"

import Container from "../layout/container"

import Lines from "../../assets/lines.svg"

const Section = styled.section`
  margin: 4.75rem 0;

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

const TableOfContents = () => {
  return (
    <Section id="table-of-contents">
      <Container>
        <h2>Contents</h2>
        <Lines />
        <List>
          <li>
            <Bullet>1</Bullet>
            <Text>
              <h3>Burnout is now a hot business issue</h3>
              <p>
                Startup entrepreneurs are at risk of taking on too much and
                ending up suffering burnout, unless they learn how to take the
                pressure off
              </p>
            </Text>
          </li>
          <li>
            <Bullet>2</Bullet>
            <Text>
              <h3>Burnout is now a hot business issue</h3>
              <p>
                Startup entrepreneurs are at risk of taking on too much and
                ending up suffering burnout, unless they learn how to take the
                pressure off
              </p>
            </Text>
          </li>
          <li>
            <Bullet>3</Bullet>
            <Text>
              <h3>Burnout is now a hot business issue</h3>
              <p>
                Startup entrepreneurs are at risk of taking on too much and
                ending up suffering burnout, unless they learn how to take the
                pressure off
              </p>
            </Text>
          </li>
          <li>
            <Bullet>4</Bullet>
            <Text>
              <h3>Burnout is now a hot business issue</h3>
              <p>
                Startup entrepreneurs are at risk of taking on too much and
                ending up suffering burnout, unless they learn how to take the
                pressure off
              </p>
            </Text>
          </li>
          <li>
            <Bullet>5</Bullet>
            <Text>
              <h3>Burnout is now a hot business issue</h3>
              <p>
                Startup entrepreneurs are at risk of taking on too much and
                ending up suffering burnout, unless they learn how to take the
                pressure off
              </p>
            </Text>
          </li>
        </List>
      </Container>
    </Section>
  )
}

export default TableOfContents
