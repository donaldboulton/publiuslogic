import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import logo from '../../assets/img/site-logo250x80.png'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import NetlifyIdentityWidget from '../IdentityWidget'
import SlideMenu from '../SlideMenu'

const NavBar = () => (
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
            <Link to='/' itemProp='url' rel='no-follow' className='navbar-item'>
              <img itemProp='image' src={logo} alt='Publiuslogic' />
            </Link>
          </span>
        </div>
        <div id='navMenu' className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <DarkModeToggle />
            </div>
            <div className='navbar-item'>
              <SearchBox searchIndex={data.siteSearchIndex.index} />
            </div>
            <div className='navbar-item' id='login'>
              <NetlifyIdentityWidget />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className='navbar-item'>
              <SlideMenu />
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
