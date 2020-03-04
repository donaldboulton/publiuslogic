import { css } from 'styled-components'

export * from './ButtonGroup'
export * from './Caption'
export * from './Grid'
export * from './PageBody'

export const fadeInOnHoverParent = parent => css`
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s;
  transition: .3s;
  pointer-events: none;
  ${parent}:hover & {
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  }
`
