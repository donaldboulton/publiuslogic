import React, { Component } from 'react'
import styled from 'styled-components'
import '../../assets/sass/styles.sass'
import Header from '../Header'
import Footer from '../Footer'
import Hr from '../Hr'
import Slack from '../Slack'
import HotJar from '../HotJar'
import Subscriptions from '../Subscriptions'
import Adds from '../GoogleAdds'
import Scroll from '../Scroll'

const Container = styled.div`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`

class Global extends Component {
  render () {
    return (
      <Container>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{this.props.children}</main>
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
        </div>
      </Container>
    )
  }
}

export default Global
