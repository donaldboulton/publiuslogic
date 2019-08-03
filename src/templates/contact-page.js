import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Global from '../components/Global'
import config from '../../data/config'

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const image = frontmatter.cover

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com/contact',
    title: 'Home | PubliusLogic',
    inLanguage: config.siteLanguage,
    mainEntityOfPage: 'https://publiuslogic.com/contact',
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
    <Global pageTitle={frontmatter.title}>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name='description' content={frontmatter.meta_description} />
        <meta name='keywords' content={frontmatter.tags} />
        <meta name='image' content={frontmatter.cover} />
        <meta name='url' content={frontmatter.canonical} />
        <meta property='og:type' content='webpage' />
        <meta property='og:title' content={frontmatter.title} />
        <meta property='og:description' content={frontmatter.meta_description} />
        <meta property='og:image' content={frontmatter.cover} />
        <meta property='og:image:alt' content={frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={frontmatter.canonical} />
        <meta name='rel' content={frontmatter.canonical} />
        <meta name='key' content={frontmatter.canonical} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={frontmatter.title} />
        <meta name='twitter:image' content={frontmatter.cover} />
        <meta name='twitter:description' content={frontmatter.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='canonical' href={frontmatter.canonical} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        cover={frontmatter.cover}
        meta_title={frontmatter.meta_title}
        description={frontmatter.meta_description}
      />
    </Global>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        cover
        canonical
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`
