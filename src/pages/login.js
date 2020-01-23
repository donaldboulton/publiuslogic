/**
 * login page with auth service(netlify identity)
 * @2018/12/14
 */
import React from 'react'

import { navigate } from '@reach/router'

import BasePage from '../base/BasePage'

import { isLoggedIn, loginNI } from '../services/auth'
import { Styledh1 } from '../components/styles/ArticleStyles'
import netlifyIdentity from '../components/IdentityWidget/netlify-identity'
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

    window.localStorage.setItem(
      'faunaNetlifyUser',
      JSON.stringify({ app_metadata, created_at, confirmed_at, email, id, user_metadata }),
    )
    return { app_metadata, created_at, confirmed_at, email, id, user_metadata }
  }
}

function clearLogin () {
  window.localStorage.removeItem('faunaNetlifyUser')
}
export default class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.state = {
      loading: false,
      logged: false,
      user: null,
    }
    this.basepage = React.createRef()
  };

  handleLogIn () {
    netlifyIdentity.open()
  }

  componentDidMount () {
    netlifyIdentity.init()
    var existingUser = window.localStorage.getItem('faunaNetlifyUser')
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
    this.setState({ logged: isLoggedIn() })
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

  doLogout () {
    // remove credentials and refresh model
    netlifyIdentity.logout()
    clearLogin()
    netlifyIdentity.close()
    this.setState({ user: null })
  }

  login () {
    console.log('login...')
    loginNI((user) => {
      console.log(user)
      console.log('logged in!')
      this.setState({ logged: true })
      this.basepage.current.updateUser(user)
      this.goHome()
    })
  }

  goHome () {
    setTimeout(() => navigate('/', { replace: true }), 200)
  }

  render () {
    // NOTE: can not use return here!
    // @2018/12/20
    if (this.state.logged) navigate('/app/profile')

    return (<BasePage ref={this.basepage}>
      <section className='section'>
        <div className='container'>
          {this.state.logged
            ? (<>
              <div className='content'>
                <Styledh1>
                    Welcome:
                </Styledh1>
              </div>
               </>)
            : (<>
              <div className='content'>
                <Styledh1>
                   Login First
                </Styledh1>
              </div>
              <button className='button' type='button' onClick={this.handleLogIn}>Login</button>
               </>)}
        </div>
      </section>
            </BasePage>)
  }
}
