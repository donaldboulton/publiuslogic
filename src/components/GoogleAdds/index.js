import React from 'react'
import Helmet from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const Adds = () => {
  return (
    <div className='columns is-vcentered'>
      <div className='column is-10 is-offset-1'>
        <div className='content'>
          <div role='note' className='add-block clear-both' itemScope itemType='https://schema.org/WPAdBlock'>
            <Helmet>
              <OutboundLink href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
              <meta itemProp='name' content='publiuslogic.com' />
              <meta itemProp='description' content='Support PubliusLogic by using AdSense and other advertisements.' />
              <ins className='adsbygoogle'
                style='display:block'
                data-ad-client='ca-pub-7655495105068461'
                data-ad-slot='5601054893'
                data-ad-format='auto' />
                (adsbygoogle = window.adsbygoogle || []).push({});
            </Helmet>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adds
