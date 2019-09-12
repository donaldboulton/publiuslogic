import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles.css'

require('typeface-bowlby-one-sc')

const Knockout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <section className='hero'>
            <div className='knockout'>
              <svg className='knockout-text-container' width='100%' height='100%'>
                <rect className='knockout-text-bg' width='100%' height='100%' fill='#1d1d1d' x='0' y='0' fillOpacity='1' mask='url(#knockout-text)' />
                <mask id='knockout-text'>
                  <rect width='100%' height='100%' fill='#fff' x='0' y='0' />
                  <text x='50%' y='100' fill='#000' textAnchor='middle'>404: NOT FOUND</text>
                  <text x='50%' y='175' fill='#d64000' textAnchor='middle'>Dont Use</text>
                  <text x='50%' y='365' fill='#8e0436' textAnchor='middle'>Plugins</text>
                </mask>
              </svg>
            </div>
          </section>
        </>
      </ThemeProvider>
    </>
  )
}

export default Knockout
