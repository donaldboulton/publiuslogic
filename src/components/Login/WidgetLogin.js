import React from 'react'
import useLocalStorage from '../../src/hooks'
import identity from 'react-netlify-identity'
import {
  useIdentityContext,
} from 'react-netlify-identity-widget'

function saveLogin () {
  if (!process.env.FAUNADB_SERVER_SECRET) {
    console.log('No FAUNADB_SERVER_SECRET found')
    console.log('Please run `netlify addons:create fauna` and redeploy')
    return false
  }

  console.log('server', process.env.FAUNADB_SERVER_SECRET)
  console.log('admin', process.env.FAUNADB_ADMIN_SECRET)

  if (identity && identity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata,
    } = identity.currentUser()

    useLocalStorage.setItem(
      'faunaNetlifyUser',
      JSON.stringify({ app_metadata, created_at, confirmed_at, email, id, user_metadata }),
    );
    return { app_metadata, created_at, confirmed_at, email, id, user_metadata }
  }
}

function clearLogin () {
  useLocalStorage.removeItem('faunaNetlifyUser')
}

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const identity = useIdentityContext()
    var existingUser = useLocalStorage.getItem('faunaNetlifyUser')
    if (existingUser) {
      this.setState({ user: JSON.parse(existingUser) }, this.didLogin.bind(this, 'noSave'))
    } else {
      existingUser = saveLogin() // does calling user pop a thing? should we set state?
      if (existingUser) {
        this.setState({ user: existingUser }, this.didLogin.bind(this, 'noSave'))
      }
    }
    identity.on('login', (user) => this.setState({ user }, this.didLogin.bind(this)))
    identity.on('logout', (user) => this.setState({ user: null }, this.didLogout.bind(this)))
  }

  didLogin (noSave) {
    console.log('didLogin', noSave)
    if (!noSave) {
      saveLogin()
    }
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
    identity.open()
  }

  doLogout () {
    // remove credentials and refresh model
    identity.logout()
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
