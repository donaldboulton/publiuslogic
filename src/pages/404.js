import React from 'react'
import Global from '../components/Global'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Global>
    <Helmet>
      <title>Error 404 | PubliusLogic</title>
    </Helmet>
    <section className='hero'>
      <div className='hero-body'>
        <div className='columns'>
          <div className='column'>
            <div className='is-centered'>
              <div className='column'>
                <h1>404 Not Found</h1>
              </div>
              <h2 className='subtitle'>
                  You just hit a route that doesn&#39;t exist... the
                  sadness.
              </h2>
                Click send the email icon below to send us a email about the error!
            </div>
          </div>
        </div>
      </div>
    </section>
  </Global>
)

export default NotFoundPage
