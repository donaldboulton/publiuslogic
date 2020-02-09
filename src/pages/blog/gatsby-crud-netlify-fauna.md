---
templateKey: article-page
title: Gatsby CRUD Netlify Fauna
path: /gatsby-crud-netlify-fauna
slug: /gatsby-crud-netlify-fauna
date: 2019-11-10T20:20:43.942Z
category: 'Gatsby'
cover: '/images/gatsby-netlify-fauna.jpg'
tags:
  - Netlify
  - Fauna
meta_title: Gatsby CRUD Netlify Fauna
meta_description: Gatsby CRUD Netlify FaunaDB
tweet_id: '1118651504674725888'
showToc: true
related: true
---

## Gatsby Serverless FaunaDB

🖥️ Based on 🔗 [Nelifty post](https://www.netlify.com/blog/2018/07/09/building-serverless-crud-apps-with-netlify-functions-faunadb/?_ga=2.21698171.1777301599.1576092869-301685750.1573932436#wrapping-up)

And some code functions and the Database schema mixed in from 🔗 [Netlify FaunaDB ToDo](https://github.com/fauna/netlify-faunadb-todomvc) for Netlify Identity Login and to set up the database.

Serverless functions seem to be all the rage these days. But why?

Devs are adopting the FAAS (Functions-as-a-Service) because of:

### Pay per execution

Pay-per-execution pricing: You only pay for the how long your function code runs, not for idle server time.
Scalability: Load balancing, security patches, logging, etc. are all handled by the FAAS provider. That leaves more time for companies to focus on their app instead of the underlying infrastructure.
Most importantly, perhaps, is that server-less functions give frontend developers superpowers.

If you can write JavaScript, you can build out robust backend applications and APIs using simple AWS Lambda functions.

Need to process payments? Functions have your back.

Need to build a backend API? Yep, functions can do that.

Need to send transactional emails/SMS to users? Functions got you.

We’ve previously explored how functions work together with Identity on Netlify, but today we’re going a step further. This post will focus on using functions to build a backend API for a React App.

We will be walking through how you can use FaunaDB with Netlify Functions to build a CRUD (Create, Read, Update, Delete) API.

![FaunaDB](/img/fauna.jpg "FaunaDB")
_[`FaunaDB` serverless functions](https://www.netlify.com/docs/functions/)_

## Functions ToDo Example

This Functions Todo Sample is in the 🔗 [Netlify Fauna ToDo](https://github.com/jchris/netlify-fauna-todo), GitHub Repo.

The Fauna post on the 🔗 [FaunaDB ToDo}(https://fauna.com/blog/building-a-serverless-jamstack-app-with-faunadb-cloud-part-1)

`video: https://youtu.be/7OB_IjTTcwg`

See the component in this markdown page at the bottom. Or our users page for the 🔗 [ToDo](/users) Functions Example

## Netlify Authentication

I pieced together a Login Component that uses Netlify Identity to use my users data in FaunaDb for Authentication of my users backend.

I have two backends Nelify CMS for editing .yaml and .json data in my _data folder including editing any page or post on this Site, and FaunaDB for everything else.

### Global Context Provider

Wrapping all elements in a user-FaunaDB context provider & consumer

```jsx
import React from 'react'
// eslint-disable-next-line import/no-absolute-path
import GlobalContextProvider from './src/components/Context/GlobalContextProvider'
import netlifyIdentity from './src/components/IdentityWidget/netlify-identity'

export function onInitialClientRender (a, options) {
  options = { ...options }
  delete options.plugins
  netlifyIdentity.init(options)
  window.netlifyIdentity = netlifyIdentity
}
export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)
```

### User Context Component

```jsx
import React, { createContext } from 'react'

const user = {
  user_metadata:{},
}

const UserContext = createContext({
  user: user,
  username: '',
  updateUsername: () => {},
});

export const FaunaCtx = React.createContext()

export class UserProvider extends React.Component {
  updateUsername = newUsername => {
    this.setState({ username: newUsername })
  };

  state = {
    username: 'user',
    updateUsername: this.updateUsername,
  };

  render () {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer
```

### Base pre-layout component for backend

This base wrapper for my backend uses my default Global layout component from src/base

```jsx
/**
 * base page component with user context
 * @2018/12/12
 */
import React from 'react'

import netlifyIdentity from '../components/IdentityWidget/netlify-identity'
import UserProvider from '../components/context/UserContext'

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
      <UserProvider value={this.state}>
        <Layout>
          {this.props.children}
        </Layout>
      </UserProvider>
    )
  }
}
```

### Services Backend Auth

Services for user profile and editing user content, and sets default admin user to be always logged in.

```jsx
import netlifyIdentity from './src/components/IdentityWidget/netlify-identity'
// for temporarily cache in client
// @2018/12/21
const GlobalObj = {}
Object.defineProperty(GlobalObj, 'pathname', { value: '/', writable: true })

// 1. check log status
export const isLoggedIn = () => {
  // const user = getUser()
  if (typeof netlifyIdentity.currentUser !== `undefined`) {
    return !!netlifyIdentity.currentUser()
  }
  return false
}
// 2. log in
export const loginNI = callback => {
  netlifyIdentity.open()
  netlifyIdentity.on('login', (user) => {
    netlifyIdentity.close()
    callback(user)
  })
}

// 3. log out
export const logoutNI = callback => {
  netlifyIdentity.logout()
  netlifyIdentity.on('logout', callback)
}

// 4. get user data
export const getUser = () =>
  isBrowser() && netlifyIdentity.currentUser()
    ? netlifyIdentity.currentUser()
    : {}

// 5. save pathname
export const setPathname = path => GlobalObj.pathname = path

// 6. get pathname
export const getPathname = () => GlobalObj.pathname

export const isBrowser = () => typeof window !== 'undefined'

export const setUser = user => {
  window.localStorage.setItem('faunaNetlifyUser', JSON.stringify(user))
  return true
}
// setting my username email and a encrypted password for always logged in
export const handleLogin = ({ username, password }) => {
  if (username === `donaldboulton` && password === `h1urLdWaMflomajdEXKgil8c87XDzK3ftQ86M0mOVf+0fA8veMVjMqP2elrNb6Ix9Qox7PiMilI1fpwGWNuhOzwjJYOJcTpIZpxD4i+Q4G7mbcQxTIPUhU4OQ3VqvX6pImzqgkLWXR8xT7li/lEaoZkrzPTriojyeHh/iCxko/E=`) {
    return setUser({
      username: `donaldboulton`,
      name: `Donald Boulton`,
      email: `donaldboulton@gmail.com`,
    })
  }

  return false
}
```

### Example User Profile page

The below is how I consume the User FaunaDB Provider

```jsx
import React from 'react'
import { navigate } from '@reach/router'

import BasePage from '../base/BasePage'
import Spinner from '../components/Spinner'
import UserMessage from '../components/UserMessage'
import SettingsForm from '../components/SettingsForm'
import { UserProvider, UserConsumer } from '../components/Context/UserContext'

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
              <UserConsumer >
                <ul>
                  <li>Name: {user.user_metadata && user.user_metadata.username}</li>
                  <li>E-mail: {user.email}</li>
                </ul>
              </UserConsumer>
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
```

### User Profile Message

```jsx
import React from 'react'
import { UserConsumer } from '../Context/UserContext'

export default function UserMessage () {
  return (
    <UserConsumer>
      {({ username }) => <h1>Welcome {username}!</h1>}
    </UserConsumer>
  );
}
```

### User Settings

The below just changes the user name. Todo: password with user avatar needs added

```jsx
import React from 'react'
import { UserConsumer } from '../Context/UserContext'

export default function UserSettings () {
  return (
    <UserConsumer>
      {({ updateUsername }) => (
        <div>
          <h2>Settings</h2>
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            type='text'
            onChange={event => {
              updateUsername(event.target.value)
            }}
          />
        </div>
      )}
    </UserConsumer>
  )
}
```

## Login Component Code

 I use the below component in my Burger Menu for Logging In & Out of My Site with Netlify and FaunaDB

```jsx{3-5,7-14}:title=FaunaDB-Login
import React from 'react'
import { SignInAlt, SignOutAlt } from 'styled-icons/fa-solid'

import netlifyIdentity from '../IdentityWidget/netlify-identity'
export const isBrowser = () => typeof window !== 'undefined'
export const initAuth = () => {
  if (isBrowser()) {
    window.netlifyIdentity = netlifyIdentity
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init()
  }
}

function saveLogin () {
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata,
    } = netlifyIdentity.currentUser()

    window.localStorage.setItem(
      'faunaNetlifyUser',
      JSON.stringify({ app_metadata, created_at, confirmed_at, email, id, user_metadata }),
    )
    return { app_metadata, created_at, confirmed_at, email, id, user_metadata }
  }
}

function clearLogin () {
  window.localStorage.removeItem('faunaNetlifyUser')
}

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.state = {}
  }

  handleLogIn () {
    netlifyIdentity.open()
  }

  componentDidMount () {
    netlifyIdentity.init()
    var existingUser = window.localStorage.getItem('faunaNetlifyUser')
    if (existingUser) {
      this.setState({ user: JSON.parse(existingUser) }, this.didLogin.bind(this, 'noSave'))
    } else {
      existingUser = saveLogin() // does calling user pop a thing? should we set state?
      if (existingUser) {
        this.setState({ user: existingUser }, this.didLogin.bind(this, 'noSave'))
      }
    }
    netlifyIdentity.on('login', (user) => this.setState({ user }, this.didLogin.bind(this)))
    netlifyIdentity.on('logout', (user) => this.setState({ user: null }, this.didLogout.bind(this)))
  }

  didLogin (noSave) {
    console.log('didLogin', noSave)
    if (!noSave) { saveLogin() }
    const faunadb_token = this.state.user &&
      this.state.user.app_metadata &&
      this.state.user.app_metadata.faunadb_token
    if (faunadb_token) {
      this.props.onAuthChange(faunadb_token)
    } else {
      console.error('Expected user to have a faunadb_token, check logs for the identity-signup.js function.')
      console.log(this.state.user)
    }
  }

  didLogout () {
    clearLogin()
    this.props.onAuthChange(null)
  }

  doLogout () {
    // remove credentials and refresh model
    netlifyIdentity.logout()
    clearLogin()
    this.setState({ user: null })
  }

  render () {
    var actionForm = <span>
      <button aria-label='Sign In' className='button-transparent' type='button' onClick={this.handleLogIn}>
      Login&nbsp;
      <SignInAlt size='0.9em' color='#f5f5f5' />
      </button>
    </span>
    return (
      <div className='Login'>
        {this.state.user
          ? <a onClick={this.doLogout.bind(this)}>
          Logout&nbsp;
          <SignOutAlt size='0.9rem' color='#f5f5f5' />
            </a>
          : actionForm}
      </div>
    )
  }
}

export default Login
```

## SignUp functions code

The Login code and Identity functions were taken from the 🔗 [Netlify FaunaDb todomvc Repo](https://github.com/fauna/netlify-faunadb-todomvc) application includes an `identity-signup.js` function which is triggered upon email confirmation to create the FaunaDB user. 

So click that confirmation link and start using your app. Any changes you push to your master branch will be automatically deployed, thanks Netlify!

All functions should ben in there own folder with a package.json file and all the required node modules including a gitignore file.

Then make sure to add a entry in your netlify build Environment variables for Your FAUNADB_SERVER_SECRET.

Set build in your netlify.toml

```sh
[build]
  publish = "public"
  command = "gatsby build"
  functions = "functions-build"
```

```jsx{2-3,8}:title=functions/identity-signup.js
'use strict'
const faunadb = require('faunadb')
const generator = require('generate-password')

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

/* create a user in FaunaDB that can connect from the browser */
function createUser (userData, password) {
  return client.query(q.Create(q.Class('users'), {
    credentials: {
      password: password,
    },
    data: {
      id: userData.id,
      user_metadata: userData.user_metadata,
    },
  }))
}

function obtainToken (user, password) {
  console.log('creating FaunaDB token for ' + user)
  return client.query(
    q.Login(q.Select('ref', user), { password }))
}

function handler (event, context, callback) {
  var payload = JSON.parse(event.body)
  var userData = payload.user

  const password = generator.generate({
    length: 10,
    numbers: true,
  })

  createUser(userData, password)
    .then((user) => obtainToken(user, password))
    .then((key) => callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        app_metadata: {
          faunadb_token: key.secret,
          // we discard the credential, and can create a new one if we ever need a new token
          // faunadb_credential : password
        } 
}),
    })).catch((e) => {
      console.error(e)
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: e,
        }),
      })
    })
}
module.exports = { handler: handler }
```

### ToDo

The Below ToDo is build with Netlify Functions

<interactive-todo></interactive-todo>
