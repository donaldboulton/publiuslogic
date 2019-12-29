import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktopL: '2560px',
  desktop: '1960px',
  laptop: '1024px',
  tablet: '768px',
  mobileL: '720px',
  mobile: '320px',
})


export const TocDiv = styled.div`
  height: max-content;
  max-height: 80vh;
  overflow-y: scroll;
  z-index: 1;
  line-height: 2.2em;
  -webkit-overflow-scrolling: touch;
  nav {
    max-height: 78vh;
    overflow-y: scroll;
    scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
    scrollbar-width: 10px;
    overflow-x: hidden;
  }
  nav::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  nav::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d201c29),to(#100e17));
    background: linear-gradient(to bottom,#201c29,#100e17);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
  }
  nav::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
  }
  ${customMedia.lessThan('tablet')} {
    max-width: 16em;
    bottom: 1em;
    left: 1em;
    transition: ${props => props.theme.shortTrans};
  }

  ${customMedia.lessThan('laptop')} {
    max-width: 15em;
    font-size: 0.85em;
    grid-column: 4 / -1;
    top: 2em;
    right: 2em;
  }
`
export const TocLink = styled.a`
  color: ${props => props.theme.lightGray};
  border-top: ${props =>
    props.depth === 0 && `1px solid ` + props.theme.lighterGray};
`