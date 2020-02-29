import React from 'react'
import avatarIcon from '../../../static/img/avatar.png'
import { Link } from 'gatsby'
import UserAvatar from 'react-user-avatar'
import { SignOutAlt } from 'styled-icons/fa-solid'
import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'
import { NavEntry, NavbarDropdown, NavbarDropdownContent } from '../Nav/Desktop/styles'

const Login = () => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const email =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.user_id) || 'NoEmail'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <div>
        {isLoggedIn ? (
          <>
            <NavbarDropdown>
              <NavEntry key={avatar_url}>
                <button className='identity-logout button-transparent' onClick={() => setDialog(true)}>
                  {avatar_url &&
                    <UserAvatar
                      className='user-icon'
                      name={name} src={avatar_url}
                    />}
                </button>
              </NavEntry>
              <NavbarDropdownContent>
                <h3 className='menu-item'>Welcome!</h3>
                <div className='menu-item'>😀 {name}</div>
                <div className='menu-item'>{email}</div>
                <Link className='menu-item' to='/app/profile'>✨ User Settings</Link>
                <hr className='navbar-divider' />
                <div className='menu-item'>
                  <button className='button' onClick={() => setDialog(true)}>
                    Logout&nbsp;<SignOutAlt size='1rem' color='#f5f5f5' />
                  </button>
                </div>
              </NavbarDropdownContent>
            </NavbarDropdown>
          </>
        ) : (
          <>
            <NavbarDropdown>
              <NavEntry key={avatarIcon}>
                <button className='identity-login menu-item button-transparent' onClick={() => setDialog(true)}>
                  <img className='user-icon' src={avatarIcon} alt='User' />
                </button>
              </NavEntry>
              <NavbarDropdownContent>
                <Link className='menu-item' to='/login'>💕 New User Signup</Link>
              </NavbarDropdownContent>
            </NavbarDropdown>
          </>
        )}
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => console.log('hello ', user.user_metadata)}
        onSignup={(user) => console.log('welcome ', user.user_metadata)}
        onLogout={() => console.log('bye ', name)}
      />
    </>
  )
}

export default Login
