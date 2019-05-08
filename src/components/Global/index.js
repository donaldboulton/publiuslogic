import React, { Component, Fragment } from 'react'
import '../../assets/sass/styles.sass'
import Header from '../Header'
import Footer from '../Footer'
import Hr from '../Hr'
import Slack from '../Slack'
import Subscriptions from '../Subscriptions'
import Adds from '../GoogleAdds'
import Scroll from '../Scroll'
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'

require('typeface-kaushan-script')
require('typeface-roboto')

class Global extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Fragment itemScope='itemScope' itemType='http://schema.org/CreativeWork'>{this.props.children}</Fragment>
          <Subscriptions />
          <Slack />
          <Adds />
          <Hr />
          <Scroll
            showBelow={1500}
            css='position: fixed; right: 1em; bottom: 1em;'
          />
          <Footer />
        </>
      </ThemeProvider>
    )
  }
}

export default Global
