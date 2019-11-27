import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../../static/img/apple-touch-icon-64x64.png'

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
          <Link to='/' itemProp='url' rel='no-follow' className='navbar-item'>
            <img itemProp='image' src={logo} alt='Publiuslogic' />
          </Link>
          <DarkModeToggle />
          <SearchBox searchIndex={data.siteSearchIndex.index} />
        </div>
      </nav>
    )}
  />
)

export default NavBar
