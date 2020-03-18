import styled from 'styled-components'
import { Hotjar } from '@styled-icons/fa-brands/Hotjar'

import mediaQuery from '../../utils/mediaQuery'

export const HotJarDiv = styled.div`
  grid-column-start: toc-start;
  grid-column-end: toc-end;
  padding: 1vmin;
  height: max-content;
  max-height: 85vh;
  border-radius: 4px;
  z-index: 3;
  line-height: 2em;
  margin: .2em;
  min-width: 20em;
  width: 165px;
  overscroll-behavior: none;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  border: thin ${props => props.theme.black};
  overflow-x: hidden;
  overflow-y: hidden;
  ${mediaQuery.minPhablet} {
    font-size: 0.85em;
    transition: 0.3s;
  }
  ${mediaQuery.maxLaptop} {
    display: none;
  }
`

export const HotJarTitle = styled.h3`
  margin: 0.2em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.white}; 
  border-bottom: thin ${props => props.theme.white};
`

export const HotJarIcon = styled(Hotjar)`
  font-size: 1.1em;
  width: 1.1em;
  height: 1.1em;
  margin-right: 0.2em;
  color: ${props => props.theme.white};
`

export const Box = styled.div`
  padding: 1em;
  margin: 1.1em;
  border-radius: ${props => props.theme.mediumBorderRadius};
  border: 1px solid ${props => props.theme.black};
  background: radial-gradient(
    circle closest-corner at center 75px,
    ${props => props.theme.darkestGray},
    ${props => props.theme.black} 40%,
  ) no-repeat;
  text-align: center;
`