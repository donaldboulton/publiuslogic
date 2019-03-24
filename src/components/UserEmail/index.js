import React from 'react'
import EmailList from '../components/UserEmail'

const UserEmail = ({ data }) => (
  <div>
    <h1>Viewer Email</h1>
    <EmailList email={data.github.viewer.email} />
  </div>
)

export default UserEmail

export const query = graphql`
  query EmailQuery {
    github {
      viewer {
        email
      }
    }
  }
`
