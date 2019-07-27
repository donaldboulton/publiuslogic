import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import config from '../../../data/config'
import Facebook from './Facebook'
import Twitter from './Twitter'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ siteTitle, title, meta_description, cover, canonical, pathname, article, slug, node }) => {
  const { site } = useStaticQuery(query)

  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  const url = config.siteUrl + realPrefix + slug
  const image = canonical + cover
  const pageTitle = config.siteUrl + realPrefix + title
  const pageDescription = config.siteUrl + realPrefix + meta_description

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultCover,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site

  const seo = {
    name: pageTitle || defaultTitle,
    description: meta_description || defaultDescription,
    image: `${url}${image || image}`,
    url: `${url}${pathname || ''}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: seo.url,
    title: seo.title,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: url,
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
      url: `${url}${defaultCover}`,
    },
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ]

  let schemaArticle = null

  if (article) {
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
          url: `${url}${image}`,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: pageDescription,
      headline: seo.title,
      inLanguage: 'en',
      url: canonical,
      name: pageTitle,
      image: {
        '@type': 'ImageObject',
        url: `${canonical}${image}`,
      },
      mainEntityOfPage: url,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': url,
        name: pageTitle,
      },
      position: 2,
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
        <html lang={siteLanguage} />
        <meta name='description' content={pageDescription} />
        <meta name='image' content={image} />
        <meta name='content' content={pageDescription} />
        <meta name='gatsby-starter' content='PubliusLogic' />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type='application/ld+json'>{JSON.stringify(schemaArticle)}</script>}
        <script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        description={pageDescription}
        image={image}
        title={title}
        type={article ? 'article' : 'website'}
        url={url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter title={title} image={image} description={pageDescription} username={twitter} />
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  siteTitle: PropTypes.string,
  meta_description: PropTypes.string,
  cover: PropTypes.string,
  pathname: PropTypes.string,
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
