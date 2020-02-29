import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    margin: 0;
    padding: 0;
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.5em;
  }

  /* https://github.com/gatsbyjs/gatsby/issues/15486 */
  .gatsby-resp-image-image {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default GlobalStyle

