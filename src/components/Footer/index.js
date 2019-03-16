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
          <p>Powered by <a href='https://www.gatsbyjs.org'><strong>Gatsby</strong></a> and <a href='https://www.netlifycms.org'><strong>Netlify CMS&nbsp;</strong></a> | <a href='https://www.netlify.com/docs/identity/'><strong>Netlify Identity&nbsp; |</strong></a><a href='https://github.com/donaldboulton/publiuslogic'><strong>&nbsp;GitHub Repository</strong></a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
