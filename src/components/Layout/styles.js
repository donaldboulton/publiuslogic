import { createGlobalStyle } from 'styled-components'
import mediaQuery, { screens } from '../../utils/mediaQuery'
import typography from '../../utils/typography'

const { phone, desktop } = screens
const { fonts, minFontSize, maxFontSize, minLineHeight, maxLineHeight } = typography

export const GlobalStyle = createGlobalStyle`
 /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  :root {
    box-sizing: border-box;
  }

  body {
    margin: 0;
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
    &.docs {
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
  .item-a {
    grid-area: header;
  }
  .item-b {
    grid-area: post-cover;
  }
  .item-c {
    grid-area: main;
    justify-items: center;
  }
  .item-d {
    grid-area: sidebar;
    justify-items: end;
    align-content: start;
  }
  .item-e {
    grid-area: footer;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    justify-content: space-between;
    grid-template-areas: 
      "header header header"
      "post-cover post-cover post-cover"
      "main main sidebar"
      "footer footer footer";
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
    background: ${props => props.theme.accentBackground};
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
