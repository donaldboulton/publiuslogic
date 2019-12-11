import React from 'react'
import deployButton from '../../assets/img/deploy-to-netlify.svg'
import logo from '../../assets/img/logo.svg'
import github from '../../assets/img/github.svg'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <h1 className='app-title'>Netlify + Fauna DB</h1>
              <p className='app-intro'>
                Using FaunaDB & Netlify functions
              </p>
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
          <OutboundLink
            target='_blank'
            rel='noopener noreferrer'
            href='https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-faunadb-example&stack=fauna'>
            <img src={deployButton} className='deploy-button' alt='deploy to netlify' />
          </OutboundLink>
          <div className='view-src'>
            <OutboundLink
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/netlify/netlify-faunadb-example'>
              <img className='github-icon' src={github} alt='view repo on github' />
              View the source Luke
            </OutboundLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
