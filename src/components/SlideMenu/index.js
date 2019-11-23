import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import styled from 'styled-components'

const StyledBurgerMenu = styled.div`
    .bm-item {
        text-align:center;  
        display: inline-block;
        text-decoration: none;
        margin-bottom: 2vh;
        color: #d64000;
        transition: color 0.2s;
    }
    .bm-item:hover {
        color: #da1b60;
    }
    .bm-burger-button {
        position: fixed;
        margin-left: 3em;
        width: 30px;
        height: 26px;
        right: 2vw;
        top: 3vh;
    }
    .bm-burger-bars {
        background: #ccc;
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
        font-size: 0.9em;
    }
    .bm-morph-shape {
        fill: #373a47;
    }
    .bm-item-list {
        color: #b8b7ad;
    }
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }
`

export default props => {
  return (
    <StyledBurgerMenu>
      <Menu right {...props}>
        <a className='menu-item' href='/' itemProp='url'>
          <span itemProp='name'>Home</span>
        </a>
        <a className='menu-item' href='/about' itemProp='url'>
          <span itemProp='name'>About This Site</span>
        </a>
        <a className='menu-item' href='/photos' itemProp='url'>
          <span itemProp='name'>Photo Gallery</span>
        </a>
        <h4>Blog Posts</h4>
        <hr className='navbar-divider' />
        <a className='menu-item' href='/blog' itemProp='url'>
          <span itemProp='name'>All Posts</span>
        </a>
        <a className='menu-item' href='/blog/gatsby-netlify-no-plugins' itemProp='url'>
          <span itemProp='name'>Gatsby Netlify No Plugins</span>
        </a>
        <a className='menu-item' href='/blog/gatsby-lightgallery-cloudinary' itemProp='url'>
          <span itemProp='name'>Gatsby LightGallery Cloudinary</span>
        </a>
        <a className='menu-item' href='/blog/modali-hooks-modal' itemProp='url'>
          <span itemProp='name'>Modali Hooks Modal</span>
        </a>
        <a className='menu-item' href='/blog/gatsby-github-comments-utterances' itemProp='url'>
          <span itemProp='name'>Utterances Comments</span>
        </a>
        <a className='menu-item' href='/blog/gatsby-react-scroll-toTop' itemProp='url'>
          <span itemProp='name'>Gatsby Scroll toTop</span>
        </a>
        <a className='menu-item' href='/blog/react-hooks-modal' itemProp='url'>
          <span itemProp='name'>React Hooks Modal</span>
        </a>
        <a className='menu-item' href='/blog/js-media-queries' itemProp='url'>
          <span itemProp='name'>JavaScript media queries</span>
        </a>
        <a className='menu-item' href='/blog/react-hooks-masonry' itemProp='url'>
          <span itemProp='name'>React Hooks Masonary</span>
        </a>
        <a className='menu-item' href='/blog/google-maps+react-hooks' itemProp='url'>
          <span itemProp='name'>GMaps React Hooks</span>
        </a>
      </Menu>
    </StyledBurgerMenu>
  )
}
