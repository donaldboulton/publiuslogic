import React from 'react'
import { IdentityContextProvider } from './src/components/IdentityWidget/netlify-identity'
import './static/scss/styles.css'

export const wrapRootElement = ({ element }) => (
  <IdentityContextProvider url='https://publiuslogic.com/.netlify/identity'>
    {element}
  </IdentityContextProvider>
)
