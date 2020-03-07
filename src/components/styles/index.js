import { css } from 'styled-components'

export * from './Button'
export * from './Caption'
export * from './Grid'
export * from './PageBody'
export * from './BorderBox'

export const fadeInOnHoverParent = parent => css`
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all .6s ease-in-out;
  -moz-transition: all .6s ease-in-out;
  transition: 0.6s ease-in-out;
  pointer-events: none;
  ${parent}:hover & {
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  }
`
