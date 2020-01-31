import React from 'react'
import { Link } from 'gatsby'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../../static/img/apple-touch-icon-64x64.png'
import avatarIcon from '../../../static/img/avatar.png'
import { useIdentityContext } from 'react-netlify-identity-widget'
import '../../../static/scss/styles.css'

export default () => {
  const { identity } = useIdentityContext()
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
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
          <Link className='navbar-item' to='/app/profile'>
            {` `}
            {isLoggedIn ? (
              <div className='navbar-item'>
                {avatar_url && <img className='user-icon' alt='user name' src={avatar_url} />}
                <div className='navbar-dropdown'>
                  <span className='navbar-item'>{name}</span>
                </div>
              </div>
            ) : (
              <div className='navbar-item'><img className='user-icon' src={avatarIcon} alt='User' /></div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

