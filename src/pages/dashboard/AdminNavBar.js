import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../../utils/auth'

import signout from './img/sign-out-alt.svg'

import NetlifyIdentityWidget from '../../components/IdentityWidget'

export default () => {
  const content = { message: '', login: true }
  const user = getUser()
  if (isLoggedIn()) {
    content.message = `Hello, ${user.user_metadata &&
      user.user_metadata.full_name}`
  } else {
    content.message = 'You are not logged in'
  }
  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d64000',
        backgroundColor: '#1d1d1d',
      }}
    >
      <span>{content.message}</span>

      <nav>
        <span>Navigate the app: </span>
        <Link to='/app/'>Main</Link>
        {` `}
        <Link to='/app/profile'>Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href='/'
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          ><button className='button is-primary'><img src={signout} className='icon' alt='Logout' /></button></a>
        ) : (
          <NetlifyIdentityWidget />
        )}
      </nav>
    </div>
  )
}
