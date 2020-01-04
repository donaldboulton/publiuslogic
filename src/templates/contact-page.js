import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { HTMLContent } from '../components/Content'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'
import Image from '../components/ContactPageTemplate/image'
import styled from 'styled-components'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
`

const ContactPage = ({ data, location }) => {
  const { markdownRemark: page } = data
  const image = page.frontmatter.cover
  const author = config.author
  const logo = config.siteLogo
  const rootUrl = 'https://publiuslogic.com'
  const path = page.frontmatter.path
  const url = rootUrl + `/${path}`

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: url,
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://publiuslogic.com/contact',
    },
    description: config.siteDescription,
    name: 'Contact | PubliusLogic',
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
      '@type': 'Organization',
      name: 'donaldboulton',
      logo: {
        '@type': 'ImageObject',
        url: logo,
        width: '450px',
        height: '450px',
      },
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
        <meta name='rel' content={page.frontmatter.path} />
        <meta name='key' content={page.frontmatter.path} />
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
      <section className='hero'>
        <Image />
      </section>
      <section>
        <div className='column is-10 is-offset-1'>
          <Styledh1>
            {page.frontmatter.title}
          </Styledh1>
          <p>
          🔥 Social Contacts see <a className='a' rel='noopener noreferrer' target='_blank' href='https://github.com/donaldboulton/publiuslogic/issues'>GitHub Issues</a> or <a className='a' rel='noopener noreferrer' target='_blank' href='https://twitter.com/messages/compose?recipient_id=105217183'>Twitter Message</a>
          </p>
        </div>
      </section>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        content={page.html}
        cover={page.frontmatter.cover}
        meta_title={page.frontmatter.meta_title}
        description={page.frontmatter.meta_description}
        tags={page.frontmatter.tags}
        title={page.frontmatter.title}
      />
    </Layout>
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

export const pageQuery = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html  
      frontmatter {
        title
        cover
        path
        subtitle
        meta_title
        meta_description
        tags
        heading
      }
    }
  }
`
