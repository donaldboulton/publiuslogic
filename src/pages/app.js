import React from 'react'
import { Router } from '@reach/router'
import Profile from './profile'
import Dashboard from './dashboard'
import PrivateRoute from '../components/PrivateRoute/privateRoute'
import Login from './login'

const App = () => {
  return (
    <Router>
      <PrivateRoute path='/app/profile' component={Profile} />
      <PublicRoute path='/app'>
        <PrivateRoute path='/app/dashboard' component={Dashboard} />
        <Login path='/login' />
      </PublicRoute>
    </Router>
  )
}
function PublicRoute (props) {
  return <div>{props.children}</div>
}

export default App
