import React from 'react'
import { Link } from 'gatsby'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../../static/img/apple-touch-icon-64x64.png'
import avatarIcon from '../../../static/img/avatar.png'
import Avatar from 'react-avatar'
import { SignOutAlt } from 'styled-icons/fa-solid'
import { useIdentityContext } from 'react-netlify-identity-widget'
import '../../../static/scss/styles.css'

export default () => {
  const { identity } = useIdentityContext()
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation' itemScope='itemScope' itemType='https://schema.org/SiteNavigationElement'>
      <div className='navbar-brand'>
        <Link to='/' itemProp='url' rel='no-follow' className='navbar-item'>
          <img itemProp='image' src={logo} alt='Publiuslogic' />
        </Link>
        <DarkModeToggle />
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <Link className='navbar-link has-dropdown is-hoverable' to='/app/profile'>
            {` `}
            {isLoggedIn ? (
              <div className='navbar-item'>
              `{name.user_metadata && name.user_metadata.full_name}`
                <span className='navbar-item'>
                  <Avatar />
                  <div className='navbar-dropdown'>
                    SignOut&nbsp;<SignOutAlt size='0.9rem' color='#f5f5f5' />
                  </div>
                </span>
              </div>
            ) : (
              <span className='navbar-item'><img className='user-icon' src={avatarIcon} alt='User' /></span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

