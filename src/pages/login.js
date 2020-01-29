import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/Layout'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'

import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css' // delete if you want to bring your own CSS

function Login () {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  return (
    <>
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content' />
                <Styledh1>
                 LogIn or SignUp
                </Styledh1>
                <div
                  style={{
                    marginBottom: rhythm(1),
                  }}
                >
                  <div>
                    <button className='button' onClick={() => setDialog(true)}>Log in</button>
                  </div>
                </div>
                <hr
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />
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
