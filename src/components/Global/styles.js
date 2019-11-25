import { createGlobalStyle } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'
import typography from '../../utils/typography'

const { phone, desktop } = mediaQuery.screens
const {
  fonts,
  minFontSize,
  maxFontSize,
  minLineHeight,
  maxLineHeight,
} = typography

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    hyphens: auto;
    font-family: ${fonts};
    font-size: ${minFontSize}em;
    line-height: ${minLineHeight}em;
    ${mediaQuery.minPhone} {
      font-size: calc(${minFontSize}em + (${maxFontSize} - ${minFontSize}) * ((100vw - ${phone}em) / (${desktop} - ${phone})));
      line-height: calc(${minLineHeight}em + (${maxLineHeight} - ${minLineHeight}) * ((100vw - ${phone}em) / (${desktop} - ${phone})));
    }
    ${mediaQuery.minDesktop} {
      font-size: ${maxFontSize}em;
      line-height: ${maxLineHeight}em;
    }
    /* ensure full height page even if unsufficient content */
    div[role="group"][tabindex] {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      main {
        flex: 1;
      }
    }
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: initial;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.darkOrange};
    :hover {
      color: ${props => props.theme.burntOrange};
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
    grid-gap: 1em 2em;
    text-align: center;
    &.docs {
    grid-gap: 1em;
      p {
        margin: 0;
      }
      img {
        border: 1px solid ${props => props.theme.darkGray};
        border-radius: ${props => props.theme.smallBorderRadius};
        overflow: hidden;
      }
    }
  }
  .button {
    border-radius: ${props => props.theme.smallBorderRadius};
    padding: 0.3em 0.6em;
    transition: ${props => props.theme.shortTrans};
    display: flex;
    align-items: center;
    width: max-content;
    margin: 0 auto;
    :hover {
      background: ${props => props.theme.burntOrange};
    }
  }
  /* center image captions */
  .gatsby-resp-image-wrapper + em {
    margin-top: 0.3em;
    display: block;
    text-align: center;
  }
  blockquote {
    border-left: 5px solid ${props => props.theme.burntOrange};
    background: rgba(0, 0, 0, 0.03);
    padding: 0.1em 0 0.1em 1em;
    margin: 0;
  }
`
