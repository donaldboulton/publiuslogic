import React, { Component, Fragment } from 'react'
import '../../../assets/sass/styles.sass'
import Header from '../../components/Header'
import { ThemeProvider } from 'styled-components'
import theme from '../../../utils/theme'

class Layout extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Fragment itemScope='itemScope' itemType='http://schema.org/CreativeWork'>{this.props.children}</Fragment>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
