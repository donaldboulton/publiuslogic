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
    this.setState({ logged: isLoggedIn() })
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
