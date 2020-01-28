import React from 'react'
import Layout from '../components/Layout'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'

import { useIdentityContext } from 'react-netlify-identity-widget'

const Profile = () => {
  const { identity } = useIdentityContext()
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'

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
                  <ul>
                    <li>Name: {name.user_metadata && name.user_metadata.full_name}</li>
                  </ul>
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
    </>
  )
}

export default Profile
