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
import SideBar from '../SlideMenu'
import { GlobalStyle } from './styles'
function Layout ({ children, location }) {
  return (
    <>
      <SideBar pageWrapId='page-wrap' outerContainerId='gatsby-focus-wrapper' />
      <div id='page-wrap'>
        <ThemeProvider theme={theme} location={location} className='grid-container'>
          <GlobalStyle />
          <Header className='item-a' />
          <ScrollDown
            direction='down' to={25}
            showAbove={-1500}
            css='position: fixed; right: 1em; top: 3.1em;'
          />
          <>
            {children}
          </>
          <Subscriptions />
          <Slack />
          <HotJar />
          <Adds />
          <Hr />
          <Scroll
            showBelow={1500}
            css='position: fixed; right: 1em; bottom: 1.5em;'
          />
          <Footer className='item-e' />
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
