import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, useStaticQuery, graphql } from 'gatsby'
import config from '../../../data/config'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ data, siteTitle, canonical, pathname, article, keywords, meta, meta_description, node, overrideTitle = false }) => {
  const { site } = useStaticQuery(query)

  const { markdownRemark: post } = data
  const url = config.siteUrl
  let postTitle = post.frontmatter.title
  let postUrl = post.frontmatter.canonical
  let postImage = post.frontmatter.cover
  let logo = config.logo
  let pageTitle = post.frontmatter.title
  let tweetId = post.frontmatter.tweet_id

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
    description: config.siteDescription || defaultDescription,
    image: `${url}${logo || defaultCover}`,
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
    mainEntityOfPage: seo.url,
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
          url: `${seo.url}${logo}`,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: post.frontmatter.meta_description,
      headline: post.frontmatter.meta_title,
      inLanguage: 'en',
      url: postUrl,
      name: postTitle,
      image: {
        '@type': 'ImageObject',
        url: postImage,
      },
      mainEntityOfPage: postUrl,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': post.frontmatter.canonical,
        name: post.frontmatter.title,
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
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          post.frontmatter.meta_description || meta_description
        const siteTitle = 'PubliusLogic'
        return (
          <Helmet
            htmlAttributes={{ siteLanguage }}
            title={postTitle}
            titleTemplate={overrideTitle ? `%s` : `%s | ${siteTitle}`}
            link={
              canonical
                ? [{ rel: 'canonical', key: canonical, href: canonical }]
                : []
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: postTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:url`,
                content: postUrl,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.twitterId,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: postTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: postImage,
              },
              {
                name: `tweet_id:tweet_id`,
                content: tweetId,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

export default SEO

SEO.propTypes = {
  siteTitle: PropTypes.string,
  meta_description: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
  canonical: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

SEO.defaultProps = {
  title: null,
  siteTitle: null,
  cover: null,
  pathname: null,
  article: false,
  node: null,
  canonical: null,
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
        twitterId
        facebook
      }
    }
  }
`

const detailsQuery = graphql`
  query PostsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }      
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        tweet_id
        categorys
        meta_title
        meta_description
        tags
        canonical
      }
    }
  }
`
