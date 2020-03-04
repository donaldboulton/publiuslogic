import { Link } from 'gatsby'
import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const HeaderContainer = styled.header`
  top: 0;
  width: 100vw;
  display: grid;
  grid-gap: 2vw;
  z-index: 2;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  grid-template-areas: 'title nav login toggle search';
  grid-template-columns: auto 1fr auto auto auto auto;
  padding: 2vmin 3vmin;
  background: #1d1d1d;
  color: white;
  font-size: 1.2em;
  ${mediaQuery.minPhablet} {
    justify-items: start;
    grid-template-areas: 'title login toggle search';
  }
`

export const Logo = styled(Link)`
  grid-area: title;
  transform: scale(1, 0.85);
  color: inherit;
`
