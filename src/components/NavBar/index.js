import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import SearchBox from '../SearchBox'
import logo from '../../img/site-logo250x80.png'
import rss from '../../img/rss.svg'
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
            <div className='navbar-item' id='search'>
              <SearchBox searchIndex={data.siteSearchIndex.index} />
            </div>
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
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link  is-active' href='/'>
                 Blog
              </a>
              <div className='navbar-dropdown'>                
                <a className='navbar-item ' href='/blog'>
                  All Posts
                </a>
                <a className='navbar-item ' href='/blog/just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/'>
                  Blue Mountain
                </a>
                <a className='navbar-item is-active' href='/blog/making-sense-of-the-scaas-new-flavor-wheel/'>
                  Flavor Wheel
                </a>
                <a className='navbar-item ' href='/contact'>
                  Chemex Brewing
                </a>
                <a className='navbar-item ' href='/privacy'>
                  lorem-ipsum-dolor-situm
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
