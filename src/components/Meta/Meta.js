import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../../_data/config'

const Meta = props => {
  const { data } = props
  // Default values
  const title = data.title || null
  const path = data.path || ''
  const rootUrl = 'https://publiuslogic.com'
  const buildTime = data.frontmatter.date
  const postImage = data.frontmatter.cover
  const imageWidth = postImage.width
  const imageHeight = postImage.height
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
    '@type': 'LocalBusiness',
    '@id': rootUrl + `/${path}`,
    name: 'Publius Logic',
    image: {
      '@type': 'ImageObject',
      url: postImage,
    },
    sameAs: rootUrl + `/${path}`,
    priceRange: '$0.1',
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
    publisher: {
      '@type': 'Organization',
      name: 'donaldboulton',
      logo: {
        '@type': 'ImageObject',
        url: logo,
        width: '450px',
        height: '450px',
      },
    },
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': rootUrl + `/${path}`,
    },
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    pageName: title,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data.rating.ratingValue,
      bestRating: '5',
      worstRating: '1',
      ratingCount: data.rating.ratingCount,
    },
    review: {
      '@type': 'Review',
      url: 'https://publiuslogic.com/blog/netlify-cms',
      author: {
        '@type': 'Person',
        name: 'Lisa Kennedy',
        sameAs: 'https://plus.google.com/114108465800532712602',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Denver Post',
        sameAs: 'http://www.denver.com',
      },
      datePublished: '2019-03-13T20:00',
      description: 'Cms From Hell.',
      inLanguage: 'en',
      reviewRating: {
        '@type': 'Rating',
        worstRating: '1',
        bestRating: '5',
        ratingValue: data.rating.ratingValue,
      },
    },
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
      <meta property='og:image' content={logo} />
      <meta property='og:image:alt' content={data.frontmatter.meta_title} />
      <meta property='og:image:width' content={imageWidth} />
      <meta property='og:image:height' content={imageHeight} />
      <meta property='og:url' content={data.frontmatter.path} />
      <meta name='rel' content={url} />
      <meta name='key' content={url} />
      <meta name='twitter:author' content='donboulton' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={data.frontmatter.title} />
      <meta name='twitter:image' content={logo} />
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
    </Helmet>
  )
}

export default Meta
