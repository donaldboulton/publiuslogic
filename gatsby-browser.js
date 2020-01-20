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

