import React from 'react'
import { Link } from 'gatsby'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import logo from '../../../static/img/apple-touch-icon-64x64.png'
import avatarIcon from '../../../static/img/avatar.png'
import { IdentityModal, useIdentityContext } from 'react-netlify-identity-widget'
import '../../../static/scss/styles.css'

export default () => {
  const { identity } = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
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
          <Link className='navbar-item has-dropdown is-hoverable' to='/app/profile'>
            {` `}
            {identity && identity.isLoggedIn ? (
              <div>
              `{name.user_metadata && name.user_metadata.full_name}`
                <span className='navbar-item'>
                  {avatar_url && <img className='user-icon' alt='user name' src={avatar_url} style={{ height: 25, borderRadius: '50%' }} />}
                  <div className='navbar-dropdown'>
                    <div className='navbar-item'>
                      <button className='RNIW_btn button is-small' onClick={() => setDialog(true)}>
                        {isLoggedIn ? `Hello ${name}, Log out` : 'Log In'}
                      </button>
                    </div>
                  </div>
                </span>
              </div>
            ) : (
              <span className='navbar-item'><img className='user-icon' src={avatarIcon} alt='User' /></span>
            )}
          </Link>
          <IdentityModal
            showDialog={dialog}
            onCloseDialog={() => setDialog(false)}
            onLogin={(user) => console.log('hello ', user.user_metadata)}
            onSignup={(user) => console.log('welcome ', user.user_metadata)}
            onLogout={() => console.log('bye ', name)}
          />
        </div>
      </div>
    </nav>
  )
}

