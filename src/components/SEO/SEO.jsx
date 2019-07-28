import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import config from '../../../data/config'

const SEO = ({ siteTitle, title, meta_description, postNode, canonical, pathname, article, postData, node }) => {
  const { site } = useStaticQuery(query)

  const postMeta = postData || {}

  const URL = `${config.siteUrl}${pathname}`
  const isBlog = URL === `${config.siteUrl}/blog`
  const pageTitle = canonical + postMeta.title
  const pageDescription = canonical + postMeta.meta_description
  let image
  let imageWidth
  let imageHeight

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultCover,
      headline,
      siteLanguage,
      author,
    },
  } = site

  const seo = {
    name: pageTitle || defaultTitle,
    description: postMeta.meta_description || defaultDescription,
    image: `${site.siteUrl}${defaultCover || defaultCover}`,
    url: `${URL}${pathname || ''}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': isBlog ? 'Blog' : 'WebPage',
    url: seo.url,
    title: seo.title,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: URL,
    description: seo.description,
    name: siteTitle,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: '2019-07-12T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  // Initial breadcrumb list

  let schemaArticle = null

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/sitemap`,
        name: 'Sitemap',
      },
      position: 2,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/blog`,
        name: 'Blog',
      },
      position: 3,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/contact`,
        name: 'Contact',
      },
      position: 4,
    },
  ]

  if (article) {
    const postMeta = postNode.data
    const postImage = postMeta.cover.localFile.childImageSharp.resize
    image = `${config.siteUrl}${postImage.src}`
    imageWidth = postImage.width
    imageHeight = postImage.height
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${config.siteUrl}${config.siteLogo}`,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: pageDescription,
      headline: seo.title,
      inLanguage: 'en',
      url: URL,
      name: pageTitle,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: URL,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': URL,
        name: title,
      },
      position: 5,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.siteTitle}>
        <html lang={config.siteLanguage} />
        <meta name='description' content={meta_description} />
        <meta name='image' content={image} />
        <meta name='content' content={meta_description} />
        <meta name='gatsby-starter' content='PubliusLogic' />
        <link rel='apple-touch-icon' href='/img/apple-touch-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/img/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/img/favicon-16x16.png' />
        <link rel='mask-icon' href='/img/safari-pinned-tab.svg' color='#d64000' />
        <meta name='msapplication-TileColor' content='#d64000' />
        <meta property='og:locale' content={config.siteLanguage} />
        <meta property='og:site_name' content={config.facebook} />
        <meta property='og:url' content={URL} />
        <meta property='og:type' content={article ? 'article' : 'website'} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={meta_description} />
        <meta property='og:image' content={image} />
        <meta property='og:image:alt' content={meta_description} />
        <meta property='og:image:width' content={imageWidth} />
        <meta property='og:image:height' content={imageHeight} />
        <meta property='og:see_also' content='https://github.com/donaldboulton' />
        <meta property='og:see_also' content='https://youtube.de/donboulton' />
        <meta property='og:see_also' content='https://twitter.com/donboulton' />
        <link type='text/plain' href={`${config.siteUrl}/humans.txt`} rel='author' />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type='application/ld+json'>{JSON.stringify(schemaArticle)}</script>}
        <script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
      </Helmet>
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  siteTitle: PropTypes.string,
  meta_description: PropTypes.string,
  cover: PropTypes.string,
  postNode: PropTypes.object,
  article: PropTypes.bool,
  node: PropTypes.object,
  canonical: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  siteTitle: null,
  meta_description: null,
  cover: null,
  pathname: null,
  postNode: null,
  article: false,
  node: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        siteTitle
        defaultTitle: siteTitle
        defaultDescription: siteDescription
        defaultCover: logo
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`
