import React from 'react'
import config from '../../../data/config'
import Helmet from 'react-helmet'

const SE0 = ({ title, meta_title, meta_description, cover, slug, isBlogPost, postData }) => {
  const postMeta = postData || {}
  let postURL = config.siteUrl + slug
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  let image = config.siteUrl + realPrefix + cover
  const datePublished = isBlogPost ? postMeta.date : postMeta.date

  const breadcrumbSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': config.siteUrl,
          name: 'Home',
          image: config.siteUrl + '/icons/icon-512x512.png',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': postURL,
          name: title,
          image,
        },
      },
    ],
  }

  const blogPostingSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    url: postURL,
    name: title,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    headline: title,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postURL,
    },
    'author': {
      '@type': 'Person',
      'name': config.userName,
    },
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    datePublished: datePublished,
    dateModified: datePublished,
    publisher: {
      '@type': 'Organization',
      name: config.siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: config.siteUrl + '/icons/icon-512x512.png',
      },
    },
    description: meta_description,
  }

  return (
    <Helmet>
      <title>{meta_title}</title>
      {/* General tags */}
      <meta name='description' content={meta_description} />
      <meta name='image' content={cover} />
      {/* Schema.org tags */}
      <script type='application/ld+json'>
        {JSON.stringify(breadcrumbSchemaOrgJSONLD)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(blogPostingSchemaOrgJSONLD)}
      </script>
      {/* OpenGraph tags */}
      <meta property='og:url' content={postURL} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={meta_title} />
      <meta property='og:description' content={meta_description} />
      <meta property='og:image' content={cover} />
      <meta
        property='fb:app_id'
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />
      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:creator'
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name='twitter:title' content={meta_title} />
      <meta name='twitter:description' content={meta_description} />
      <meta name='twitter:image' content={cover} />
      <meta name='twitter:widgets:autoload' content='off' />
      <meta name='twitter:widgets:theme' content='dark' />
      <meta name='twitter:widgets:link-color' content='#d64000' />
      <meta name='twitter:widgets:border-color' content='#000000' />
      <meta name='twitter:dnt' content='on' />
      <link rel='me' href='https://twitter.com/donboulton' />
      <meta name='geo.placename' content='720 S Rockwell Ave, Oklahoma City, OK 73128, USA' />
      <meta name='geo.position' content='35.4582062;-97.6338859' />
      <meta name='geo.region' content='US-Oklahoma' />
      <meta name='ICBM' content='35.4582062, -97.6338859' />
      <meta name='slack-app-id' content='AGT7BS79R' />
    </Helmet>
  )
}

export default SE0
