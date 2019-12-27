import React from 'react'
// eslint-disable-next-line import/no-absolute-path
import GlobalContextProvider from './src/components/Context/GlobalContextProvider'

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)

