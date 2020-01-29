import React from 'react'
import { SignInAlt, SignOutAlt } from 'styled-icons/fa-solid'
import { navigate } from 'gatsby'

import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'

function Login () {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <div className='Login'>
        {isLoggedIn ? (
          <>
            <a className='identity-logout' onClick={() => setDialog(true)}>
              Logout&nbsp;
              <SignOutAlt size='0.9rem' color='#f5f5f5' />
            </a>
          </>
        ) : (
          <>
            <button className='button' onClick={() => setDialog(true)}>
            LOG IN&nbsp;<SignInAlt size='0.9rem' color='#f5f5f5' />
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
