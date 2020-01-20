import React from 'react'

const user = {
  user_metadata:{},
}

const UserContext = React.createContext({
  user: user,
  username: '',
  updateUsername: () => {},
})

export const FaunaCtx = React.createContext()
export const UserCtx = React.createContext()

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
