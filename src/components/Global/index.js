import React, { Fragment } from 'react'
import { styled, ThemeProvider } from 'styled-components'
import '../../assets/sass/styles.sass'
import Header from '../Header'
import Footer from '../Footer'
import Hr from '../Hr'
import Slack from '../Slack'
import HotJar from '../HotJar'
import Subscriptions from '../Subscriptions'
import Adds from '../GoogleAdds'
import Scroll from '../Scroll'
import { useDarkMode } from '../DarkMode'
import { lightTheme, darkTheme } from '../../utils/theme'
import { GlobalStyles } from '../GlobalStyle'
import Toggle from '../Toggle'

const Container = styled.div`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`
function Global () {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
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
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
            <Fragment itemScope='itemScope' itemType='http://schema.org/CreativeWork'>{this.props.children}</Fragment>
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
      </>
    </ThemeProvider>
  )
}

export default Global
