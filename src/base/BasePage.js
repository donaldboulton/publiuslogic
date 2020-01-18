/**
 * base page component with user context
 * @2018/12/12
 */
import React from 'react'

import netlifyIdentity from 'netlify-identity-widget'
import UserContext from '../context/UserContext'

import Layout from '../components/Layout'
import { setPathname } from '../services/auth'

export default class BasePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
    }
  }

  // called by outside
  updateUser (user) {
    this.setState({ user: user })
    console.log('update user:', user)
  }

  componentDidMount () {
    const user = netlifyIdentity.currentUser()
    // console.log({ user });
    if (user) this.setState({ user })
  }

  render () {
    const location = this.props.location
    if (location) setPathname(location.pathname)

    return (
      <UserContext.Provider value={this.state}>
        <Layout>
          {this.props.children}
        </Layout>
      </UserContext.Provider>
    )
  }
}
