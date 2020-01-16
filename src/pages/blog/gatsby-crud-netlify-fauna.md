---
templateKey: article-page
title: Gatsby CRUD Netlify Fauna
path: /gatsby-crud-netlify-fauna
slug: /gatsby-crud-netlify-fauna
date: 2019-11-10T20:20:43.942Z
category: 'tech'
cover: '/images/gatsby-netlify-fauna.jpg'
tags:
  - Netlify
  - Fauna
meta_title: Gatsby CRUD Netlify Fauna
meta_description: Gatsby CRUD Netlify FaunaDB
tweet_id: '1118651504674725888'
showToc: true
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

### Login Component Code

 I use the below component in my Burger Menu for Logging In & Out for My Site through Netlify and FaunaDB

```jsx{3-5,7-14}:title=FaunaDB-Login
import React, { Component } from 'react'
import { SignInAlt, SignOutAlt } from 'styled-icons/fa-solid'
// Using my own build of netlify Identity so Gatsby does not build its plugins
// With my own webpack custom build for mainly styling issues
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

    localStorage.setItem(
      'faunaNetlifyUser',
      JSON.stringify({ app_metadata, created_at, confirmed_at, email, id, user_metadata }),
    )
    return { app_metadata, created_at, confirmed_at, email, id, user_metadata }
  }
}

function clearLogin () {
  localStorage.removeItem('faunaNetlifyUser')
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    netlifyIdentity.init()
    var existingUser = localStorage.getItem('faunaNetlifyUser')
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

  doLogin () {
    netlifyIdentity.open()
  }

  doLogout () {
    // remove credentials and refresh model
    netlifyIdentity.logout()
    clearLogin()
    this.setState({ user: null })
  }

  render () {
    var actionForm = <span>
      <a onClick={this.doLogin.bind(this)}>Login&nbsp;<SignInAlt size='1.1em' color='#f5f5f5' /></a>
                     </span>
    return (
      <div>
        {this.state.user
          ? <a onClick={this.doLogout.bind(this)}><SignOutAlt size='1.1em' color='#f5f5f5' />&nbsp;Logout</a>
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

All functions should ben in there own folder with a package.json file and all the required node modules including a gitignore.txt file.

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
