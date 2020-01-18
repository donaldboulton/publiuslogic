import React, { Component } from 'react'
import { SignInAlt, SignOutAlt } from 'styled-icons/fa-solid'
import netlifyIdentity from '../IdentityWidget/netlify-identity'

export const isBrowser = () => typeof window !== 'undefined'
export const getCurrentUser = () => isBrowser && getUser()
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

function saveLogin () {
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata
    } = netlifyIdentity.currentUser();

    localStorage.setItem(
      'netlifyUser',
      JSON.stringify({ app_metadata, created_at, confirmed_at, email, id, user_metadata })
    )
    return { app_metadata, created_at, confirmed_at, email, id, user_metadata }
  }
}

function clearLogin () {
  localStorage.removeItem('netlifyUser')
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const existingUser = localStorage.getItem('netlifyUser')
    if (existingUser) {
      this.setState({ user: JSON.parse(existingUser) }, this.didLogin.bind(this, 'noSave'))
    } else {
      existingUser = saveLogin()
      if (existingUser) {
        this.setState({ user: existingUser }, this.didLogin.bind(this, 'noSave'))
      }
    }
    netlifyIdentity.on('login', (user) => this.setState({ user }, this.didLogin.bind(this)))
    netlifyIdentity.on('logout', (user) => this.setState({ user: null }, this.didLogout.bind(this)))
  }

  didLogout () {
    clearLogin()
    this.props.onAuthChange(null)
  }

  doLogin () {
    netlifyIdentity.open()
  }

  doLogout () {
  // remove credentials and refresh model
    netlifyIdentity.logout()
    clearLogin()
    this.setState({ user: null })
  }

  render () {
    const actionForm = <span>
      <a onClick={this.doLogin.bind(this)}>Login & Sign Up<SignInAlt size='1rem' color='#f5f5f5' /></a>
                       </span>
    return (
      <div className='Login'>
        {this.state.user
          ?
          <a onClick={this.doLogout.bind(this)}>Logout<SignOutAlt size='1rem' color='#f5f5f5' /></a> 
          : actionForm
        }
      </div>
    )
  }
}

export default Login
