import React from 'react'
import AdSense from 'react-adsense'

const Adds = () => {
  return (
    <div className='columns is-vcentered' itemScope='itemScope' itemType='https://schema.org/WPAdBlock'>
      <div role='note' className='add-block clear-both column' itemScope='itemScope' itemType='https://schema.org/WPAdBlock'>
        <AdSense.Google
          client='ca-pub-7655495105068461'
          slot='5601054893'
          style={{ display: 'block' }}
          layout='in-article'
          format='fluid'
        />
      </div>
    </div>
  )
}

export default Adds
