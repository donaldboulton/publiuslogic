import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import NetlifyIdentityWidget from '../IdentityWidget'
import { Blog, Sitemap, PeopleCarry } from 'styled-icons/fa-solid/'
import { Images, FileAlt, AddressCard } from 'styled-icons/fa-regular'

const StyledBurgerMenu = styled.div`
    .bm-item {
        text-align: left;
        background: transparent important
        display: inline-block;
        text-decoration: none;
        margin-bottom: 2vh;
        color: ${props => props.theme.lightBg};
        transition: color 0.2s;
    }
    .bm-item:hover {
        color: ${props => props.theme.lightestGray};
    }
    .bm-burger-button {
        position: fixed;
        margin-left: 5em;
        padding-left: 10px;
        width: 30px;
        height: 26px;
        right: 2vw;
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
    .bm-menu {
        background: rgba(0, 0, 0, 0.3);
        padding: 2.5em 1.5em 0;
        font-size: 1.1em;
    }
    .bm-morph-shape {
        fill: #373a47;
    }
    .bm-item-list {
        color: #b8b7ad;
        background: transparent !important
    }
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }
`

export default props => {
  return (
    <StyledBurgerMenu>
      <Menu right {...props}>
        <div className='menu-item' id='login'>
          <NetlifyIdentityWidget />
        </div>
        <a className='menu-item' href='/blog' itemProp='url'>
          <span itemProp='name'><Blog size='1em' />&nbsp;Blog</span>
        </a>
        <a className='menu-item' href='/about' itemProp='url'>
          <span itemProp='name'><AddressCard size='1em' />&nbsp;About</span>
        </a>
        <a className='menu-item' href='/contact' itemProp='url'>
          <span itemProp='name'><PeopleCarry size='1em' />&nbsp;Contact</span>
        </a>
        <a className='menu-item' href='/photos' itemProp='url'>
          <span itemProp='name'><Images size='1em' />&nbsp;Gallery</span>
        </a>
        <a className='menu-item' href='/sitemap' itemProp='url'>
          <span itemProp='name'><Sitemap size='1em' />&nbsp;Sitemap</span>
        </a>
        <h4>Gatsby Posts</h4>
        <a className='menu-item' href='/blog/gatsby-netlify-no-plugins' itemProp='url'>
          <span itemProp='name'><FileAlt size='1em' />&nbsp;Netlify No Plugins</span>
        </a>
        <a className='menu-item' href='/blog/gatsby-lightgallery-cloudinary' itemProp='url'>
          <span itemProp='name'><FileAlt size='1em' />&nbsp;LightGallery Cloudinary</span>
        </a>
        <h4 className=''>Common Sense</h4>
        <a className='menu-item' href='/blog/earths-magnetic-flux' itemProp='url'>
          <span itemProp='name'><FileAlt size='1em' />&nbsp;Magnetic Flux</span>
        </a>
      </Menu>
    </StyledBurgerMenu>
  )
}