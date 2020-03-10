import React from 'react'
import AdSense from 'react-adsense'
import { AddsDiv } from './styles'

const Adds = () => {
  return (
    <AddsDiv role='note' itemScope='itemScope' itemType='https://schema.org/WPAdBlock'>
      <AdSense.Google
        client='ca-pub-7655495105068461'
        slot='5601054893'
        style={{ display: 'block' }}
        layout='in-article'
        format='fluid'
      />
    </AddsDiv>
  )
}

export default Adds
