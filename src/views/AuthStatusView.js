import React from 'react'
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'

function AuthStatusView () {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
      (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || 'NoName'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3 is-offset-1'>
              {isLoggedIn ? (
                <>
                  {avatar_url && <img alt='user name' src={avatar_url} className='user-icon' />}
                  <h3> &nbsp;Hello {name}!</h3>
                  <br />
                  <button className='button' onClick={() => setDialog(true)}>
                          LOG OUT
                  </button>
                </>
              ) : (
                <>
                  <h1> hello! try logging in! </h1>
                  <br />
                  <button className='button' onClick={() => setDialog(true)}>
                         LOG IN
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => console.log('hello ', user.user_metadata)}
        onSignup={(user) => console.log('welcome ', user.user_metadata)}
        onLogout={() => console.log('bye ', name)}
      />
    </div>
  )
}

export default AuthStatusView
