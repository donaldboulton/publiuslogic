/**
 * base page component with user context
 * @2020/02/01
 */
import React from 'react'

import { useIdentityContext } from 'react-netlify-identity-widget'
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
    const user = useIdentityContext()
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
