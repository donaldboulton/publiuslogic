import HtmlHead from './htmlhead'
import Layout from './layout'
import React from 'react'
import { getUser, handleLogin, isLoggedIn, logout } from '../../utils/auth'
import { Link, navigate } from 'gatsby'
import { Router } from '@reach/router'
import signin from './img/sign-in-alt.svg'
import signout from './img/sign-out-alt.svg'

const pageData = require(`../../../nav-config`).pages.dashboard

export class Dashboard extends React.Component {
  render () {
    const { children } = this.props
    return (
      <Layout>
        <HtmlHead title={pageData.title} />
        <main>
          <h2>Dashboard</h2>
          <NavBar />
          <Router>
            <PrivateRoute path='/dashboard/profile' component={Profile} />
            <PublicRoute path='/dashboard'>
              <PrivateRoute path='/' component={Main} />
              <Login path='/login' />
            </PublicRoute>
          </Router>
        </main>
      </Layout>
    )
  }
}

export default Dashboard

function PublicRoute (props) {
  return <>{props.children}</>
}

class PrivateRoute extends React.Component {
  componentDidMount = () => {
    const { location } = this.props
    if (!isLoggedIn() && location.pathname !== `/dashboard/login`) {
      navigate(`/dashboard/login`)
      return null
    }
  }
  render () {
    const { component: Component, location, ...rest } = this.props
    return isLoggedIn() ? <Component {...rest} /> : null
  }
}

class Main extends React.Component {
  render () {
    return (
      <>This is "main".</>
    )
  }
}

class Profile extends React.Component {
  render () {
    return (
      <>This is "profile".</>
    )
  }
}

class Login extends React.Component {
  handleSubmit = () => {
    handleLogin(user => navigate(`/dashboard/profile`))
  }
  render () {
    return (
      <>
        <button onClick={this.handleSubmit}>Login</button>
        <p>To try the log in modal, use:</p>
        <ul>
          <li>email: gatsby-starter@outlook.com</li>
          <li>password: unicorn</li>
        </ul>
      </>
    )
  }
}

class NavBar extends React.Component {
  render () {
    const content = {
      message: ``,
      login: true,
    }
    const user = getUser()
    if (isLoggedIn()) {
      content.message = `You are logged in.`
    } else {
      content.message = `You are not logged in.`
    }
    return (
      <>
        {content.message}
        <nav>
          <li><Link to='/dashboard/'>Main Dashboard</Link></li>
          <li><Link to='/dashboard/profile'>Your Profile</Link></li>
          {isLoggedIn() ? (
            <li><a href='/'
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/dashboard/login`))
              }}><button className='button is-primary'><img src={signout} className='icon' alt='Logout' /></button></a></li>
          ) : (
            <li><Link to='/dashboard/login'><button className='button is-primary'><img src={signin} className='icon' alt='Login' /></button></Link></li>
          )}
        </nav>
      </>
    )
  }
}
