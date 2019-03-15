import React from 'react'
import config from '../../../data/config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered social-links'>
          <p>
            {config.copyright}
          </p>
          <p>Powered by <a href='https://www.gatsbyjs.org'><strong>Gatsby</strong></a> and <a href='https://www.netlifycms.org'><strong>Netlify CMS</strong></a> | <a href='https://github.com/v4iv/gatsby-starter-business'><strong>GitHub Repository</strong></a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
