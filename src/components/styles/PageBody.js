import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const PageBody = styled.main`
  margin: calc(2em + 2vh) 0;
  display: grid;
  grid-template-areas: "1fr 1fr content toc";
  grid-gap: 0 4vw;
  grid-template-columns: 1fr 1fr minmax(8em, ${props => props.theme.maxWidth}) 1fr 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: dense;
  > * {
    grid-column: ${props => props.cols || 3};
  }
  ${mediaQuery.minPhablet} {
    > p {
      text-align: justify;
    }
  }
`
export const PageWrapper = styled.div`
  display: block;
`

export const BodyWrapper = styled.div`
  grid-area: content;
  position: relative;
  margin: 0;
  text-align: left;
`

export const TocWrapper = styled.div`
  grid-area: toc;
  top: 40vh;
  right: -3vw;
  max-width: 25vw;
  flex-basis: 250px;
`
export const SocialGroupContainer = styled.div`
  padding: 2vh 3vw;
  color: ${props => props.theme.white};
  display: grid;
  align-items: center;
  grid-template-areas:
    'twitter'
    'social'
    'github';
  grid-gap: 4vh 3vw;
  ${mediaQuery.minPhone} {
    grid-template-areas:
      'social social'
      'twitter twitter'
      'github github';
  }
  ${mediaQuery.minTablet} {
    grid-template-areas: 'twitter social github';
  }
`

export const TwitterDiv = styled.div`
  grid-area: twitter;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  text-align: center;
  a {
    height: 1.1em;
    width: 1.1em;
  }
  img {
    top: 2vh;
    width: 164px;
    height: 164px;
    right: 50%;
    left: 50%;
    text-align: center;
    overflow: hidden;
  }
`
export const SocialDiv = styled.div`
  grid-area: social;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  text-align: center;
  a {
    height: 1.1em;
    width: 1.1em;
  }
  img {
    top: 2vh;
    width: 164px;
    height: 164px;
    right: 50%;
    left: 50%;
    text-align: center;
    overflow: hidden;
  }
`
export const GitHubDiv = styled.div`
  grid-area: github;
  display: grid;
  grid-auto-flow: column;
  text-align: center;
  a {
    height: 1.1em;
    width: 1.1em;
  }
  img {
    top: 2vh;
    width: 164px;
    height: 164px;
    right: 50%;
    left: 50%;
    align-items: center;
    overflow: hidden;
  }
`
