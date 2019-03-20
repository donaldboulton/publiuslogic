import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import SearchBox from '../SearchBox'
import logo from '../../img/site-logo250x80.png'

import NetlifyIdentityWidget from '../IdentityWidget'

const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <span className='navbar-item'>
            <Link to='/' className='navbar-item'>
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
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link  is-active' href='/'>
                 Docs
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item ' href='/'>
                 Home
                </a>
                <a className='navbar-item ' href='/about'>
                 About
                </a>
                <a className='navbar-item is-active' href='/pricing'>
                  Pricing
                </a>
                <a className='navbar-item ' href='/contact'>
                  Contact
                </a>
                <a className='navbar-item ' href='/privacy'>
                  Privacy & terms
                </a>
              </div>
            </div>
            <div className='navbar-item site-title' id='login'>
              <NetlifyIdentityWidget />
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
