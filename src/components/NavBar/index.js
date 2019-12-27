import React from 'react'
import { Link } from 'gatsby'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../../static/img/apple-touch-icon-64x64.png'

const NavBar = () => (
  <nav className='navbar is-fixed-top' aria-label='main navigation' itemScope='itemScope' itemType='https://schema.org/SiteNavigationElement'>
    <div className='navbar-brand'>
      <Link to='/' itemProp='url' rel='no-follow' className='navbar-item'>
        <img itemProp='image' src={logo} alt='Publiuslogic' />
      </Link>
      <DarkModeToggle />
    </div>
  </nav>
)

export default NavBar
