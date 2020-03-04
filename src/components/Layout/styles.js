import { createGlobalStyle } from 'styled-components'
import mediaQuery, { screens } from '../../utils/mediaQuery'
import typography from '../../utils/typography'

const { phone, desktop } = screens
const { fonts, minFontSize, maxFontSize, minLineHeight, maxLineHeight } = typography

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    z-index: 0;
    position: static;
    hyphens: auto;
    font-family: ${fonts};
    font-size: ${minFontSize}em;
    line-height: ${minLineHeight}em;
    /* Fix very large font size in code blocks in iOS Safari (https://stackoverflow.com/a/3428477). */
    -webkit-text-size-adjust: 100%;
    ${mediaQuery.minPhone} {
      font-size: calc(${minFontSize}em + (${maxFontSize} - ${minFontSize}) * ((100vw - ${phone}em) / (${desktop} - ${phone})));
      line-height: calc(${minLineHeight}em + (${maxLineHeight} - ${minLineHeight}) * ((100vw - ${phone}em) / (${desktop} - ${phone})));
    }
    ${mediaQuery.minDesktop} {
      font-size: ${maxFontSize}em;
      line-height: ${maxLineHeight}em;
    }
    /* Ensure full height page even if unsufficient content. */
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
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
    grid-gap: 1em 2em;
    text-align: center;
    &.posts {
    grid-gap: 1em;
      p {
        margin: 0;
      }
      img {
        border: 1px solid lightgray;
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
  /* center image captions */
  .gatsby-resp-image-wrapper + em, img + em, .js-plotly-plot + p > em {
    margin-top: 0.3em;
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.95em;
  }
  blockquote {
    margin: 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table td, table th {
    border: 1px solid ${props => props.theme.lightGray};
    padding: 0.2em 0.6em;
  }
  tbody tr:nth-child(odd) {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  div.scroll {
    overflow: scroll;
    margin: 1em auto;
    border: 1px solid ${props => props.theme.lightGray};
    border-width: 0 1px;
    white-space: nowrap;
    table td, table th {
      :first-child {
        border-left: none;
      }
      :last-child {
        border-right: none;
      }
    }
  }
`
