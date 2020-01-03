import styled, { css } from 'styled-components'
import { BookContent } from 'styled-icons/boxicons-regular/BookContent'
import { Close as Cross } from 'styled-icons/material/Close'
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
  z-index: 1;
  line-height: 2.2em;
  nav {
    max-height: 78vh;
    overflow-y: scroll;
    scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
    scrollbar-width: 10px;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
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

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
`
export const TocLink = styled.a`
  color: ${props => props.theme.lightGray};
  border-top: ${props =>
    props.depth === 0 && `1px solid ` + props.theme.lighterGray};
`

export const TocIcon = styled(BookContent)`
  width: 1em;
  margin-right: 0.2em;
`

const openedCss = css`
  position: fixed;
  bottom: calc(1vh + 4em);
  ${customMedia.lessThan('tablet')} {
    bottom: calc(1vh + 1em);
  }
  left: 0;
  padding: 0.5em 0.6em 0.5em 0.3em;
  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: 0 50% 50% 0;
  transform: translate(${props => (props.open ? `-100%` : 0)});
`

const closedCss = css`
  margin-left: 1em;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 50%;
`

export const TocToggle = styled(Cross).attrs(props => ({
  as: props.opener && BookContent,
  size: props.size || `1.6em`,
}))`
  z-index: 2;
  transition: 0.3s;
  justify-self: end;
  :hover {
    transform: scale(1.1);
  }
  ${customMedia.lessThan('laptop')} {
    display: none;
  }
  ${props => (props.opener ? openedCss : closedCss)};
`