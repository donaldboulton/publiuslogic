import { Link } from 'gatsby'
import React from 'react'
import { FooterContainer, PoweredBy } from './styles'
import github from '../../../static/img/github.svg'
import gatsby from '../../../static/img/gatsby.svg'
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
        This site is open<a className='a' rel='me noopener noreferrer' target='_blank' href='https://github.com/donaldboulton/publiuslogic'>&nbsp;source</a>
      </span>
      <PoweredBy
        style={{
          display: `flex`,
        }}
      >
        Powered by
        &nbsp;&nbsp;
        <a title='Gatsby' href='https://www.gatsbyjs.org/' target='_blank' rel='noopener noreferrer'>
          <img
            className='footer-icon'
            src={gatsby}
            alt='Gatsby'
          />
        </a>
            &nbsp;&nbsp;
        <a title='Github' href='https://github.com/donaldboulton/publiuslogic' target='_blank' rel='noopener noreferrer'>
          <img
            className='footer-icon'
            src={github}
            alt='GitHub'
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
