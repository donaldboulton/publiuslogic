import { css } from 'styled-components'

export * from './Button'
export * from './Caption'
export * from './Grid'
export * from './PageBody'
export * from './BorderBox'

export const fadeInOnHoverParent = parent => css`
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all .6s;
  -moz-transition: all .6s;
  transition: 0.6s;
  pointer-events: none;
  ${parent}:hover & {
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  }
`
