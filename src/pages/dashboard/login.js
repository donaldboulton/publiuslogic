import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../../utils/auth'
import NetlifyIdentityWidget from '../../components/IdentityWidget'

class Login extends React.Component {
  handleSubmit = () => handleLogin(user => navigate(`/dashboard/profile`))
  render () {
    return (
      <div>
        <h1>Log in</h1>
        <NetlifyIdentityWidget />
      </div>
    )
  }
}

export default Login
