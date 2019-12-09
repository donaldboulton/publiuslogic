import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import NetlifyIdentityWidget from '../IdentityWidget'
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
    left: 1.4vw;
    top: 2.2vh;
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
  .bm-menu {
    background: rgba(0, 0, 0, 0.3);
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
  .bm-overlay {
    background: rgba(0, 0, 0, 0.59);
  }
`

const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.black};
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
        <Title>
          <MenuIcon />
            | Site Contents
        </Title>
        <div className='menu-item' id='login'>
          <NetlifyIdentityWidget />
        </div>
        <a className='menu-item' href='/blog' itemProp='url'>
          <span itemProp='name'>Blog&nbsp;<Blog size='1em' /></span>
        </a>
        <a className='menu-item' href='/about' itemProp='url'>
          <span itemProp='name'>About&nbsp;<AddressCard size='1em' /></span>
        </a>
        <a className='menu-item' href='/contact' itemProp='url'>
          <span itemProp='name'>Contact&nbsp;<PeopleCarry size='1em' /></span>
        </a>
        <a className='menu-item' href='/photos' itemProp='url'>
          <span itemProp='name'>Gallery&nbsp;<Images size='1em' /></span>
        </a>
        <a className='menu-item' href='/sitemap' itemProp='url'>
          <span itemProp='name'>Sitemap&nbsp;<Sitemap size='1em' /></span>
        </a>
        <h4 className='h4'>Gatsby Posts</h4>
        <div className='navbar-divider' />
        <a className='menu-item' href='/blog/gatsby-netlify-no-plugins' itemProp='url'>
          <span itemProp='name'>Netlify No Plugins&nbsp;<FileAlt size='1em' /></span>
        </a>
        <a className='menu-item' href='/blog/gatsby-lightgallery-cloudinary' itemProp='url'>
          <span itemProp='name'>LightGallery Cloudinary&nbsp;<FileAlt size='1em' /></span>
        </a>
        <h4 className='h4'>Common Sense Posts</h4>
        <div className='navbar-divider' />
        <a className='menu-item' href='/blog/earths-magnetic-flux' itemProp='url'>
          <span itemProp='name'>Magnetic Flux&nbsp;<FileAlt size='1em' /></span>
        </a>
      </Menu>
    </StyledBurgerMenu>
  )
}
