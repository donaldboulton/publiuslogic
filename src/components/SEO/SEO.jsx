import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import config from '../../../data/config'
import Facebook from './Facebook'
import Twitter from './Twitter'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ siteTitle, meta_description, cover, pathname, article, slug, node }) => {
  const { site } = useStaticQuery(query)
  const postMeta = node.frontmatter
  let url = config.siteUrl + slug
  let image = postMeta + cover
  let title = config.siteUrl + slug
  let pageDescription = config.siteUrl + slug + meta_description

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
    siteTitle: title || defaultTitle,
    title: title || title,
    description: meta_description || pageDescription,
    image: `${url}${image || image}`,
    url: `${url}${pathname || ''}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    siteTitle: siteTitle,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: defaultDescription,
    description: defaultDescription,
    name: title,
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
      description: seo.description,
      headline: seo.title,
      inLanguage: 'en',
      url: seo.url,
      name: title,
      title: seo.title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: seo.description,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
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
        <meta name='description' content={seo.description} />
        <meta name='image' content={image} />
        <meta name='gatsby-starter' content='PubliusLogic' />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type='application/ld+json'>{JSON.stringify(schemaArticle)}</script>}
        <script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        description={seo.description}
        image={image}
        title={title}
        type={article ? 'article' : 'website'}
        url={url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter title={title} image={image} description={seo.description} username={twitter} />
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  siteTitle: PropTypes.string,
  meta_description: PropTypes.string,
  cover: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
}

SEO.defaultProps = {
  title: null,
  siteTitle: PropTypes.string,
  description: null,
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
        defaultDescription: description
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
