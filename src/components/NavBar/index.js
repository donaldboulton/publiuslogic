import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../assets/img/site-logo250x80.png'

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
        <div className='flex-container'>
          <span className='navbar-item'>
            <Link to='/' itemProp='url' rel='no-follow' className='navbar-item'>
              <img itemProp='image' src={logo} alt='Publiuslogic' />
            </Link>
          </span>
          <span className='navbar-item'>
            <DarkModeToggle />
          </span>
          <span className='navbar-item'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
          </span>
        </div>
      </nav>
    )}
  />
)

export default NavBar
