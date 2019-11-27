import { Link } from 'gatsby'
import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const HeaderContainer = styled.nav`
  grid-area: nav;
  background: ${props => props.theme.darkBg};
  display: grid;
  grid-gap: 3vw;
  z-index: 2;
  justify-items: start;
  align-items: left;
  justify-content: start;
  grid-template-areas: 'nav logo title toggle search';
  grid-template-columns: auto 1fr auto auto;
  padding: 2vmin 3vmin;
  top: 0;
  right: 0;
  left: 0;
  color: white;
  font-size: 1.2em;
  ${mediaQuery.minPhablet} {
    justify-items: start;
    grid-template-areas: 'nav logo title toggle search';
  }
`
export const Logo = styled(Link)`
  grid-area: logo;
  transform: scale(1, 0.85);
  color: inherit;
`
export const Title = styled.title`
  grid-area: title;
  font-size: 3em;
  font-family: 'Kaushan-script', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background: radial-gradient(
    circle farthest-corner at center center,
    #8e0436,
    #d64000
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`