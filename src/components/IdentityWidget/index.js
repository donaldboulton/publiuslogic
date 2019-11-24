import React from 'react'
import netlifyIdentity from './netlify-identity.js'
import { SignInAlt } from 'styled-icons/fa-solid'

export const isBrowser = () => typeof window !== 'undefined'
export const initAuth = () => {
  if (isBrowser()) {
    window.netlifyIdentity = netlifyIdentity
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init()
  }
}
export const getUser = () =>
  isBrowser() && window.localStorage.getItem('netlifyUser')
    ? JSON.parse(window.localStorage.getItem('netlifyUser'))
    : {}

const setUser = user =>
  window.localStorage.setItem('netlifyUser', JSON.stringify(user))

export const handleLogin = callback => {
  if (isLoggedIn()) {
    callback(getUser())
  } else {
    netlifyIdentity.open()
    netlifyIdentity.on('login', user => {
      setUser(user)
      callback(user)
    })
  }
}

export const isLoggedIn = () => {
  if (!isBrowser()) return false
  const user = netlifyIdentity.currentUser()
  return !!user
}

export const logout = callback => {
  netlifyIdentity.logout()
  netlifyIdentity.on('logout', () => {
    setUser({})
    callback()
  })
}
export default class netlifyIdentityWidget extends React.Component {
  componentDidMount () {
    netlifyIdentity.init()
  }

  constructor () {
    super()

    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn () {
    netlifyIdentity.open()
  }

  render () {
    return (
      <div>
        <button id='mySigninBtn' aria-label='Sign In' className='button-transparent' type='button' onClick={this.handleLogIn}>
          <span><SignInAlt size='1.5em' color='#d64000' />&nbsp;</span><span className='h4'>Login</span>
        </button>
      </div>
    )
  }
}
