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
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'
import SideBar from '../SlideMenu'
import { UserProvider } from '../COntext/UserContext'

function Layout ({ children, tableOfContents, location }) {
  const user = { name: 'donaldboulton', loggedIn: true }
  return (
    <>
      <SideBar pageWrapId='page-wrap' outerContainerId='gatsby-focus-wrapper' />
      <div id='page-wrap'>
        <ThemeProvider theme={theme} location={location}>
          <UserProvider value={user}>
            <Header />
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
              css='position: fixed; right: 1em; bottom: 1em;'
            />
            <Footer />
          </UserProvider>
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tableOfContents: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
