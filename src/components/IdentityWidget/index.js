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

function saveLogin () {
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata
    } = netlifyIdentity.currentUser();

    localStorage.setItem(
      'netlifyUser',
      JSON.stringify({app_metadata, created_at, confirmed_at, email, id, user_metadata})
    );
    return {app_metadata, created_at, confirmed_at, email, id, user_metadata}
  }
}
export default class netlifyIdentityWidget extends React.Component {
  componentDidMount () {
    netlifyIdentity.init()

    var existingUser = localStorage.getItem('netlifyUser')
    if (existingUser) {
      this.setState({user: JSON.parse(existingUser)}, this.didLogin.bind(this, 'noSave'));
    } else {
      existingUser = saveLogin() // does calling user pop a thing? should we set state?
      if (existingUser) {
        this.setState({user: existingUser}, this.didLogin.bind(this, 'noSave'));
      }
    }
    netlifyIdentity.on('login', (user) => this.setState({ user }, this.didLogin.bind(this)));
    netlifyIdentity.on('logout', (user) => this.setState({ user: null }, this.didLogout.bind(this) ));
  }

  constructor (props) {
    super(props)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.state = {}
  }

  handleLogIn () {
    netlifyIdentity.open()
  }

  render () {
    const actionForm = <div>
      <button id='mySigninBtn' aria-label='Sign In' className='button-transparent' type='button' onClick={this.handleLogIn}>
        LogIn&nbsp;
        <SignInAlt size='1.85em' color='#f5f5f5' />
      </button>
    </div>
    return (
      <div>
        {this.state.user
          ? <button id='mySignOutBtn' aria-label='Sign Out' className='button-transparent' type='button' onClick={this.handleLogOut}>
            <SignOutAlt size='1.1em' color='#f5f5f5' />
            &nbsp;LogOut
          </button>
          : actionForm}
      </div>
    )
  }
}
