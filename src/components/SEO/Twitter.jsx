import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import config from '../../../_data/config'

const Twitter = ({ username, title, image }) => (
  <Helmet>
    {username && <meta name='twitter:creator' content={config.userTwitter} />}
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:description' content={config.siteDescription} />
    <meta name='twitter:widgets:autoload' content='off' />
    <meta name='twitter:widgets:theme' content='dark' />
    <meta name='twitter:widgets:link-color' content='#d64000' />
    <meta name='twitter:widgets:border-color' content='#000000' />
    <meta name='twitter:dnt' content='on' />
    <link rel='me' href='https://twitter.com/donboulton' />
  </Helmet>
)

export default Twitter

Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null,
}
