import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Twitter = ({ type, username, title, meta_description, image }) => (
  <Helmet>
    {username && <meta name='twitter:creator' content={username} />}
    <meta name='twitter:card' content={type} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={meta_description} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:image:alt' content={meta_description} />
  </Helmet>
)

export default Twitter

Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
  meta_description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null,
}
