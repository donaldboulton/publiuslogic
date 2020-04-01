import styled from 'styled-components'
import mediaQuery from './../../utils/mediaQuery'

export const AdsContainer = styled.div`
  padding: 2vh 3vw;
  color: ${props => props.theme.textColor};
  display: grid;
  align-items: center;
  grid-template-areas:
    'slack'
    'subscriptions'
    'csstricks';
  grid-gap: 4vh 3vw;
  ${mediaQuery.minPhone} {
    grid-template-areas:
      'slack subscriptions'
      'csstricks csstricks';
  }
  ${mediaQuery.minTablet} {
    grid-template-areas: 'slack subscriptions csstricks';
  }
`

export const SlackDiv = styled.div`
  grid-area: slack;
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
export const SubscriptionsDiv = styled.div`
  grid-area: subscriptions;
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
export const CssTricksDiv = styled.div`
  grid-area: csstricks;
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