import { Link } from 'gatsby'
import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const HeaderContainer = styled.header`
  background: ${props => props.theme.darkBg};
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-gap: 2vw;
  z-index: 2;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  grid-template-areas: 'title nav toggle tags login search';
  grid-template-columns: auto 1fr auto auto auto auto;
  padding: 2vmin 3vmin;
  color: white;
  font-size: 1.2em;
  ${mediaQuery.minPhablet} {
    justify-items: start;
    grid-template-areas: 'title nav toggle search';
  }
`

export const Logo = styled(Link)`
  grid-area: title;
  transform: scale(1, 0.85);
  color: inherit;
`
