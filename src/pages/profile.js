import React from 'react'
import { navigate } from '@reach/router'
import BasePage from '../base/BasePage'
import UserMessage from '../components/UserMessage'
import SettingsForm from '../components/SettingsForm'
import { UserProvider } from '../components/Context/UserContext'
import { Styledh1 } from '../components/styles/ArticleStyles'

import { getUser } from '../services/auth'

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
    }
    this.basepage = React.createRef()
  };

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
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <Styledh1>
                  Your profile
                </Styledh1>
                <div className='content'>
                  <UserProvider>
                    <UserMessage />
                    <SettingsForm />
                  </UserProvider>
                  <ul>
                    <li>Name: {user.user_metadata && user.user_metadata.name}</li>
                    <li>E-mail: {user.email}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BasePage>
    )
  }
}

export default Profile
