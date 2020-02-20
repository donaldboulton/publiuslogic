import React from 'react'
import avatarIcon from '../../../static/img/avatar.png'
import { Link } from 'gatsby'
import UserAvatar from 'react-user-avatar'
import { SignOutAlt } from 'styled-icons/fa-solid'
import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'

function Login () {
  const { identity } = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  console.log(JSON.stringify(identity))
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <div className='navbar-end'>
        {isLoggedIn ? (
          <>
            <div className='navbar-item has-dropdown is-hoverable'>
              <button className='identity-logout navbar-item button-transparent' onClick={() => setDialog(true)}>
                {avatar_url && <UserAvatar className='user-icon' name={name} src={avatar_url} />}
              </button>
              <div id='nav-dropdown' className='navbar-dropdown'>
                <h3 className='navbar-item'>Welcome!</h3>
                <div className='navbar-item'>😀 {name}</div>
                <Link className='navbar-item' to='/app/profile'>✨ User Settings</Link>
                <hr className='navbar-divider' />
                <Link className='navbar-item' to='/profile'>Profile Page</Link>
                <div className='navbar-item'>
                  <button className='button-transparent' onClick={() => setDialog(true)}>
                    Logout&nbsp;<SignOutAlt size='1rem' color='#f5f5f5' />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='navbar-item has-dropdown is-hoverable'>
              <button className='identity-login navbar-item button-transparent' onClick={() => setDialog(true)}>
                <img className='user-icon' src={avatarIcon} alt='User' />
              </button>
              <div id='nav-dropdown' className='navbar-dropdown'>
                <Link className='navbar-item' to='/login'>💕 New User Signup</Link>
              </div>
            </div>
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
