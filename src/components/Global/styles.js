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
    /* below rules enable dark mode */
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
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
      color: ${props => props.theme.darkerOrange};
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
        border: 1px solid #1d1d1d;
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
  .button {
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.2))) !important;
    background: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2)) !important;
    background-color: #d64000 !important;
    border-color: transparent !important;
    border-radius: ${props => props.theme.smallBorderRadius};
    padding: 0.3em 0.6em;
    transition: ${props => props.theme.shortTrans};
    display: flex;
    align-items: center;
    width: max-content;
    margin: 0 auto;
    :hover {
      background: ${props => props.theme.darkerOrange};
    }
  }
  /* center image captions */
  .gatsby-resp-image-wrapper + em {
    margin-top: 0.3em;
    display: block;
    text-align: center;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.95em;
  }
  blockquote {
    border-left: 5px solid ${props => props.theme.darkerOrange};
    background-color: #1d1d1d !important;
    color: #dbdbdb !important;
    padding: 1.25em 1.5em;
    margin: 0;
  }
  .modali-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
  }
  .modali-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    outline: 0;
  }
  .modali {
    z-index: 100;
    background: #363636 !important;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    pointer-events: none;
  }
  .modali-content {
    pointer-events: auto;
  }
  .modali-header {
    display: flex;
    align-items: flex-start;
    padding: 1.5rem 1.5rem .5rem 1.5rem;
  }
  .modali-header .modali-title {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .modali-close-button {
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.2)));
    background: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2));
    background-color: #d64000;
    border: thin solid rgba(0,0,0,.2);
    border-radius: 50px;
    padding: 1rem;
    margin: -3rem -1rem -3rem auto;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: .5;
    color: #000000;
    cursor: pointer;
    border: none;
    outline: 0 !important;
    top: 20px;
  }
  .modali-close-button:hover {
    opacity: .8;
    text-decoration: none;
  }

  .modali-body {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #1d1d1d !important;
    color: #ffffff !important;
    border-radius: .3rem;
  }
  .modali-body-style {
    padding: .5rem 1.5rem;
  }
  .modali-footer {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: flex-end;
  }
  .modali-open {
    overflow: hidden;
  }
  .modali-size-regular {
    max-width: 500px;
  }
  
  .modali-size-large {
    max-width: 800px;
  }
  .modali-button {
    font-size: .9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    padding: .3rem 1rem;
    margin-left: .5rem;
  }
  .modali-button-cancel {
    background: #fff;
    color: #000;
  }
  .modali-button-destructive {
    background: #FF1654;
    color: #fff;
  }
  .modali-button-default {
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.2)));
    background: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2));
    background-color: #d64000;
    border-color: transparent;
    color: #cccccc;
  }
  .modali-animated {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .modali-animation-fade-in {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 30%, 0);
      transform: translate3d(0, 30%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 30%, 0);
      transform: translate3d(0, 30%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
  }
}
`
