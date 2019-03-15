import React from 'react'

const Knockout = () => {
  return (
    <div className='knockout'>

      <svg className='knockout-text-container' width='100%' height='100%'>

        <rect className='knockout-text-bg' width='100%' height='100%' fill='#1d1d1d' x='0' y='0' fillOpacity='1' mask='url(#knockout-text)' />

        <mask id='knockout-text'>
          <rect width='100%' height='100%' fill='#fff' x='0' y='0' />
          <text x='50%' y='100' fill='#1d1d1d' textAnchor='middle'>Mama Said</text>
          <text x='50%' y='175' fill='#1d1d1d' textAnchor='middle'>Knock You</text>
          <text x='50%' y='365' fill='#1d1d1d' textAnchor='middle'>Out</text>
        </mask>

      </svg>

    </div>
  )
}

export default Knockout
