import React from 'react'
import styled, { css } from 'styled-components'
import { Algolia } from '@styled-icons/fa-brands/Algolia'
import { Search } from '@styled-icons/fa-solid/Search'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1.2em;
  color: white;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
  color: white;
`

const focus = css`
  background: ${props => props.theme.darkBg};
  color: white;
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: white;
    margin: 0 0.3em;
  }
`

const collapsed = css`
  width: 0;
  cursor: pointer;
  color: white;
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`

const expanded = css`
  background: ${props => props.theme.darkBg};
  color: white;
  width: 6em;
  border: 1px solid ${props => props.theme.links};
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: 0.3s;
  border-radius: ${props => props.theme.smallBorderRadius};
  ${props => (props.collapse ? collapsed : expanded)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  background: #1d1d1d;
  max-height: 80vh;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 25;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0 black;
  padding: 0.7em 1em 0.4em;
  border-radius: ${props => props.theme.smallBorderRadius};
  * {
    margin-top: 0;
  }
  > div {
    padding-top: 0.6em;
  }
  div + div {
    margin-top: 0.6em;
    width: 100%;
    border-bottom: thin #434343;
  }
  mark {
    color: ${props => props.theme.lighterBlue};
    background: ${props => props.theme.darkBg};
  }
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${props => props.theme.darkGray};
    h3 {
      color: white;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
      margin-bottom: 0.3em;
    }
  }
  * + header {
    padding-top: 1em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
  nav {
    grid-column: 1 / span 2;
    max-height: 70vh;
    width: 78vw;
    max-width: 28.5em;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .nav-scroll {
    overflow-y: auto;
    scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
    scrollbar-width: 10px;
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

export const PoweredBy = () => (
  <span css='font-size: 0.6em; text-align: end; padding: 0;'>
    Powered by{` `}
    <a href='https://algolia.com'>
      <Algolia size='1em' /> Algolia
    </a>
  </span>
)
