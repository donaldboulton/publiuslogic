import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/Layout'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'
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
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content' />
                <Styledh1>
                 LogIn or SignUp
                </Styledh1>
                <div
                  style={{
                    marginBottom: rhythm(1),
                  }}
                >
                  {isLoggedIn ? (
                    <>
                      {avatar_url && <img alt='user name' src={avatar_url} className='user-icon' />}<h3> hello {name}!</h3>
                      <button className='button' onClick={() => setDialog(true)}>
                          LOG OUT
                      </button>
                    </>
                  ) : (
                    <>
                      <h1> Hello! try logging in! </h1>
                      <button className='button' onClick={() => setDialog(true)}>
                          LOG IN
                      </button>
                    </>
                  )}
                </div>
              </div>
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
            </div>
          </div>
        </section>
      </Layout>
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
