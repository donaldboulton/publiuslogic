import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'

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
    <div>
      <span>{content.message}</span>

      <nav>
        <span>Navigate Profile Area: </span>
        <Link to='/app/'>Home</Link>
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
          >
            Logout
          </a>
        ) : (
          <Link to='/app/login'>Login</Link>
        )}
      </nav>
    </div>
  )
}