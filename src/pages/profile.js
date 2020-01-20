import React from 'react'
import { navigate } from '@reach/router'
import BasePage from '../base/BasePage'
import Spinner from '../components/Spinner'
import UserMessage from '../components/UserMessage'
import SettingsForm from '../components/SettingsForm'
import { UserProvider } from '../components/Context/UserContext'

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

    return (
      <BasePage ref={this.basepage}>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1 className='has-text-weight-bold is-size-3'>Your profile</h1>
            </div>
            <div className='content'>
              <UserProvider>
                <UserMessage />
                <SettingsForm />
              </UserProvider>
              <ul>
                <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
                <li>E-mail: {user.email}</li>
              </ul>
            </div>
            <div className='content'>
              <button className='button' onClick={this.logout.bind(this)}>Logout</button>
              {this.state.loading ? <Spinner /> : false}
            </div>
          </div>
        </section>
      </BasePage>
    )
  }
}

export default Profile
