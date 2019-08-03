import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import PrivacyPageTemplate from '../components/PrivacyPageTemplate'
import Global from '../components/Global'
import config from '../../data/config'

const PrivacyPage = ({ data }) => {
  const { markdownRemark: post } = data
  const image = post.frontmatter.cover

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com/privacy',
    title: 'Home | PubliusLogic',
    inLanguage: config.siteLanguage,
    mainEntityOfPage: 'https://publiuslogic.com/privacy',
    description: config.siteDescription,
    name: config.siteTitle,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: config.author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: config.author,
    },
    publisher: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: '2019-07-12T10:30:00+01:00',
    dateModified: '2019-07-12T10:30:00+01:00',
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  return (
    <Global pageTitle={post.frontmatter.title}>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
        <meta name='keywords' content={post.frontmatter.tags} />
        <meta name='image' content={post.frontmatter.cover} />
        <meta name='url' content={post.frontmatter.canonical} />
        <meta property='og:type' content='webpage' />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={post.frontmatter.cover} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={post.frontmatter.canonical} />
        <meta name='rel' content={post.frontmatter.canonical} />
        <meta name='key' content={post.frontmatter.canonical} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post.frontmatter.title} />
        <meta name='twitter:image' content={post.frontmatter.cover} />
        <meta name='twitter:description' content={post.frontmatter.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='canonical' href={post.frontmatter.canonical} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <PrivacyPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        cover={post.frontmatter.cover}
        content={post.html}
      />
    </Global>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PrivacyPage

export const privacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        cover
        canonical
        meta_title
        meta_description
        tags
      }
    }
  }
`
