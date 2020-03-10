import React from 'react'
import '../../../content/assets/sass/styles.sass'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import Scroll from '../Scroll'
import ScrollDown from '../ScrollDown'
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'
import { GlobalStyle } from './styles'
function Layout ({ children, location }) {
  return (
    <>
      <div>
        <ThemeProvider theme={theme} location={location}>
          <GlobalStyle />
          <Header className='header' />
          {children}
          <Footer className='footer' />
          <ScrollDown
            direction='down' to={25}
            showAbove={-1500}
            css='position: fixed; right: 1.1em; top: 3.8em;'
          />
          <Scroll
            showBelow={1500}
            css='position: fixed; right: 1.1em; bottom: 2em;'
          />
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
