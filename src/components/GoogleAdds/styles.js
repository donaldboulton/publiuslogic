import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const AddsDiv = styled.div`
z-index: 3;
line-height: 2em;
right: 1em;
margin: .2em;
min-width: 23em;
overscroll-behavior: none;
${mediaQuery.maxPhablet} {
    bottom: 1em;
    maxWidth: 16em;
    color: ${props => props.theme.white};
    left: 1em;
    transition: 0.3s;
  }
  ${mediaQuery.minPhablet} {
    font-size: 0.85em;
    top: 2em;
    width: 14em;
  }
`
