import React from 'react'
const faunadb = require('faunadb')

/* configure faunaDB Client with our secret */
export const FaunaCtx = React.createContext()
const name = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})
const user = {
  user_metadata: {},
}
const UserContext = React.createContext({
  faunaNetlifyUser: name,
  user: user,
  username: '',
  updateUsername: () => {},
})

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
    )
  }
}

export const UserConsumer = UserContext.Consumer
