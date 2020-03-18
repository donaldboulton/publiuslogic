import React from 'react'
import netlify from '../../../static/img/logomark.svg'

const NetlifyAds = () => {
  return (
    <>
      <div className='card card3'>
        <div className='message-body'>
          <div>
            <a title='Netlify' href='https://netlify.com' target='_blank' rel='noopener noreferrer'>
              <img
                src={netlify}
                alt='Netlify'
              />
            </a>
          </div>
          <div>
            <a title='Netlify' href='https://netlify.com' target='_blank' rel='noopener noreferrer'>
              <strong>Powered By Netlify</strong>
            </a>
          </div>
          <p><h3 className='a'>Continuous Deployment, Lambda Functions, FaunaDB Backend!</h3></p>
        </div>
      </div>
    </>
  )
}

export default NetlifyAds

