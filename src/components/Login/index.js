import React from 'react'
import avatarIcon from '../../../static/img/avatar.png'
import { Link } from 'gatsby'
import { SignOutAlt } from 'styled-icons/fa-solid'
import { navigate } from '@reach/router'
import UserAvatar from 'react-user-avatar'
import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'

function Login () {
  const identity = useIdentityContext()
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
                <Link className='navbar-item' to='/app/dashboard'>✨ User Settings</Link>
                <hr className='navbar-divider' />
                <a className='identity-login navbar-item' onClick={() => setDialog(true)}>
                  Logout&nbsp;<SignOutAlt size='1rem' color='#f5f5f5' />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <button className='identity-login navbar-item button-transparent' onClick={() => setDialog(true)}>
              <img className='user-icon' src={avatarIcon} alt='User' />
            </button>
          </>
        )}
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate('/app/profile')}
        onSignup={user => navigate('/app/profile')}
      />
    </>
  )
}

export default Login
