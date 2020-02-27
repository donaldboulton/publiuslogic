import React from 'react'
import '../../../content/assets/sass/styles.sass'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import Hr from '../Hr'
import Slack from '../Slack'
import HotJar from '../HotJar'
import Subscriptions from '../Subscriptions'
import Adds from '../GoogleAdds'
import Scroll from '../Scroll'
import ScrollDown from '../ScrollDown'
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'
import { GlobalStyle } from './styles'
function Layout ({ children, location }) {
  return (
    <>
      <ThemeProvider theme={theme} location={location}>
        <GlobalStyle />
        <div className='grid-container'>
          <Header className='item-a' />
          <>
            {children}
          </>
          <Subscriptions />
          <Slack />
          <HotJar />
          <Adds />
          <Hr />
          <Footer className='item-e' />
        </div>
        <ScrollDown
          direction='down' to={25}
          showAbove={-1500}
          css='position: fixed; right: 1em; top: 3.1em;'
        />
        <Scroll
          showBelow={1500}
          css='position: fixed; right: 1em; bottom: 1.5em;'
        />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
