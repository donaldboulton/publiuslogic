import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../../../_data/config'

const Meta = props => {
  const { data } = props
  // Default values
  const title = data.title || null
  const path = data.path || ''
  const rootUrl = 'https://publiuslogic.com'
  const buildTime = data.frontmatter.date
  const postImage = data.frontmatter.cover
  const imageWidth = '100%'
  const imageHeight = '400px'
  const body = data.frontmatter.meta_description
  const postTitle = data.frontmatter.title
  const alternativeHeadline = data.frontmatter.meta_title
  const pageDescription = data.frontmatter.meta_description
  const pageTags = data.frontmatter.tags
  const url = rootUrl + `/${path}`
  const logo = config.siteLogo
  // schema.org via JSON-LD
  const articleSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'TechArticle',
    '@id': rootUrl + `/${path}`,
    name: 'Publius Logic',
    proficiencyLevel: 'Expert',
    image: {
      '@type': 'ImageObject',
      url: postImage,
    },
    sameAs: rootUrl + `/${path}`,
    publisher: {
      '@type': 'Organization',
      name: 'PubliusLogic',
      logo: {
        '@type': 'ImageObject',
        url: logo,
        width: '450px',
        height: '450px',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '720 S. Rockwell',
        addressLocality: 'OKC Ok',
        addressRegion: 'OK',
        postalCode: '73128',
        addressCountry: 'US',
      },
      telephone: '+19033361494',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.4584,
        longitude: 97.6343,
      },
    },
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': rootUrl + `/${path}`,
    },
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    pageName: postTitle,
    author: {
      '@type': 'Person',
      name: 'donboulton',
    },
    copyrightHolder: {
      '@type': 'Person',
      name: 'donaldboulton',
    },
    copyrightYear: config.copyrightYear,
    creator: {
      '@type': 'Person',
      name: 'donboulton',
    },
    alternativeHeadline: alternativeHeadline,
    datePublished: buildTime,
    dateModified: buildTime,
    description: pageDescription,
    headline: postTitle,
    keywords: pageTags,
    inLanguage: 'en_US',
    articleBody: body,
  }

  return (
    <Helmet>
      <title>{`${data.frontmatter.title} | ${config.siteTitle}`}</title>
      <meta name='description' content={data.frontmatter.meta_description} />
      <meta name='keywords' content={pageTags} />
      <meta name='url' content={url} />
      <meta property='og:type' content='article' />
      <meta property='og:readingTime' content={data.timeToRead} />
      <meta property='og:title' content={data.frontmatter.title} />
      <meta property='og:description' content={data.frontmatter.meta_description} />
      <meta property='og:image' content={postImage} />
      <meta property='og:image:alt' content={data.frontmatter.meta_title} />
      <meta property='og:image:width' content={imageWidth} />
      <meta property='og:image:height' content={imageHeight} />
      <meta property='og:url' content={url} />
      <meta name='rel' content={url} />
      <meta name='key' content={url} />
      <meta name='twitter:author' content='donboulton' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={data.frontmatter.title} />
      <meta name='twitter:image' content={postImage} />
      <meta name='twitter:description' content={data.frontmatter.meta_description} />
      <meta name='twitter:widgets:autoload' content='off' />
      <meta name='twitter:widgets:theme' content='dark' />
      <meta name='twitter:widgets:link-color' content='#d64000' />
      <meta name='twitter:widgets:border-color' content='#000000' />
      <meta name='twitter:dnt' content='on' />
      <link rel='canonical' href={`${rootUrl}${path}`} />
      <link rel='image_src' href={`${rootUrl}${logo}`} />
      <link rel='me' href='https://twitter.com/donboulton' />
      {/* Schema.org tags */}
      <script type='application/ld+json'>
        {JSON.stringify(articleSchemaOrgJSONLD)}
      </script>
      <script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' crossOrigin='anonymous' />
    </Helmet>
  )
}

export default Meta
