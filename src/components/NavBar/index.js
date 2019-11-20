import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import logo from '../../assets/img/site-logo250x80.png'
import DarkMode from '../DarkMode'
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
          <span className='navbar-item'>
            <Link to='/sitemap' itemProp='url' rel='no-follow' className='navbar-item'>
              <img itemProp='image' src={logo} alt='Publiuslogic Sitemap' />
            </Link>
          </span>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
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
              <DarkMode />
            </div>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link is-active' href='/sitemap' itemProp='url'>
                <span itemProp='name'>Docs</span>
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item' href='/' itemProp='url'>
                  <span itemProp='name'>Home</span>
                </a>
                <a className='navbar-item' href='/about' itemProp='url'>
                  <span itemProp='name'>About This Site</span>
                </a>
                <a className='navbar-item' href='/photos' itemProp='url'>
                  <span itemProp='name'>Photo Gallery</span>
                </a>
                <a className='navbar-item' href='/contact' itemProp='url'>
                  <span itemProp='name'>Email Contact</span>
                </a>
                <a className='navbar-item' href='/privacy' itemProp='url'>
                  <span itemProp='name'>Privacy & terms</span>
                </a>
                <a className='navbar-item' href='/sitemap' itemProp='url'>
                  <span itemProp='name'>Site Map Page</span>
                </a>
                <a className='navbar-item' href='/admin/#/collections/pages' itemProp='url'>
                  <span itemProp='name'>Admin CMS</span>
                </a>
              </div>
            </div>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link is-active' href='/blog' itemProp='url'>
                <span itemProp='name'>Blog</span>
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item' href='/blog' itemProp='url'>
                  <span itemProp='name'>All Posts</span>
                </a>
                <a className='navbar-item' href='/blog/gatsby-netlify-no-plugins/' itemProp='url'>
                  <span itemProp='name'>Gatsby Netlify No Plugins</span>
                </a>
                <a className='navbar-item' href='/blog/gatsby-lightgallery-cloudinary/' itemProp='url'>
                  <span itemProp='name'>Gatsby LightGallery Cloudinary</span>
                </a>
                <a className='navbar-item' href='/blog/modali-hooks-modal/' itemProp='url'>
                  <span itemProp='name'>Modali Hooks Modal</span>
                </a>
                <a className='navbar-item' href='/blog/gatsby-github-comments-utterances/' itemProp='url'>
                  <span itemProp='name'>Utterances Comments</span>
                </a>
                <a className='navbar-item' href='/blog/gatsby-react-scroll-toTop/' itemProp='url'>
                  <span itemProp='name'>Gatsby Scroll toTop</span>
                </a>
                <a className='navbar-item' href='/blog/react-hooks-modal/' itemProp='url'>
                  <span itemProp='name'>React Hooks Modal</span>
                </a>
                <a className='navbar-item' href='/blog/js-media-queries/' itemProp='url'>
                  <span itemProp='name'>JavaScript media queries</span>
                </a>
                <a className='navbar-item' href='/blog/react-hooks-masonry/' itemProp='url'>
                  <span itemProp='name'>React Hooks Masonary</span>
                </a>
                <a className='navbar-item' href='/blog/google-maps+react-hooks' itemProp='url'>
                  <span itemProp='name'>GMaps React Hooks</span>
                </a>
              </div>
            </div>
            <div className='navbar-item'>
              <SearchBox searchIndex={data.siteSearchIndex.index} />
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
