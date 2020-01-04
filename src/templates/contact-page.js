import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PostCover from '../components/PostCover'
import styled from 'styled-components'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  text-transform: uppercase;
  z-index: 22;
`

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data
  const image = post.frontmatter.cover
  const author = config.author
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  let logo = config.siteLogo
  const url = post.frontmatter.slug

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
    <Layout pageTitle={post.frontmatter.title}>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
        <meta name='keywords' content={post.frontmatter.tags} />
        <meta name='image' content={post.frontmatter.cover} />
        <meta name='url' content={post.frontmatter.slug} />
        <meta name='author' content={author} />
        <meta property='og:type' content='webpage' />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={post.frontmatter.cover} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={url} />
        <meta name='rel' content={post.frontmatter.slug} />
        <meta name='key' content={post.frontmatter.slug} />
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
        <link rel='canonical' href={post.frontmatter.slug} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section>
        <div className='column is-10 is-offset-1'>
          <Styledh1>
            {post.frontmatter.title}
          </Styledh1>
          <p>
          🔥 Social Contacts see <a className='a' rel='noopener noreferrer' target='_blank' href='https://github.com/donaldboulton/publiuslogic/issues'>GitHub Issues</a> or <a className='a' rel='noopener noreferrer' target='_blank' href='https://twitter.com/messages/compose?recipient_id=105217183'>Twitter Message</a>
          </p>
        </div>
      </section>
      <ContactPageTemplate
        content={post.html}
        cover={post.frontmatter.cover}
        meta_title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        cover
        subtitle
        meta_title
        meta_description
        tags
        heading
      }
    }
  }
`
