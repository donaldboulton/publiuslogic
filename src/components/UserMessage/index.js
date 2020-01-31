import React from 'react'
import { UserConsumer } from '../Context/UserContext'
import { useIdentityContext } from 'react-netlify-identity-widget'

function UserMessage () {
  const { identity } = useIdentityContext()
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'

  return (
    <UserConsumer>
      {({ name }) => <h1>Welcome {name}!</h1>}
    </UserConsumer>
  );
}

export default UserMessage
