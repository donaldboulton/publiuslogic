import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { PageBody } from '../components/styles/PageBody'
import { SignOutAlt, SignInAlt } from '@styled-icons/fa-solid'
import { Styledh1 } from '../components/styles/ArticleStyles'

import {
  useIdentityContext,
  IdentityModal,
} from 'react-netlify-identity-widget'

function Login () {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <>
      <Layout>
        <PageBody as='div'>
          <Styledh1>
            LogIn or SignUp
          </Styledh1>
          <div
            style={{
              marginBottom: 2,
            }}
          >
            {isLoggedIn ? (
              <>
                {avatar_url && <img alt='user name' src={avatar_url} className='user-icon' />}<h3> hello {name}!</h3>
                <div><Link to='/profile'>Profile Page</Link></div>
                <div>
                  <button className='button' onClick={() => setDialog(true)}>
                    Logout&nbsp;<SignOutAlt size='1rem' color='#f5f5f5' />
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1> Hello! try logging in! </h1>
                <button className='button' onClick={() => setDialog(true)}>
                  Login&nbsp;<SignInAlt size='1rem' color='#f5f5f5' />
                </button>
              </>
            )}
          </div>
          <hr
            style={{
              marginBottom: 2,
            }}
          />
        </PageBody>
      </Layout>
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
