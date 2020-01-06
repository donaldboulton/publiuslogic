import styled from 'styled-components'
import { Table } from 'styled-icons/boxicons-regular/'

export const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  line-height: 2rem;
  margin: 0px;
  margin-top: 10px;
`
export const Rating = styled.div`
  font-size: 0.9em;
`
export const ArticleStyledTableMenu = styled.div` 
  .bm-item {
    text-align: left;
    background: transparent;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 2vh;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    transition: color 0.2s;
  }
  .bm-item:hover {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 26px;
    right: 1.4vw;
    top: 2.2vh;
  }
  .bm-burger-bars {
    background: ${props => props.theme.lightBg};  
  }
  .bm-cross-button {
    height: 30px;
    width: 15px;
    left: 8px !important;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-menu {
    background: rgba(0, 0, 0, 0.59);
    padding: 2.5em 1.5em 0;
    font-size: 1em;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
    background: transparent;
  }
  #linktoc {
    overflow-y: auto;
    scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
    scrollbar-width: 10px;
    overflow-x: hidden;
  }
  #linktoc::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  #linktoc::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d201c29),to(#100e17));
    background: linear-gradient(to bottom,#201c29,#100e17);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
  }
  #linktoc::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.59);
  }
  ul {
    max-height: 78vh;
  }
`
export const StyledTableMenu = styled.div` 
  .bm-item {
    text-align: left;
    background: transparent;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 2vh;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    transition: color 0.2s;
  }
  .bm-item:hover {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 26px;
    right: 1.4vw;
    top: 2.2vh;
  }
  .bm-burger-bars {
    background: ${props => props.theme.lightBg};  
  }
  .bm-cross-button {
    height: 30px;
    width: 15px;
    left: 8px !important;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-menu {
    background: rgba(0, 0, 0, 0.59);
    padding: 2.5em 1.5em 0;
    font-size: 1em;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
    background: transparent;
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
  .bm-overlay {
    background: rgba(0, 0, 0, 0.59);
  }
  ul {
    max-height: 78vh;
  }
`
export const TableOfContents = styled.div`
  ul {
    color: ${props => props.theme.white};
    textIndent: -1em hanging;
  }
  li {
    margin-bottom: 1em;
  }
  a {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  a:hover {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
`
export const HomeStyledh1 = styled.h1`
  display: inline-block;
  padding-top: 2em;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background-position: 50% 50%;
  text-align: center;
`
export const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.black};
  border-bottom: 1px solid ${props => props.theme.black};
`
export const TocIcon = styled(Table)`
  width: 1em;
  margin-right: 0.2em;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`
export const Time = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.white};
`
export const Date = styled.span`
  font-size: 0.9em;
  color: ${props => props.theme.white};
`
export const GithubButtons = styled.span`
  right: 2em;
  padding: 0.5em;
`
export const Pagination = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`
export const Meta = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`
export const ButtonDisabled = styled.div`
  background: transparent;
  padding: calc(.5em - 1px) .75em;
  border: thin ${props => props.theme.black};
  font-size: 0.9em;
`
export const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.white};
  }
`
export const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.white};
  }
`