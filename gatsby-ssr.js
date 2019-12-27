const React = require('react')
// eslint-disable-next-line import/no-absolute-path
const GlobalContextProvider = require('./src/components/Context/GlobalContextProvider').default

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)

