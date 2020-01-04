import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { HTMLContent } from '../components/Content'
import { graphql } from 'gatsby'
import PricingPageTemplate from '../components/PricingPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'

const PricingPage = ({ data, location }) => {
  const { markdownRemark: page } = data
  const rootUrl = 'https://publiuslogic.com'
  const path = page.frontmatter.path
  const url = rootUrl + `/${path}`
  const image = page.frontmatter.cover
  const author = config.author

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com/pricing',
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://publiuslogic.com/pricing',
    },
    description: config.siteDescription,
    name: 'Pricing | PubliusLogic',
    author: {
      '@type': 'Person',
      name: 'donaldboulton',
    },
    copyrightHolder: {
      '@type': 'Person',
      name: 'donaldboulton',
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: 'donboulton',
    },
    publisher: {
      '@type': 'Person',
      name: 'donboulton',
    },
    datePublished: '2019-07-12T10:30:00+01:00',
    dateModified: '2019-07-12T10:30:00+01:00',
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  return (
    <Layout pageTitle={page.frontmatter.title} location={location}>
      <Helmet>
        <title>{page.frontmatter.meta_title}</title>
        <meta name='description' content={page.frontmatter.meta_description} />
        <meta name='keywords' content={page.frontmatter.tags} />
        <meta name='image' content={page.frontmatter.cover} />
        <meta name='url' content={url} />
        <meta name='author' content={author} />
        <meta property='og:type' content='webpage' />
        <meta property='og:title' content={page.frontmatter.title} />
        <meta property='og:description' content={page.frontmatter.meta_description} />
        <meta property='og:image' content={page.frontmatter.cover} />
        <meta property='og:image:alt' content={page.frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={url} />
        <meta name='rel' content={url} />
        <meta name='key' content={url} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={page.frontmatter.title} />
        <meta name='twitter:image' content={page.frontmatter.cover} />
        <meta name='twitter:description' content={page.frontmatter.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='canonical' href={url} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <PricingPageTemplate
        contentComponent={HTMLContent}
        content={page.html}
        title={page.frontmatter.title}
        cover={page.frontmatter.cover}
        meta_title={page.frontmatter.meta_title}
        description={page.frontmatter.meta_description}
        pricing={page.frontmatter.pricing}
      />
    </Layout>
  )
}

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricingPage

export const pageQuery = graphql`
  query PricingPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html  
      frontmatter {
        title
        cover
        path
        meta_title
        meta_description
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
