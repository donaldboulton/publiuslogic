import { Link } from 'gatsby'
import React from 'react'
import { FooterContainer, PoweredBy } from './styles'
import bitbucket from '../../../static/img/fav-bitbucket.png'
import react from '../../../static/logos/react.svg'
import netlify from '../../../static/img/logomark.svg'
import config from '../../../_data/config'

export default function FooterContent () {
  return (
    <FooterContainer>
      <span
        css='grid-area: copyright;'
      >
        {config.copyright} - <Link className='a' title='PubliusLogic Home' href='/' rel='noopener noreferrer'>PubliusLogic</Link>
      </span>
      <span
        css='grid-area: source;'
      >
        This site is open<a className='a' rel='me noopener noreferrer' target='_blank' href='https://bitbucket.org/donaldboulton/publiuslogic.com/src/master/'>&nbsp;source</a>
      </span>
      <PoweredBy
        style={{
          display: `flex`,
        }}
      >
        Powered by
        &nbsp;&nbsp;
        <a title='React' href='https://engineering.fb.com/' target='_blank' rel='noopener noreferrer'>
          <img
            className='footer-icon'
            src={react}
            alt='React'
          />
        </a>
            &nbsp;&nbsp;
        <a title='BitBucket' href='https://bitbucket.org/donaldboulton/publiuslogic.com/src/master/README.md' target='_blank' rel='noopener noreferrer'>
          <img
            className='footer-icon'
            src={bitbucket}
            alt='BitBucket'
          />
        </a>
        &nbsp;&nbsp;
        <a title='Netlify' href='https://netlify.com' target='_blank' rel='noopener noreferrer'>
          <img
            className='footer-icon'
            src={netlify}
            alt='Netlify'
          />
        </a>
      </PoweredBy>
    </FooterContainer>
  )
}
