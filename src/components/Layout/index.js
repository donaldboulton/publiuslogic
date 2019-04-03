import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import '../../assets/sass/styles.sass'
import config from '../../../data/config'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Hr from '../Hr'
import Slack from '../Slack'
import Subscriptions from '../Subscriptions'
import Scroll from '../Scroll'
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Fragment>
            <Helmet>
              <title>{config.siteTitle}</title>
              <meta name='description' content={config.siteDescription} />
            </Helmet>            
            <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
            <Fragment>{this.props.children}</Fragment>
            <Subscriptions />
            <Slack />
            <Hr />
            <Scroll
              showBelow={1500}
              css='position: fixed; right: 1.5em; bottom: 1em;'
            />
            <Footer />
          </Fragment>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout

