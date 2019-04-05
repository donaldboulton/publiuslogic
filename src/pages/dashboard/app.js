import React from 'react'
import { Router } from '@reach/router'
import Layout from '../../components/Layout'
import AdminNavBar from './AdminNavBar'
import Profile from './profile'
import Main from './main'
import PrivateRoute from './PrivateRoute'
import Login from './login'

const App = () => {
  return (
    <Layout>
      <AdminNavBar />
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <h1 className='title'>
             User Profile Pages
          </h1>
        </div>
        <Router>
          <PrivateRoute path='/dashboard/profile' component={Profile} />
          <PublicRoute path='/dashboard'>
            <PrivateRoute path='/' component={Main} />
            <Login path='/login' />
          </PublicRoute>
        </Router>
      </section>
    </Layout>
  )
}
function PublicRoute (props) {
  return <div>{props.children}</div>
}

export default App
