import React from 'react'
import deployButton from '../../../content/assets/img/deploy-to-netlify.svg'
import logo from '../../../content/assets/img/logo.svg'
import github from '../../../content/assets/img/github.svg'
import { Styledh1 } from '../styles/ArticleStyles'
import './AppHeader.css'

const AppHeader = props => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <Styledh1>
                Netlify + Fauna DB
              </Styledh1>
              {/* <p className="app-intro">Using FaunaDB & Netlify functions</p> */}
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-faunadb-example&stack=fauna'
          >
            <img
              src={deployButton}
              className='deploy-button'
              alt='deploy to netlify'
            />
          </a>
          <div className='view-src'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/netlify/netlify-faunadb-example'
            >
              <img
                className='github-icon'
                src={github}
                alt='view repo on github'
              />
              View source
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
