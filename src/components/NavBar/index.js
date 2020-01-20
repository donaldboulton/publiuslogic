import React from 'react'
import { Link } from 'gatsby'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../../static/img/apple-touch-icon-64x64.png'
import avatar from '../../../static/img/avatar.png'
import UserContext from '../Context/UserContext'

const Navbar = class extends React.Component {
  render () {
    const { user } = this.context

    return (
      <nav className='navbar is-fixed-top' aria-label='main navigation' itemScope='itemScope' itemType='https://schema.org/SiteNavigationElement'>
        <div className='navbar-brand'>
          <Link to='/' itemProp='url' rel='no-follow' className='navbar-item'>
            <img itemProp='image' src={logo} alt='Publiuslogic' />
          </Link>
          <DarkModeToggle />
          <Link className='navbar-item' to='/app/profile'>
            {user
              ? (<span className='username-navbar'>Welcome {user.user_metadata.username}</span>)
              : (<span className='username-navbar'><img className='user-icon' src={avatar} alt='User' /></span>)}
          </Link>
        </div>
      </nav>
    )
  }
}

Navbar.contextType = UserContext

export default Navbar
