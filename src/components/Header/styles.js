import { Link } from 'gatsby'
import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const HeaderContainer = styled.header`
  background: ${props => props.theme.headerBg};
  display: grid;
  grid-gap: 3vw;
  z-index: 2;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  grid-template-areas: 'nav title toggle tags login';
  grid-template-columns: auto 1fr auto auto;
  padding: 2vmin 3vmin;
  color: white;
  font-size: 1.2em;
  ${mediaQuery.minPhablet} {
    justify-items: start;
    grid-template-areas: 'nav logo toggle tags login';
  }
`

export const Logo = styled(Link)`
  grid-area: logo;
  font-size: 2.4em;
  transform: scale(1, 0.85);
  color: inherit;
`
