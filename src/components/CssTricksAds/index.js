import React from 'react'
import csstricks from '../../../static/img/css-tricks-star-164.png'

const CssTricksAds = () => {
  return (
    <>
      <div className='card card3'>
        <div className='message-body'>
          <div>
            <a title='Css Tricks' href='https://css-tricks.com/' target='_blank' rel='noopener noreferrer'>
              <img
                className='icon-logo-star'
                src={csstricks}
                alt='Css Tricks'
              />
            </a>
          </div>
          <div>
            <a title='Netlify' href='https://netlify.com' target='_blank' rel='noopener noreferrer'>
              <strong>Css Tricks Inspiration's</strong>
            </a>
          </div>
          <p><h3 className='a'>Front-End UI, Javascript & Functions, HTML Tips, and More!</h3></p>
        </div>
      </div>
    </>
  )
}

export default CssTricksAds

