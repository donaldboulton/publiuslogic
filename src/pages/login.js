/**
 * login page with auth service(netlify identity)
 * @2018/12/14
 */
import React from 'react'

import { navigate } from '@reach/router'

import BasePage from '../base/BasePage'

import { isLoggedIn, loginNI } from '../services/auth'

export default class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      logged: false,
      user: null,
    }
    this.basepage = React.createRef()
  };

  componentDidMount () {
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

    const button = {
      display: 'block',
      marginBottom: 10,
      height: '2.25em',
      color: '#FFF',
      borderRadius: 4,
      borderColor: 'transparent',
      width: 80,
      fontSize: '1em',
    }

    const oBtn = {
      ...button,
      backgroundColor: '#3273dc',
    }

    // const bBtn = {
    //   ...button,
    //   backgroundColor: '#FC461E',
    // }

    return (<BasePage ref={this.basepage}>
      <section className='section'>
        <div className='container'>
          {this.state.logged
            ? (<>
              <div className='content'>
                <h1 className='has-text-weight-bold is-size-2'>Welcome Dear</h1>
              </div>
            </>)
            : (<>
              <div className='content'>
                <h1 className='has-text-weight-bold is-size-2'>Login First</h1>
              </div>
              <button style={oBtn} onClick={this.login.bind(this)}>Login</button>
            </>)}
        </div>
      </section>
    </BasePage>)
  }
}
