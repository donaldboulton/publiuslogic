import React from 'react'
import { Router, Link, navigate } from '@reach/router'
import Layout from '../components/Layout'
import useNetlifyIdentity from '../hooks/useNetlifyIdentity'
import useLoading from '../hooks/useLoading'
import UserAvatar from 'react-user-avatar'
import { Styledh1 } from '../components/styles/ArticleStyles'
import isLocalHost from '../utils/isLocalHost'
import '../../static/scss/Spinner.css'
import IdentityModal from 'react-netlify-identity-widget'
const IdentityContext = React.createContext()
export const FaunaCtx = React.createContext()

function PrivateRoute (props) {
  const identity = React.useContext(IdentityContext)
  const { as: Comp, ...rest } = props
  return identity.user ? (
    <Comp {...rest} />
  ) : (
    <div>
      <h3>You are trying to view a protected page. Please log in</h3>
      <Login />
    </div>
  )
}

function Login () {
  const { loginUser, signupUser } = React.useContext(IdentityContext)
  const formRef = React.useRef()
  const [msg, setMsg] = React.useState('')
  const [isLoading, load] = useLoading()
  const signup = () => {
    const email = formRef.current.email.value
    const password = formRef.current.password.value
    load(signupUser(email, password))
      .then(user => {
        console.log('Success! Signed up', user)
        navigate('/dashboard')
      })
      .catch(err => console.error(err) || setMsg('Error: ' + err.message))
  }
  return (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        load(loginUser(email, password))
          .then(user => {
            console.log('Success! Logged in', user)
            navigate('/dashboard')
          })
          .catch(err => console.error(err) || setMsg('Error: ' + err.message))
      }}
    >
      <div>
        <label>
          Email:
          <input className='input' type='email' name='email' />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input className='input' type='password' name='password' />
        </label>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <input className='button' type='submit' value='Log in' />
          <button className='button' onClick={signup}>Sign Up </button>
          {msg && <pre>{msg}</pre>}
        </div>
      )}
    </form>
  )
}
function Spinner () {
  return (
    <div className='sk-folding-cube'>
      <div className='sk-cube1 sk-cube' />
      <div className='sk-cube2 sk-cube' />
      <div className='sk-cube4 sk-cube' />
      <div className='sk-cube3 sk-cube' />
    </div>
  )
}
function Nav () {
  const { isLoggedIn } = React.useContext(IdentityContext)
  return (
    <nav>
      <Link className='a' to='/'>Home</Link> | <Link className='a' to='/dashboard'>Dashboard</Link>
      {' | '}
      <span>{isLoggedIn ? <Logout /> : <Link className='a' to='login'>Log In/Sign Up</Link>}</span>
    </nav>
  )
}
function Logout () {
  const { logoutUser } = React.useContext(IdentityContext)
  return <button className='button' onClick={logoutUser}>Log Out</button>
}

function Home () {
  return (
    <div>
      <h3>Welcome to the Home page!</h3>
      <p>
        this is a <b>Public Page</b>, not behind an authentication wall
      </p>
      <div style={{ backgroundColor: '#EEE', padding: '1rem' }}>
        <div>
          <a
            href='https://app.netlify.com/start/deploy?repository=https://github.com/netlify/create-react-app-lambda/tree/reachRouterAndGoTrueDemo&stack=cms'
          >
            <img src='https://www.netlify.com/img/deploy/button.svg' alt='Deploy to Netlify' />
          </a>
        </div>
        This demo is{' '}
        <a href='https://github.com/netlify/create-react-app-lambda/tree/reachRouterAndGoTrueDemo'>Open Source.</a>{' '}
      </div>
    </div>
  )
}

function About () {
  return <div>About</div>
}

function Dashboard () {
  const props = React.useContext(IdentityContext)
  const url = React.useState('https://publiuslogic.com')
  const identity = useNetlifyIdentity(url)
  const { isConfirmedUser, authedFetch } = props
  const [dialog, setDialog] = React.useState(false)
  const [isLoading, load] = useLoading()
  const [msg, setMsg] = React.useState('Click to load something')
  const name =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'NoName'
  const email =
  (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.email) || 'NoEmail'
  const avatar_url = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.avatar_url
  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  const handler = () => {
    load(authedFetch.get('/.netlify/functions/authEndPoint')).then(setMsg)
  }
  return (
    <div>
      <h3>This is a Protected Dashboard!</h3>
      <div className='column is-10 is-offset-1'>
        <Styledh1>
          Profile
        </Styledh1>
      </div>
      {!isConfirmedUser && (
        <pre style={{ backgroundColor: 'papayawhip' }}>
          You have not confirmed your email. Please confirm it before you ping the API.
        </pre>
      )}
      <hr />
      {isLoggedIn ? (
        <>
          <span>GitHub Avatar{avatar_url && <img alt={name} src={avatar_url} className='user-icon' />}</span>
          <span>&nbsp;Global Avatar <UserAvatar className='user-icon' name={name} src={avatar_url} />
            <h3>&nbsp; Hello {name}!</h3>
          </span>
          <br />
          <h4>Email: {email}</h4>
          <br />
          <button className='button' onClick={() => setDialog(true)}>
            LOG OUT
          </button>
        </>
      ) : (
        <>
          <h3> Hello! try logging in! </h3>
          <button className='button' onClick={() => setDialog(true)}>
            LOG IN
          </button>
        </>
      )}
      <div>
        <p>You can try pinging our authenticated API here.</p>
        <p>If you are logged in, you should be able to see a `user` info here.</p>
        <button className='button' onClick={handler}>Ping authenticated API</button>
        {isLoading ? <Spinner /> : <pre>{JSON.stringify(msg, null, 2)}</pre>}
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => console.log('hello ', user.user_metadata)}
        onSignup={(user) => console.log('welcome ', user.user_metadata)}
        onLogout={() => console.log('bye ', name)}
      />
    </div>
  )
}

function App () {
  // TODO: SUPPLY A URL EITHER FROM ENVIRONMENT VARIABLES OR SOME OTHER STRATEGY
  // e.g. 'https://unruffled-roentgen-04c3b8.netlify.com'
  const [url, setUrl] = React.useState('https://publiuslogic.com')
  const handler = e => setUrl(e.target.value)
  const identity = useNetlifyIdentity(url)
  console.log({ identity, url })
  return (
    <Layout>
      <IdentityContext.Provider value={identity}>
        <div className='App'>
          <div className='Appheader'>
            <h1 className='title'>
              <span>Netlify Identity</span>
              <span className='italic'>&</span> <span>Reach Router</span>
            </h1>
            <label>
              <a href='https://www.netlify.com/docs/identity/'>Netlify Identity</a> Instance:{' '}
              <input
                className='input'
                type='text'
                placeholder='your instance here e.g. https://unruffled-roentgen-04c3b8.netlify.com'
                value={url}
                onChange={handler}
                size={50}
              />
              <div>
                <div style={{ display: 'inline-block' }}>
                  {isLocalHost === 'localhost' ? (
                    <pre>WARNING: this demo doesn't work on localhost</pre>
                  ) : (
                    <pre>your instance here e.g. https://unruffled-roentgen-04c3b8.netlify.com</pre>
                  )}
                </div>
              </div>
            </label>
          </div>
          <Nav />
          <Router>
            <Home path='/' />
            <About path='/about' />
            <Login path='/login' />
            <PrivateRoute as={Dashboard} path='/dashboard' />
          </Router>
        </div>
      </IdentityContext.Provider>
    </Layout>
  )
}

export default App
