import React from 'react'
import Layout from '../components/Layout'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'
import { IdentityModal, useIdentityContext } from 'react-netlify-identity-widget'

const Profile = () => {
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
                <Styledh1>
                 Profile
                </Styledh1>
                <div className='content' />
                <div
                  style={{
                    marginBottom: rhythm(1),
                  }}
                >
                  {isLoggedIn ? (
                    <>
                      <h1> hello {name}!</h1>
                      {avatar_url && <img alt='user name' src={avatar_url} style={{ height: 100, borderRadius: '50%' }} />}
                      <button className='button' onClick={() => setDialog(true)}>
                        LOG OUT
                      </button>
                    </>
                  ) : (
                    <>
                      <h1> hello! try logging in! </h1>
                      <button className='button' onClick={() => setDialog(true)}>
                         LOG IN
                      </button>
                    </>
                  )}
                </div>
                <hr
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />
              </div>
            </div>
          </div>
        </section>
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

export default Profile
