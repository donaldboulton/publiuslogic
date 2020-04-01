import styled, { css } from 'styled-components'
import { PurchaseTag } from '@styled-icons/boxicons-solid/PurchaseTag'
import { Close as Cross } from '@styled-icons/material/Close'
import mediaQuery from '../../utils/mediaQuery'

const openTagsDiv = css`
  background: ${props => props.theme.black};
  color: ${props => props.theme.textColor};
  padding: 0.5em 0.5em;
  border-radius: 0.5em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  border: 1px solid ${props => props.theme.textColor};
`

export const TagsDiv = styled.div`
  grid-column-start: toc-start;
  grid-column-end: toc-end;
  padding: 1vmin;
  height: max-content;
  max-height: 85vh;
  border-radius: 4px;
  z-index: 3;
  line-height: 2em;
  margin: .2em;
  min-width: 20em;
  width: 165px;
  background: ${props => props.theme.footerBg};
  overscroll-behavior: none;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  border: thin ${props => props.theme.black};
  overflow-x: hidden;
  overflow-y: hidden;
  ${mediaQuery.maxPhablet} {
    position: fixed;
    bottom: 1em;
    background: ${props => props.theme.footerBg};
    color: ${props => props.theme.textColor};
    left: 1em;
    ${props => !props.open && `height: 0;`};
    ${props => props.open && openTagsDiv};
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
    background: ${props => props.theme.footerBg};
    color: ${props => props.theme.textColor};
  }
  nav {
    max-height: 70vh;
    overflow-x: hidden;
  }
  .nav-scroll {
    overflow-y: auto;
    scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
    scrollbar-width: 10px;
    overflow-x: hidden;
  }
  .nav-scroll::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .nav-scroll::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d201c29),to(#100e17));
    background: linear-gradient(to bottom,#201c29,#100e17);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
  }
  .nav-scroll::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
    border-bottom: 10px;
    border-top: 10px;
  }
`

export const TagsTitle = styled.h3`
  margin: 0.2em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.textColor};
  border-bottom: thin ${props => props.theme.darkGray};
`

export const TagsLink = styled.a`
  color: ${({ theme, active }) => (active ? theme.activeLinks : theme.activeLinks)};
  font-weight: ${props => props.active && `bold`};
  display: block;
  margin-left: ${props => props.depth + `em`};
  border-top: ${props =>
    props.depth === 0 && `1px solid ` + props.theme.textColor};
`

export const TagIcon = styled(PurchaseTag)`
  width: 1.3em;
  height: 1.3em;
  margin-right: 0.2em;
  color: ${props => props.theme.textColor};
`

const openedCss = css`
  position: fixed;
  z-index: 25;
  bottom: calc(5vh + 6em);
  ${mediaQuery.minLaptop} {
    bottom: calc(3vh + 6em);
  }
  left: 0;
  padding: 0.5em 0.6em 0.5em 0.3em;
  background: ${props => props.theme.black};
  color: ${props => props.theme.textColor};
  border: 2px solid gray;
  border-radius: 0 50% 50% 0;
  transform: translate(${props => (props.open ? `-100%` : 0)});
`

const closedCss = css`
  margin-left: 1em;
  border: 1px solid gray;
  border-radius: 50%;
  background: ${props => props.theme.black};
  color: ${props => props.theme.textColor};
`

export const TagsToggle = styled(Cross).attrs(props => ({
  as: props.opener && PurchaseTag,
  size: props.size || `1.6em`,
}))`
  z-index: 2;
  transition: 0.3s;
  background: ${props => props.theme.black};
  color: ${props => props.theme.textColor};
  justify-self: end;
  :hover {
    transform: scale(1.1);
  }
  ${mediaQuery.minLaptop} {
    display: none;
  }
  ${props => (props.opener ? openedCss : closedCss)};
`