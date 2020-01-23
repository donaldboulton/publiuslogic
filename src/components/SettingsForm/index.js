import React from 'react'
import { UserConsumer } from '../Context/UserContext'
import styled from 'styled-components'

const Name = styled.input`
  padding: 10px;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 200px;
`
export default function UserSettings () {
  return (
    <UserConsumer>
      {({ updateUsername }) => (
        <div>
          <h2>Settings</h2>
          <label htmlFor='username'>Username: </label>
          <Name
            className='input'
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
