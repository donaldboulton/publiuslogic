import React from 'react'

export const FaunaCtx = React.createContext()

const user = {
  user_metadata:{},
}

const UserContext = React.createContext({
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
    );
  }
}

export const UserConsumer = UserContext.Consumer
