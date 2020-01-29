import React from 'react'
import { navigate } from 'gatsby'
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
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'
import '../../../static/scss/styles.css'

function Layout ({ children, location }) {
  return (
    <>
      <SideBar pageWrapId='page-wrap' outerContainerId='gatsby-focus-wrapper' />
      <div id='page-wrap'>
        <ThemeProvider theme={theme} location={location}>
          <Header />
          <>
            {children}
          </>
          <AuthStatusView className='hidden' hidden />
          <Subscriptions />
          <Slack />
          <HotJar />
          <Adds />
          <Hr />
          <Scroll
            showBelow={1500}
            css='position: fixed; right: 1em; bottom: 2.5em;'
          />
          <Footer />
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

function AuthStatusView () {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || 'NoName'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3 is-offset-1'>
              {isLoggedIn ? (
                <>
                  <h1> hello {name}!</h1>
                  {avatar_url && <img alt='user name' src={avatar_url} style={{ height: 100, borderRadius: '50%' }} />}
                  <button className='button' onClick={() => setDialog(true)}>
                        LOG OUT
                  </button>
                </>
              ) : (
                <>
                  <h1> hello! try logging in! </h1>
                  <button className='button' onClick={() => setDialog(true)}>
                       LOG IN
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate('/app/profile')}
        onSignup={user => navigate('/app/profile')}
      />
    </div>
  )
}
