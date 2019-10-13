import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles.css'

require('typeface-bowlby-one-sc')

const Knockout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <div className='knockout'>
            <svg className='knockout-text-container' width='100%' height='100%'>
              <rect className='knockout-text-bg' width='110%' height='100%' fill='transparent' x='0' y='0' fillOpacity='1' mask='url(#knockout-text)' />
              <mask id='knockout-text'>
                <rect width='100%' height='100%' fill='#fff' x='0' y='0' />
                <text x='50%' y='175' fill='#d64000' textAnchor='middle'>404: NOT FOUND</text>
              </mask>
            </svg>
            <div className='columns is-centered'>
              <div className='column is-10 is-offset-1'>
                <h2 className='subtitle'>
                  You just hit a route that doesn&#39;t exist... the
                  sadness.
                </h2>
                  Click send the email icon below to send us a email about the error!
              </div>
            </div>
          </div>
        </>
      </ThemeProvider>
    </>
  )
}

export default Knockout
