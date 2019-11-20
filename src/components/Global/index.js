import React, { Component, Fragment } from 'react'
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
import { useDarkMode } from '../../utils/hooks'
import theme from '../../utils/theme'
import { GlobalStyle } from './styles'

class Global extends Component {
  render () {
    const [darkMode] = useDarkMode()
    return (
      <ThemeProvider theme={theme(darkMode)}>
        <>
          <Header />
          <GlobalStyle />
          <Fragment itemScope='itemScope' itemType='http://schema.org/CreativeWork'>{this.props.children}</Fragment>        <Subscriptions />
          <Slack />
          <HotJar />
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
