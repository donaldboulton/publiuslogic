import React from 'react'
import { Link } from 'gatsby'
import { stack as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Login from '../IdentityWidget/index'
import Search from '../Search'
import { Blog, Sitemap, PeopleCarry } from 'styled-icons/fa-solid/'
import { Images, FileAlt, AddressCard } from 'styled-icons/fa-regular'
import { Globe } from 'styled-icons/boxicons-regular/'

const StyledBurgerMenu = styled.div`
  .bm-item {
    text-align: left;
    background: transparent;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 2vh;
    transition: color 0.2s;
  }
  .bm-item:hover {
    color: ${props => props.theme.hoveredLinks};
  }
  .bm-item:active {
    color: ${props => props.theme.activeLinks};
  }
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 26px;
    left: 1.4vw;
    top: 2.3vh;
  }
  .bm-burger-bars {
    background: ${props => props.theme.lightBg};
  }
  .bm-cross-button {
    height: 30px;
    width: 15px;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: ${props => props.theme.links};
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
  .bm-item-list::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d201c29),to(#100e17));
    background: linear-gradient(to bottom,#201c29,#100e17);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
  }
  .bm-item-list::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
  }
  ul {
    max-height: 78vh;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.59);
  }
`
const TableOfContents = styled.div`
  ul {
    textIndent: -1em hanging;
  }
  li {
    margin-bottom: 1em;
  }
  a {
    color: ${props => props.theme.links};
  }
  a:hover {
     color: ${props => props.theme.hoveredLinks};
  }
  a:active {
     color: ${props => props.theme.activeLinks};
  }
`
const MenuTitle = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.black};
`
const MenuIcon = styled(Globe)`
  width: 1em;
  margin-right: 0.2em;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`

export default props => {
  return (
    <StyledBurgerMenu>
      <Menu left {...props}>
        <MenuTitle>
          <MenuIcon />
            | Site Contents
        </MenuTitle>
        <TableOfContents>
          <ul className='linktoc'>
            <li className='menu-item' id='search'>
              <Search />
            </li>
            <li className='menu-item' id='login'>
              <span itemProp='name'><Login /></span>
            </li>
            <li>
              <Link className='menu-item' to='/blog' itemProp='url'>
                <span itemProp='name'>Blog&nbsp;<Blog size='1em' /></span>
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/about' itemProp='url'>
                <span itemProp='name'>About&nbsp;<AddressCard size='1em' /></span>
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/contact' itemProp='url'>
                <span itemProp='name'>Contact&nbsp;<PeopleCarry size='1em' /></span>
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/photos' itemProp='url'>
                <span itemProp='name'>Gallery&nbsp;<Images size='1em' /></span>
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/sitemap' itemProp='url'>
                <span itemProp='name'>Sitemap&nbsp;<Sitemap size='1em' /></span>
              </Link>
            </li>
            <li>
              <h4 className='h4'>Featured Posts</h4>
            </li>
            <div className='navbar-divider' />
            <li>
              <Link className='menu-item' to='/blog/gatsby-crud-netlify-fauna' itemProp='url'>
                <span itemProp='name'>Gatsby Netlify FaunaDB&nbsp;<FileAlt size='1em' /></span>
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/blog/gatsby-netlify-no-plugins' itemProp='url'>
                <span itemProp='name'>Netlify No Plugins&nbsp;<FileAlt size='1em' /></span>
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/blog/js-media-queries' itemProp='url'>
                <span itemProp='name'>JS mediaQueries&nbsp;<FileAlt size='1em' /></span>
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/blog/react-hooks-masonry' itemProp='url'>
                <span itemProp='name'>React Hooks Masonry&nbsp;<FileAlt size='1em' /></span>
              </Link>
            </li>
            <li>
              <h4 className='h4'>Common Sense Posts</h4>
            </li>
            <li>
              <div className='navbar-divider' />
            </li>
            <li>
              <Link className='menu-item' to='/blog/earths-magnetic-flux' itemProp='url'>
                <span itemProp='name'>Magnetic Flux&nbsp;<FileAlt size='1em' /></span>
              </Link>
            </li>
          </ul>
        </TableOfContents>
      </Menu>
    </StyledBurgerMenu>
  )
}
