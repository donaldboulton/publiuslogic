import React from 'react'
import avatarIcon from '../../../static/img/avatar.png'
import { Link, navigate } from 'gatsby'

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
                {avatar_url && <img alt={name} src={avatar_url} className='user-icon' />}
              </button>
              <div className='navbar-dropdown'>
                <h3>Welcome</h3>
                <div>{name}</div>
                <Link to='/app/profile'>Your Profile</Link>
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
