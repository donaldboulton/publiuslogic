import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Twitter = ({ type, username, title, description, image }) => (
  <Helmet>
    {username && <meta name='twitter:creator' content={username} />}
    <meta name='twitter:card' content={type} />
    <meta name='twitter:title' content={title} />
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
