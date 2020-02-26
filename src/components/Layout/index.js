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
import SideBar from '../SiteTags'
function Layout ({ children, location }) {
  return (
    <>
      <SideBar pageWrapId='page-wrap' outerContainerId='gatsby-focus-wrapper' />
      <div>
        <ThemeProvider theme={theme} location={location}>
          <div className='grid-container'>
            <Header className='item-a' />
            <ScrollDown
              direction='down' to={25}
              showAbove={-1500}
              css='position: fixed; right: 1em; top: 3.1em;'
            />
            <div id='page-wrap'>
              <>
                {children}
              </>
              <Subscriptions />
              <Slack />
              <HotJar />
              <Adds />
              <Hr />
            </div>
            <Scroll
              showBelow={1500}
              css='position: fixed; right: 1em; bottom: 1.5em;'
            />
            <Footer className='item-e' />
          </div>
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
