import { createGlobalStyle } from 'styled-components'
import mediaQuery, { screens } from '../../utils/mediaQuery'
import typography from '../../utils/typography'

const { phone, desktop } = screens
const { fonts, minFontSize, maxFontSize, minLineHeight, maxLineHeight } = typography

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
  body {
    margin: 0;
    z-index: 0;
    hyphens: auto;
    overflow-x: hidden;
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
  header,
  footer {
    grid-column: 1 / span 2;
  }
  .content figure {
    margin-left: 2em;
    margin-right: 2em;
    text-align: center;
  }
  .field.has-addons {
    display: flex;
    justify-content: flex-start;
  }
  .tags:last-child {
    margin-bottom: -.5rem;
  }
  .tags {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .tags.has-addons .tag:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .tags.has-addons .tag {
    margin-right: -1px !important;
  }
  .tags.has-addons .tag:not(:first-child) {
    margin-left: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .tags .tag:not(:last-child) {
    margin-right: .5rem;
  }
  .tag:not(body) {
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    font-size: .75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    white-space: nowrap;
  }
  .tag:not(body).is-dark {
    background-color: #363636;
    color: #fff;
  }
  .field.is-grouped {
    display: flex;
    justify-content: flex-start;
  }
  .field.is-grouped.is-grouped-multiline>.control:last-child, .field.is-grouped.is-grouped-multiline>.control:not(:last-child) {
    margin-bottom: .75rem;
  }
  .field.is-grouped.is-grouped-multiline {
    flex-wrap: wrap;
  }
  .field.is-grouped>.control:not(:last-child) {
    margin-bottom: 0;
    margin-right: .75rem;
  }
  .field.is-grouped>.control {
    flex-shrink: 0;
  }
  .card, .control {
    position: relative;
  }
  .control {
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    text-align: left;
  }
  .sticky {
    position: sticky;
    position: -webkit-sticky;
    top: 40vh;
    width: 100%;
  }
  .sticky + .item-d {
    padding-top: 22vh;
  }
  .footer-icon {
    height: 1.5rem;
    width: 1.5rem;
  }
  .user-icon {
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    margin-top: 6px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
    grid-gap: 1em 2em;
    text-align: center;
    &.div {
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
