import React from 'react'
import Helmet from 'react-helmet'
import Content from '../Content'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import urljoin from 'url-join'
import config from '../../../data/config'
import Facebook from './Facebook'
import Twitter from './Twitter'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ siteTitle, title, meta_description, article, contentComponent, node }) => {
  const { site } = useStaticQuery(query)
  
  const { postNode, postPath } = this.props
  const postMeta = postNode.frontmatter
  const content = contentComponent || Content
  let url = urljoin(config.siteUrl, config.pathPrefix)
  let postURL = urljoin(config.siteUrl, config.pathPrefix, postPath)
  let image = postMeta.cover
  let pageTitle = postMeta + title
  let description = postMeta + meta_description

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
    siteTitle: siteTitle || defaultTitle,
    siteDescription: title || defaultDescription,
    title: pageTitle || title,
    description: description,
    image: defaultCover,
    url: url,
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
    mainEntityOfPage: content,
    description: description,
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
          url: `${url}${defaultCover}`,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: description,
      headline: seo.title,
      inLanguage: 'en',
      url: postURL,
      name: title,
      title: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: content,
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
        <meta name='description' content={description} />
        <meta name='image' content={image} />
        <meta name='content' content={content} />
        <meta name='gatsby-starter' content='PubliusLogic' />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type='application/ld+json'>{JSON.stringify(schemaArticle)}</script>}
        <script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        description={description}
        image={image}
        title={title}
        type={article ? 'article' : 'website'}
        url={url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter title={title} image={image} description={description} username={twitter} />
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  siteTitle: PropTypes.string,
  meta_description: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
}

SEO.defaultProps = {
  title: null,
  content: null,
  contentComponent: null,
  siteTitle: null,
  meta_description: null,
  article: false,
  node: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
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
