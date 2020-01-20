import React from 'react'
import { UserConsumer } from '../Context/UserContext'

export default function UserSettings () {
  return (
    <UserConsumer>
      {({ updateUsername }) => (
        <div>
          <h2>Settings</h2>
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            type='text'
            onChange={event => {
              updateUsername(event.target.value)
            }}
          />
        </div>
      )}
    </UserConsumer>
  )
}
