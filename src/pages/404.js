import React from 'react'
import gatsbyastro from './gatsby-astronaut.png'

const NotFoundPage = () => (
  <section className='hero is-primary is-bold is-medium'>
    <div className='hero-body has-text-centered'>
      <h1 className='title'>
        404 Not Fount
      </h1>
      <h2 className='subtitle'>
        You just hit a route that doesn&#39;t exist... the
        sadness.
      </h2>
      <div className='columns has-text-centered'>
        <div className='column'>
          <img
            src={gatsbyastro}
            alt='GitHub'
          />
        </div>
      </div>
    </div>
  </section>
)

export default NotFoundPage
