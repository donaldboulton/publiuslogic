import { animated } from 'react-spring'
import styled, { css } from 'styled-components'
import { ThMenu } from 'styled-icons/typicons/ThMenu'
import { NavLink } from '../styles'
import { Close as Cross } from 'styled-icons/material/Close'
import mediaQuery from '../../../utils/mediaQuery'

export { NavLink }
export { KeyboardArrowDown as ArrowDown } from 'styled-icons/material/KeyboardArrowDown'
export { KeyboardArrowUp as ArrowUp } from 'styled-icons/material/KeyboardArrowUp'

export const MobileNavDiv = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
  scrollbar-width: 10px;
  -webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  -webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d201c29),to(#100e17));
    background: linear-gradient(to bottom,#201c29,#100e17);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
  }
  -webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
  }
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  padding: 6vmin;
  font-size: 1.2em;
  right: 100%;
  display: grid;
  grid-gap: 1em;
  grid-auto-columns: max-content;
  grid-auto-rows: max-content;
  transform: translate(${props => (props.open ? `99%` : `0`)});
  transition: 0.3s;
  /* Needed to scroll past last element in case of overflow. */
  :after {
    content: '';
    height: 1em;
  }
`

export const Item = styled.div`
  a {
    color: white;
  }
  /* Target arrow icons prefixing nav links with children. */
  svg:first-child {
    width: 1em;
    margin-right: 0.3em;
    cursor: pointer;
    vertical-align: -0.1em;
  }
`

export const Children = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 0.5em;
  padding-left: 0.8em;
  border-left: thin dashed white;
  overflow: hidden;
  padding-bottom: ${props => props.open && `0.6em`};
  > div {
    margin-top: 0.6em;
    display: grid;
    grid-gap: 0.6em;
  }
`

const openerCss = css`
  z-index: 2;
  position: fixed;
  bottom: 5vh;
  left: 0;
  padding: 0.5em 0.6em 0.5em 0.3em;
  background: #1d1d1d;
  border: 2px solid gray;
  color: white;
  border-radius: 0 50% 50% 0;
  transform: translate(${props => (props.open ? `-100%` : 0)});
`

export const NavToggle = styled(Cross).attrs(props => ({
  as: props.opener && ThMenu,
  size: props.opener ? `1.5em` : `1.9em`,
}))`
  color: ${({ theme, opener }) => (opener ? theme.textColor : `white`)};
  transition: 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  ${mediaQuery.minLaptop} {
    display: none;
  }
  ${props => props.opener && openerCss};
`

export const ControlsDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  border-bottom: 1px solid;
  padding-bottom: 0.3em;
  align-items: center;
  justify-content: space-between;
`
