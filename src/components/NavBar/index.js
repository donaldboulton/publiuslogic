import React from 'react'
import { Link, navigate } from 'gatsby'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../../static/img/apple-touch-icon-64x64.png'
import avatar from '../../../static/img/avatar.png'
import { SignOutAlt } from 'styled-icons/fa-solid'

import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'
import '../../../static/scss/styles.css'

export default () => {
  const { identity, logoutUser } = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
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
          <Link className='navbar-item has-dropdown is-hoverable' to='/app/profile'>
            {` `}
            {isLoggedIn ? (
              <div className='navbar-dropdown'>
              `{name.user_metadata && name.user_metadata.full_name}`
                <a
                  href='/'
                  onClick={async event => {
                    event.preventDefault()
                    await logoutUser()
                    navigate(`/app/login`)
                  }}
                >
                  Logout&nbsp;<SignOutAlt size='0.9rem' color='#f5f5f5' />
                </a>
              </div>
            ) : (
              <span className='navbar-item'><img className='user-icon' src={avatar} alt='User' /></span>
            )}
          </Link>
        </div>
      </div>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </nav>
  )
}

