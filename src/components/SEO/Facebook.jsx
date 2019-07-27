import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import config from '../../../data/config'

const Facebook = ({ url, name, type, title, siteTitle, locale }) => (
  <Helmet>
    {name && <meta property='og:site_name' content={siteTitle} />}
    <meta
      property='fb:app_id'
      content={config.siteFBAppID ? config.siteFBAppID : ''}
    />
    <meta property='og:url' content={url} />
    <meta property='og:type' content='article' />
    <meta property='og:description' content={config.siteDescription} />
    <meta property='og:locale' content={locale} />
    <meta property='og:type' content={type} />
    <meta property='og:title' content={title} />
  </Helmet>
)

export default Facebook

Facebook.propTypes = {
  url: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  type: PropTypes.string,
  siteTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
}

Facebook.defaultProps = {
  type: 'website',
  name: null,
}
