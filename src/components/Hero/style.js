import { css } from 'styled-components'

export const media = {
  ws: (...args) => css`
    @media (max-width: 30em) {
      ${css(...args)}
    }
  `,
  xs: (...args) => css`
    @media (max-width: 40em) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: 60em) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: 70em) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (min-width: 100em) {
      ${css(...args)}
    }
  `,
}
