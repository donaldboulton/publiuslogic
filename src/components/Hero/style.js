import { css } from 'styled-components'

export const media = {
  phone: (...args) => css`
    @media (max-width: 30em) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 40em) {
      ${css(...args)}
    }
  `,
  netbook: (...args) => css`
    @media (max-width: 60em) {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    @media (max-width: 70em) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 100em) {
      ${css(...args)}
    }
  `,
}
