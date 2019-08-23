import React from 'react'
import signin from './assets/img/sign-in-alt.svg'
import netlifyIdentity from './netlify-identity.js'

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
      <div className='hidden'>
        <button id='mySigninBtn' className='button is-primary' type='button' onClick={this.handleLogIn} >
          <img src={signin} className='icon' alt='Login' />
        </button>
      </div>
    )
  }
}
