import React, { Component } from 'react'
import '../../assets/sass/styles.sass'
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
class Global extends Component {
  render () {
    return (
      <>
        <SideBar pageWrapId='page-wrap' outerContainerId='gatsby-focus-wrapper' />
        <div id='page-wrap'>
          <ThemeProvider theme={theme}>
            <Header />
            <>
              {this.props.children}
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
          </ThemeProvider>
        </div>
      </>
    )
  }
}

export default Global
