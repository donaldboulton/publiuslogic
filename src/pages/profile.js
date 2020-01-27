import React from 'react'
import Layout from '../components/Layout'
import UserMessage from '../components/UserMessage'
import SettingsForm from '../components/SettingsForm'
import { UserProvider } from '../components/Context/UserContext'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { useIdentityContext } from 'react-netlify-identity-widget'

const Profile = (location) => {

  const { user, identity } = useIdentityContext()
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'

  return (
    <>
      <Layout location={location}>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <Styledh1>
                  Your profile
                </Styledh1>
                <div className='content'>
                  <UserProvider>
                    <UserMessage />
                    <SettingsForm />
                  </UserProvider>
                  <ul>
                    <li>Name: {name.user_metadata && name.user_metadata.full_name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Profile
