import styled, { css } from 'styled-components'
import { BookContent } from 'styled-icons/boxicons-regular/BookContent'
import { Close as Cross } from 'styled-icons/material/Close'
import mediaQuery from '../../utils/mediaQuery'

const openTocDiv = css`
  background: #1d1d1d;
  color: white;
  padding: 0.7em 1.2em;
  border-radius: 0.5em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  border: 1px solid white;
`

export const TocDiv = styled.div`
  height: max-content;
  max-height: 85vh;
  border-radius: 4px;
  z-index: 3;
  line-height: 2em;
  right: 1em;
  margin: .2em;
  min-width: 20em;
  overscroll-behavior: none;
  overflow-x: hidden;
  overflow-y: hidden;
  nav {
    max-height: 83vh;
    overflow-x: hidden;
  }
  .linktoc {
    overflow-y: auto;
    scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
    scrollbar-width: 10px;
    overflow-x: hidden;
  }
  .linktoc::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .linktoc::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d201c29),to(#100e17));
    background: linear-gradient(to bottom,#201c29,#100e17);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
  }
  .linktoc::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
  }
  ${mediaQuery.maxPhablet} {
    position: fixed;
    bottom: 2em;
    background: #1d1d1d;
    color: white;
    left: 1em;
    ${props => !props.open && `height: 0;`};
    ${props => props.open && openTocDiv};
    visibility: ${props => (props.open ? `visible` : `hidden`)};
    opacity: ${props => (props.open ? 1 : 0)};
    transition: 0.3s;
  }
  ${mediaQuery.minPhablet} {
    font-size: 0.85em;
    grid-column: 4 / -1;
    position: -webkit-sticky;
    position: sticky;
    top: 2em;
  }
`

export const TocTitle = styled.h3`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: white;
`

export const TocLink = styled.a`
  color: ${({ theme, active }) => (active ? theme.activeLinks : theme.activeLinks)};
  font-weight: ${props => props.active && `bold`};
  display: block;
  margin-left: ${props => props.depth + `em`};
  border-top: ${props =>
    props.depth === 0 && `1px solid ` + props.theme.white};
`

export const TocIcon = styled(BookContent)`
  width: 1em;
  margin-right: 0.2em;
  color: ${props => props.theme.white};
`

const openedCss = css`
  position: fixed;
  bottom: calc(1vh + 4em);
  ${mediaQuery.minPhablet} {
    bottom: calc(1vh + 1em);
  }
  left: 0;
  padding: 0.5em 0.6em 0.5em 0.3em;
  background: #1d1d1d;
  color: white;
  border: 2px solid gray;
  border-radius: 0 50% 50% 0;
  transform: translate(${props => (props.open ? `-100%` : 0)});
`

const closedCss = css`
  margin-left: 1em;
  border: 1px solid gray;
  border-radius: 50%;
  background: #1d1d1d;
  color: white;
`

export const TocToggle = styled(Cross).attrs(props => ({
  as: props.opener && BookContent,
  size: props.opener ? `1.5em` : `1.9em`,
}))`
  z-index: 2;
  transition: 0.3s;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  justify-self: end;
  :hover {
    transform: scale(1.1);
  }
  ${mediaQuery.minLaptop} {
    display: none;
  }
  ${props => (props.opener ? openedCss : closedCss)};
`