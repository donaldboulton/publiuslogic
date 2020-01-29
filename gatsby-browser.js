import React from 'react'
import { IdentityContextProvider } from 'react-netlify-identity-widget'
import './static/scss/styles.css'

export const wrapRootElement = ({ element }) => (
  <IdentityContextProvider url='https://publiuslogic.com/.netlify/identity'>
    {element}
  </IdentityContextProvider>
)
