import React from 'react'
import notfound from './404.jpg'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className='hero'>
      <div>
        <img
          src={notfound}
          alt='GitHub'
        />
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section is-centered'>
              <h1 className='title'>
                404: NOT FOUND
              </h1>
              <div className='columns'>
                <div className='column'>
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
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
