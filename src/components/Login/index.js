import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import UserAvatar from 'react-user-avatar'
import { SignOutAlt, SignInAlt } from '@styled-icons/fa-solid'
import { User } from './styles'

import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'
import { NavEntryLogin, SubNavLogin, DownArrow } from '../Nav/Desktop/styles'

function useOnClickOutside (ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  )
}

const Login = () => {
  const ref = useRef()
  const [isOpen, setOpen] = useState(false)
  useOnClickOutside(ref, () => setOpen(false))
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const email =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.user_id) || 'NoEmail'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <div>
        {isLoggedIn ? (
          <>
            <NavEntryLogin key={avatar_url}>
              <button className='identity-logout button-transparent' onClick={() => setOpen(true)}>
                {avatar_url &&
                  <UserAvatar
                    style={{
                      height: `1.2em`,
                      width: `1.2em`,
                      borderRadius: `50%`,
                    }}
                    className='user-icon'
                    name={name} src={avatar_url}
                  />}<DownArrow size='0.6em' />
              </button>
              {isOpen && (
                <SubNavLogin ref={ref}>
                  <h3 className='menu-item'>Welcome!</h3>
                  <div className='menu-item'>😀 {name}</div>
                  <div className='menu-item'>{email}</div>
                  <Link className='menu-item' to='/app/profile'>✨ User Settings</Link>
                  <hr className='navbar-divider' />
                  <div className='menu-item'>
                    <button className='button' onClick={() => setDialog(true)}>
                      <SignOutAlt size='1rem' color='#f5f5f5' />&nbsp;Logout
                    </button>
                  </div>
                </SubNavLogin>
              )}
            </NavEntryLogin>
          </>
        ) : (
          <>
            <NavEntryLogin key={User}>
              <button className='identity-login menu-item button-transparent' onClick={() => setOpen(true)}>
                <User className='user-icon' />
              </button><DownArrow size='0.6em' />
              {isOpen && (
                <SubNavLogin ref={ref}>
                  <div className='menu-item'>
                    <button className='button' onClick={() => setDialog(true)}>
                      <SignInAlt size='1rem' color='#f5f5f5' />&nbsp;LogIn
                    </button>
                  </div>
                  <Link className='menu-item' to='/login'>💕 User Signup</Link>
                </SubNavLogin>
              )}
            </NavEntryLogin>
          </>
        )}
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => console.log('hello ', user.user_metadata)}
        onSignup={(user) => console.log('welcome ', user.user_metadata)}
        onLogout={() => console.log('bye ', name)}
      />
    </>
  )
}

export default Login
