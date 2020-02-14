import React from 'react'
import fetch from 'node-fetch'
// -------------- usage --------------
import {
  useIdentityContext,
} from 'react-netlify-identity'
import { useLocalStorage } from '@swyx/hooks'
// eslint-disable-next-line no-unused-vars
const faunadb = require('faunadb')
export const FaunaCtx = React.createContext()

export default function useIdentity (onAuthChange) {
  const identity = useIdentityContext()

  if (!onAuthChange) throw new Error('onAuthChange cannot be falsy')
  const itemChangeCallback = _user => {
    if (_user) {
      const faunadb_token =
        _user && _user.app_metadata && _user.app_metadata.faunadb_token
      if (faunadb_token) onAuthChange(faunadb_token)
      else {
        console.error(
          'Expected _user to have a faunadb_token, check logs for the identity-signup.js function.',
        )
      }
    } else {
      onAuthChange(null)
    }
  }
  const [item, setItem, removeItem] = useLocalStorage(
    'faunaNetlifyUser',
    itemChangeCallback,
  )
  React.useEffect(() => {
    identity.on('login', setItem)
    identity.on('logout', removeItem)
  }, [removeItem, setItem])

  // definition - `item` comes from  useIdentity hook
  const genericAuthedFetch = method => (endpoint, obj = {}) => {
    if (!item || !item.token || !item.token.access_token) { throw new Error('no user token found') }
    const defaultObj = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + item.token.access_token,
      },
    }
    const finalObj = Object.assign(defaultObj, { method }, obj)
    return fetch(endpoint, finalObj).then(res =>
      finalObj.headers['Content-Type'] === 'application/json' ? res.json() : res,
    )
  }

  const authedFetch = {
    get: genericAuthedFetch('GET'),
    post: genericAuthedFetch('POST'),
    put: genericAuthedFetch('PUT'),
    delete: genericAuthedFetch('DELETE'),
  }
  return {
    user: item,
    doLogout: () => identity.logout(),
    doLogin: () => identity.open(),
    authedFetch,
  }
}
