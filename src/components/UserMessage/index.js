import React from 'react'
import { UserConsumer } from '../Context/UserContext'

function UserMessage () {
  const { user, identity } = useIdentityContext()
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  
  return (
    <UserConsumer>
      {({ name }) => <h1>Welcome {name}!</h1>}
    </UserConsumer>
  );
}
