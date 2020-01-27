import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/layout'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'
import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'
import '../../static/scss/styles.css'

function Login () {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  return (
    <>
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{
                  marginBottom: rhythm(1),
                }}
              >
                <Styledh1>
                  LogIn or SignUp
                </Styledh1>
                <br
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />
                <div className='content'>
                  <button className='button' onClick={() => setDialog(true)}>log in</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate('/app/profile')}
        onSignup={user => navigate('/app/profile')}
      />
    </>
  )
}

export default Login
