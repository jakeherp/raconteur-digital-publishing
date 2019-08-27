import React from "react"
import styled from "styled-components"

import Container from "../layout/container"

import Lines from "../../assets/lines.svg"
import Quotes from "../../assets/quotes.svg"

const Header = styled.header`
  display: block;
  width: 100%;
  height: 600px;
  background: grey;
`

const Headline = styled.div`
  margin: -1.5em 0 2rem;
  max-width: 600px;

  h1 {
    font-size: 60px;
    line-height: 1.1;
    color: #fff;
    display: inline;
    background: ${props => props.theme.colors.primary};
    padding: 0.25rem 0.5rem;
  }
`

const StandFirst = styled.p`
  font-size: 1.8rem;
  line-height: 1.25;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
  border-left: 1px solid #000;

  aside {
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
      }
    }
  }

  p,
  strong,
  h2 {
    padding: 0 1rem;
  }
`

const Author = styled.strong`
  font-family: ${props => props.theme.fonts.apercu};
`

const Dropcap = styled.span`
  font-size: 4rem;
  font-weight: bold;
  float: left;
  line-height: 4rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 0.5rem;
`

const Quote = styled.blockquote`
  float: left;
  margin: 1rem 1rem 1rem 0;
  position: relative;
  background: #fff;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  box-sizing: content-box;
  padding: 2rem;
  width: 345px;
  margin-left: -4rem;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25rem;

  svg {
    position: absolute;
    top: -1.25rem;
    left: 0.5rem;
  }
`

const Short = styled.div`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  margin-left: -4rem;
  padding: 2rem 1rem;
  border-top: 5px solid #000;

  h2 {
    font-family: ${props => props.theme.fonts.apercu};
  }
  p {
    column-count: 2;
    font-family: ${props => props.theme.fonts.apercu};
    line-height: 1.7;
  }
`

const Article = () => {
  return (
    <article>
      <Header>image</Header>
      <Container>
        <Headline>
          <h1>Burnout is now a hot business issue</h1>
        </Headline>
        <StandFirst>
          Startup entrepreneurs are at risk of taking on too much and ending up
          suffering burnout, unless they learn how to take the pressure off
        </StandFirst>
        <Content>
          <div>
            <Author>Author Name</Author>
            <Lines />
            <p>
              <Dropcap>I</Dropcap>n 2010 Angela Armstrong, a high-flying
              leadership development consultant at Accenture, found herself
              literally ‘burnt out’. “It was classic biting off more than I
              could chew,” she recalls. “I had a big role but no balance. I
              crashed. I was off work for three months, and it took a further
              three months to complete my return.”
            </p>
            <p>
              Today Armstrong is a leading coach, the best-selling author of The
              Resilience Club, and a specialist in helping others, particularly
              SMEs and younger leaders, avoid the mistakes she made. And it’s a
              need that couldn’t be more prescient. In June the World Health
              Organisation [in its revised International Classification of
              Diseases], officially labeled burnout as an occupational
              phenomenon, defining it as ‘chronic workplace stress that has not
              successfully been managed’. It follows research last year by
              services firm, Advanced, amongst 500 small firms, which found a
              worrying 20% of SME bosses say they feel under pressure ‘all of
              the time’. It revealed 65% said they struggle to switch-off, while
              48% blamed ‘lack of time’ as the biggest contributor to this.
            </p>
            <p>
              “Younger entrepreneurs are particularly prone to burnout because
              they are more inexperienced, and need to suddenly acquire
              management skills rather than rely on being ‘ideas’ people,” says
              Armstrong.
              <Quote>
                <Quotes />
                Even amid a period of growth, we’ve been able to prove we can
                scale up while scaling back
              </Quote>
              Not only does she see leaders getting sucked into burnout,
              “wearing stress almost as a badge of honour,” but Jackie Furey,
              director of workplace consultancy Where Workplace Works, also
              argues they can feel there is no alternative: “SMEs genuinely do
              have to try harder to win clients and get onto procurement lists,”
              she says. “The pressure this creates is over-work, and bosses
              over-extending themselves. While we think of younger generations
              as being digital natives – and more used to being on their devices
              – the incremental impact of never being able to switch off hits
              the young just as hard as the old.”
            </p>
            <p>
              Factors seemingly in their control could be hiring in advance of
              growth, rather than heaping more work upon themselves, but even
              this can be a difficult ask. Research by the Centre for Economics
              and Business Research finds more than a quarter (27%) of SMEs are
              worried about how they’ll pay for a new hire, “Most SMEs won’t
              want to turn business away, even if they’re up to their eyeballs
              and pulling their hair out,” says Marianne Page, author of, Simple
              Logical Repeatable. “But hiring is scary. Without it though,
              stress levels rise and burnout becomes unavoidable.”
            </p>
            <Short>
              <h2>It’s hard to switch off in digital era </h2>
              <p>
                Although burnout doesn’t just hit the young, growing research
                indicates younger businesspeople are more likely to be
                susceptible to it and are experiencing it in greater numbers
                compared to earlier generations. Recent research by Gallup finds
                70% of millennials say they have experienced some degree of
                burnout, with 28% saying they are ‘very often’ or ‘always’ burnt
                out at work, compared with 21% of workers from previous
                generations. Some argue it’s yet more evidence of the ‘snowflake
                generation’ – a so-called cohort of workers supposedly less
                resilient to the stresses and strains regarded as normal by
                workers before them. But experts suggest this conclusion
                shouldn’t be automatically reached. “Young business owners often
                feel pressure to be high achievers, so they work at a 100mph, on
                constant over-drive, juggling the day-to-day pressures of
                running a successful organisation,” says Alex Arundale, group HR
                director, Advanced. Adds Sir Cary Cooper, professor of
                organisational psychology and health at the University of
                Manchester’s business school. “The digital era is young
                entrepreneurs’ own worse enemy. Leaders take their smartphones
                with them all the time and don’t hesitate to work while on
                holiday or when with family at night.”
              </p>
            </Short>
          </div>
          <aside>
            <h2>An incredibly dull title</h2>
            <nav>
              <ul>
                <li>
                  <span>1</span>
                  <span>Burnout is now a hot business issue</span>
                </li>
                <li>
                  <span>2</span>
                  <span>Burnout is now a hot business issue</span>
                </li>
                <li>
                  <span>3</span>
                  <span>Burnout is now a hot business issue</span>
                </li>
                <li>
                  <span>4</span>
                  <span>Burnout is now a hot business issue</span>
                </li>
                <li>
                  <span>5</span>
                  <span>Burnout is now a hot business issue</span>
                </li>
              </ul>
            </nav>
          </aside>
        </Content>
      </Container>
    </article>
  )
}

export default Article
