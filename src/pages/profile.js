import React from 'react'
import { navigate } from '@reach/router'

import BasePage from '../base/BasePage'
import Spinner from '../components/Spinner'

import { getUser, logoutNI } from '../services/auth'

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
    }
    this.basepage = React.createRef()
  };

  logout () {
    console.log('logout....')
    this.setState({ loading: true })
    logoutNI(() => {
      this.setState({ loading: false })
      this.basepage.current.updateUser(null)
      this.goHome()
    })
  }

  goHome () {
    setTimeout(() => navigate('/', { replace: true }), 200)
  }

  render () {
    const user = getUser()
    // console.log(user)
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

    return (

      <BasePage ref={this.basepage}>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1 className='has-text-weight-bold is-size-3'>Your profile</h1>
            </div>
            <div className='content'>
              <ul>
                <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
                <li>E-mail: {user.email}</li>
              </ul>
            </div>
            <div className='content'>
              <button style={oBtn} onClick={this.logout.bind(this)}>Logout</button>
              {this.state.loading ? <Spinner /> : false}
            </div>
          </div>
        </section>
      </BasePage>
    )
  }
}

export default Profile
