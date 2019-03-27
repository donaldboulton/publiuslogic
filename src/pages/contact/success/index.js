import React from 'react'
import gatsbyastro from './gatsby-astronaut.png'

const SuccessPage = () => {
  return (
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body has-text-centered'>
        <h1 className='title'>
          Success
        </h1>
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
}

export default SuccessPage
