import React from 'react'
import { Link, navigate } from 'gatsby'
import { SignInAlt, SignOutAlt } from 'styled-icons/fa-solid'
import { useIdentityContext } from 'react-netlify-identity-widget'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import fetch from 'node-fetch'

function Dashboard () {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [err, setErr] = React.useState('')
  const { user, identity, isLoggedIn, logoutUser } = useIdentityContext()
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'

  const message = isLoggedIn
    ? `Hello, ${name.user_metadata && name.user_metadata.full_name}`
    : 'You are not logged in'

  const handleClick = e => {
    e.preventDefault()
    setLoading(true)
    fetch('/.netlify/functions/auth-hello', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token.access_token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })
      .catch(err => {
        if (window.location.origin === 'http://localhost:8000') {
          setErr(
            'your origin is "http://localhost:8000". You are likely not using Netlify Dev so the functions server isnt running. Please read the docs, use Netlify Dev, and go to http://localhost:8888',
          )
        } else setErr(err)
        throw err
      })
  }

  return (
    <>
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <Styledh1>
                 Dashboard
                </Styledh1>
                <div
                  className='content'
                  style={{
                    marginBottom: rhythm(1),
                  }}
                >
                  <span>{message}</span>
                  {isLoggedIn ? (
                    <a
                      href='/'
                      onClick={async event => {
                        event.preventDefault()
                        await logoutUser()
                        navigate(`/app/login`)
                      }}
                    >
                    Logout&nbsp;<SignOutAlt size='0.9rem' color='#f5f5f5' />
                    </a>
                  ) : (
                    <Link to='/app/login'>Login&nbsp;<SignInAlt size='0.9rem' color='#f5f5f5' /></Link>
                  )}
                  <div> Hello: {name.user_metadata && name.user_metadata.full_name}</div>
                  <hr />
                  <button onClick={handleClick}>
                    {loading ? 'Loading...' : 'Call Lambda Function'}
                  </button>
                  {err && <pre>{JSON.stringify(err, null, 2)}</pre>}
                  <pre>{JSON.stringify(data, null, 2)}</pre>
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
    </>
  )
}

export default Dashboard
