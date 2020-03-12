import React from 'react'
import AdSense from 'react-adsense'

const Adds = () => {
  return (
    <div role='note' className='add-block clear-both' itemScope='itemScope' itemType='https://schema.org/WPAdBlock'>
      <AdSense.Google
        client='ca-pub-7655495105068461'
        slot='5601054893'
        style={{ display: 'block' }}
        layout='display'
        format='fluid'
      />
    </div>
  )
}

export default Adds
