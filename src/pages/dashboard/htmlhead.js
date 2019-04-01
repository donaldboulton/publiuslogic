import React from 'react'
import Helmet from 'react-helmet'
import config from '../../../data/config'

export const HelmetMarkup = ({ title }) => {
  const pageTitle = title || config.defaultTitle
  return (
    <Helmet
      title={pageTitle}
      defaultTitle={pageTitle}
      titleTemplate={config.titleTemplate}
    >
      <html lang={config.lang} />
      <meta itemProp='description' content={config.description} />
      <meta itemProp='image' content={config.icon} />
      <meta itemProp='name' content={pageTitle} />
      <meta name='description' content={config.description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={config.twitterCreator} />
      <meta name='twitter:description' content={config.description} />
      <meta name='twitter:image' content={config.icon} />
      <meta name='twitter:image:alt' content={config.defaultTitle} />
      <meta name='twitter:title' content={config.defaultTitle} />
      <meta property='og:description' content={config.description} />
      <meta property='og:image' content={config.icon} />
      <meta property='og:locale' content={config.locale} />
      <meta property='og:title' content={config.defaultTitle} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={config.siteUrl} />
    </Helmet>
  )
}

export const HtmlHead = props => (
  <HelmetMarkup {...props} />
)

export default HtmlHead
