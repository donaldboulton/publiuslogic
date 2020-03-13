import React from 'react'
import Layout from '../components/Layout'
import { PageBody } from '../components/styles/PageBody'
import { Styledh1 } from '../components/styles/ArticleStyles'
import UserAvatar from 'react-user-avatar'
import Image from '../components/HomePageTemplate/image'
import { useIdentityContext } from 'react-netlify-identity-widget'

const Profile = () => {
  const identity = useIdentityContext()
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const email =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.id) || 'NoEmail'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
  console.log(JSON.stringify(identity))
  return (
    <>
      <Layout>
        <section className='post-cover'>
          <Image />
        </section>
        <PageBody>
          <Styledh1>
            Profile
          </Styledh1>
          <div
            style={{
              marginBottom: 2,
            }}
          >
            <span>GitHub Avatar{avatar_url && <img alt={name} src={avatar_url} className='user-icon' />}</span>
            <span>&nbsp;Global Avatar <UserAvatar className='user-icon' name={name} src={avatar_url} />
              <h3>&nbsp; Hello {name}!</h3>
            </span>
            <br />
            <h4>Email: {email}</h4>
            <br />
          </div>
          <hr
            style={{
              marginBottom: 2,
            }}
          />
        </PageBody>
      </Layout>
    </>
  )
}

export default Profile
