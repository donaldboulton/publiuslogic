/**
 * router controller for path:
 * 
 * /app/profile
 * /app/login
 * 
 * @2018/12/20
 */


import React from 'react'
import { Router } from '@reach/router'

import PrivateRoute from '../components/PrivateRoute/privateRoute'
import Profile from './profile'
import Login from './login'

const App = () => (
  <Router>
    <PrivateRoute path='/app/profile' component={Profile} />
    <Login path='/app/login' />
  </Router>
)

export default App
