import React from 'react'
import notfound from './404.jpg'
import Global from '../components/Global'

const NotFoundPage = () => (
  <Global>
    <section className='hero'>
      <div className='columns'>
        <div className='column is-one-third'>
          <img
            src={notfound}
            alt='GitHub'
          />
        </div>
      </div>
    </section>
  </Global>
)

export default NotFoundPage
