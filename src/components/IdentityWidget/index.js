import React from 'react'
import netlifyIdentity from './netlify-identity.js'
import { SignInAlt, SignOutAlt } from 'styled-icons/fa-solid'

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
    this.handleLogOut = this.handleLogOut.bind(this)
    this.state = {}
  }

  handleLogIn () {
    netlifyIdentity.open()
  }

  handleLogOut () {
    netlifyIdentity.close()
  }

  render () {
    const actionForm = <div>
      <button aria-label='Sign In' className='button-transparent' type='button' onClick={this.handleLogIn}>
        LogIn&nbsp;
        <SignInAlt size='1em' color='#f5f5f5' />
      </button>
    </div>
    return (
      <div>
        {this.state.user
          ? <button aria-label='Sign Out' className='button-transparent' type='button' onClick={this.handleLogOut}>
               LogOut&nbsp;
            <SignOutAlt size='1rem' color='#f5f5f5' />
          </button>
          : actionForm}
      </div>
    )
  }
}
