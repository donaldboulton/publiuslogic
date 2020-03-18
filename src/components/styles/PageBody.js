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
