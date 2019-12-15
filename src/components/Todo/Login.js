import './login.css'
import React, { Component } from 'react'

import netlifyIdentity from '../IdentityWidget/netlify-identity'
export const isBrowser = () => typeof window !== 'undefined'
export const initAuth = () => {
  if (isBrowser()) {
    window.netlifyIdentity = netlifyIdentity
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init()
  }
}

function saveLogin () {
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata,
    } = netlifyIdentity.currentUser()

    localStorage.setItem(
      'faunaNetlifyUser',
      JSON.stringify({ app_metadata, created_at, confirmed_at, email, id, user_metadata }),
    )
    return { app_metadata, created_at, confirmed_at, email, id, user_metadata }
  }
}

function clearLogin () {
  localStorage.removeItem('faunaNetlifyUser')
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    netlifyIdentity.init()
    var existingUser = localStorage.getItem('faunaNetlifyUser')
    if (existingUser) {
      this.setState({ user: JSON.parse(existingUser) }, this.didLogin.bind(this, 'noSave'))
    } else {
      existingUser = saveLogin() // does calling user pop a thing? should we set state?
      if (existingUser) {
        this.setState({ user: existingUser }, this.didLogin.bind(this, 'noSave'))
      }
    }
    netlifyIdentity.on('login', (user) => this.setState({ user }, this.didLogin.bind(this)))
    netlifyIdentity.on('logout', (user) => this.setState({ user: null }, this.didLogout.bind(this)))
  }

  didLogin (noSave) {
    console.log('didLogin', noSave)
    if (!noSave) { saveLogin() }
    const faunadb_token = this.state.user &&
      this.state.user.app_metadata &&
      this.state.user.app_metadata.faunadb_token
    if (faunadb_token) {
      this.props.onAuthChange(faunadb_token)
    } else {
      console.error('Expected user to have a faunadb_token, check logs for the identity-signup.js function.')
      console.log(this.state.user)
    }
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
    var actionForm = <span>
      <a onClick={this.doLogin.bind(this)}>Login or Sign Up</a>
                     </span>
    return (
  <div className='Login'>
        {this.state.user
          ? <a onClick={this.doLogout.bind(this)}>Logout</a>
          : actionForm}
      </div>
    )
  }
}

export default Login
