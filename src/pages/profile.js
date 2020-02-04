import React from 'react'
import Layout from '../components/Layout'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'
import UserAvatar from 'react-user-avatar'
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'

const Profile = () => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const email =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.email) || 'NoEmail'
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
                      <span>GitHub Avatar{avatar_url && <img alt={name} src={avatar_url} className='user-icon' />}</span>
                      <span>&nbsp;Global Avatar <UserAvatar className='user-icon' name={name} src={avatar_url} />
                        <h3>&nbsp; Hello {name}!</h3>
                      </span>
                      <br />
                      <h4>Email: {email}</h4>
                      <br />
                      <button className='button' onClick={() => setDialog(true)}>
                        LOG OUT
                      </button>
                    </>
                  ) : (
                    <>
                      <h3> Hello! try logging in! </h3>
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
