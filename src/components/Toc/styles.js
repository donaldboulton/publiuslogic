import styled, { css } from 'styled-components'
import { Close as Cross } from 'styled-icons/material/Close'
import { BookContent } from 'styled-icons/boxicons-regular/BookContent'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktopL: '2560px',
  desktop: '1960px',
  laptop: '1024px',
  tablet: '768px',
  mobile: '320px',
})

const openTocDiv = css`
  background: ${props => props.theme.background};
  color: ${props => props.theme.textColor};
  padding: 0.7em 1.2em;
  border-radius: 0.5em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  border: 1px solid ${props => props.theme.borderColor};
`
export const TocDiv = styled.div`
  height: max-content;
  max-height: 80vh;
  overflow-y: scroll;
  z-index: 4;
  line-height: 2em;
  -webkit-overflow-scrolling: touch;
  right: 1em;
  nav {
    max-height: 78vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  ${customMedia.lessThan('laptop')} {
    max-width: 16em;
    position: fixed;
    bottom: 1em;
    left: 1em;
    ${props => !props.open && `height: 0;`};
    ${props => props.open && openTocDiv};
    visibility: ${props => (props.open ? `visible` : `hidden`)};
    opacity: ${props => (props.open ? 1 : 0)};
    transition: ${props => props.theme.shortTrans};
  }
  ${customMedia.lessThan('tablet')} {
    max-width: 15em;
    font-size: 0.85em;
    grid-column: 4 / -1;
    position: sticky;
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
  color: ${({ theme, active }) => (active ? theme.linkColor : theme.textColor)};
  font-weight: ${props => props.active && `bold`};
  display: block;
  margin-left: ${props => props.depth + `em`};
  border-top: ${props =>
    props.depth === 0 && `1px solid ` + props.theme.lighterGray};
`

export const TocIcon = styled(BookContent)`
  width: 1em;
  margin-right: 0.2em;
`

const openedCss = css`
  position: fixed;
  bottom: 10vh;
  ${customMedia.lessThan('tablet')} {
    bottom: 2vh;
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
  transition: ${props => props.theme.shortTrans};
  justify-self: end;
  :hover {
    transform: scale(1.1);
  }
  ${customMedia.lessThan('laptop')} {
    display: none;
  }
  ${props => (props.opener ? openedCss : closedCss)};
  `
