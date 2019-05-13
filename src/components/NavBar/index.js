import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import logo from '../../img/site-logo250x80.png'

import NetlifyIdentityWidget from '../IdentityWidget'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation' itemScope='itemScope' itemType='https://schema.org/SiteNavigationElement'>
        <div className='navbar-brand'>
          <span className='navbar-item' itemProp='mainEntityOfPage'>
            <Link to='/' className='navbar-item' itemProp='image'>
              <img src={logo} alt='Publiuslogic' />
            </Link>
          </span>
          <button
            className={`button is-primary navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <SearchBox searchIndex={data.siteSearchIndex.index} />
            </div>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link  is-active' href='/' itemProp='url'>
                 Docs
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item' href='/' itemProp='url'>
                 Home
                </a>
                <a className='navbar-item' href='/about' itemProp='url'>
                 About
                </a>
                <a className='navbar-item' href='/photos' itemProp='url'>
                  Photos
                </a>
                <a className='navbar-item' href='/contact' itemProp='url'>
                  Contact
                </a>
                <a className='navbar-item' href='/privacy' itemProp='url'>
                  Privacy & terms
                </a>
              </div>
            </div>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link  is-active' href='/blog' itemProp='url'>
                 Blog
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item' href='/blog' itemProp='url'>
                  All Posts
                </a>
                <a className='navbar-item' href='/blog/modali-hooks-modal/' itemProp='url'>
                  Modali Hooks Modal
                </a>
                <a className='navbar-item' href='/blog/gatsby-github-comments-utterances/' itemProp='url'>
                  Utterances Comments
                </a>
                <a className='navbar-item' href='/blog/gatsby-react-scroll-toTop/' itemProp='url'>
                  Gatsby Scroll toTop
                </a>
                <a className='navbar-item' href='/blog/react-hooks-modal/' itemProp='url'>
                  React Hooks Modal
                </a>
                <a className='navbar-item' href='/blog/react-hooks-masonry/' itemProp='url'>
                  React Hooks Masonary
                </a>
                <a className='navbar-item' href='/blog/google-maps+react-hooks' itemProp='url'>
                  GMaps React Hooks
                </a>
              </div>
            </div>
            <div className='navbar-item' id='login'>
              <NetlifyIdentityWidget />
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
