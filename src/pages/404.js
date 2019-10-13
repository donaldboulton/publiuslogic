import React from 'react'
import KnockOut from '../components/Knockout'
import Global from '../components/Global'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Global>
    <Helmet>
      <title>Error 404 | PubliusLogic</title>
    </Helmet>
    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div className='is-centered'>
                <div className='column'>
                  <KnockOut />
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
      </div>
    </section>
    <section>
      <div className='column is-10 is-offset-1'>
        <div className='is-centered'>
          <h2 className='subtitle'>
                  You just hit a route that doesn&#39;t exist... the
                  sadness.
          </h2>
                Click send the email icon below to send us a email about the error!
        </div>
      </div>
    </section>
  </Global>
)

export default NotFoundPage
