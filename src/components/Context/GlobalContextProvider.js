import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()
export const FaunaCtx = React.createContext()
export const UserCtx = React.createContext()

const user = {
  faunaNetlifyUser: {},
}

const GlobalContextProvider = ({ children }) => {
  const UserContext = React.createContext({ faunaNetlifyUser: user })
  return (
    <GlobalStateContext.Provider value={UserContext}>
      <GlobalDispatchContext.Provider value={user}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider

