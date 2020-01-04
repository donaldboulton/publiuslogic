import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { HTMLContent } from '../components/Content'
import { graphql } from 'gatsby'
import { globalHistory } from '@reach/router'
import PhotosPageTemplate from '../components/PhotosPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'
import Image from '../components/PhotosPageTemplate/cover'
import styled from 'styled-components'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
`

const PhotosPage = ({ data, location, timeToRead }) => {
  const { markdownRemark: page } = data
  const rootUrl = 'https://publiuslogic.com'
  const path = page.frontmatter.path
  const url = rootUrl + `/${path}`
  const image = page.frontmatter.cover
  const logo = config.siteLogo
  const pageTags = page.frontmatter.tags
  const pageSlugPath = globalHistory.location.pathName

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: pageSlugPath,
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://publiuslogic.com/photos',
    },
    description: config.siteDescription,
    name: 'Photos | Gallery',
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
    <Layout pageTitle={page.frontmatter.title} location={location} crumbLabel='Photos'>
      <Helmet>
        <title>{`${page.frontmatter.title} | ${config.siteTitle}`}</title>
        <meta name='description' content={page.frontmatter.meta_description} />
        <meta name='keywords' content={pageTags} />
        <meta name='url' content={page.frontmatter.path} />
        <meta property='og:type' content='article' />
        <meta property='og:readingTime' content={timeToRead} />
        <meta property='og:title' content={page.frontmatter.title} />
        <meta property='og:description' content={page.frontmatter.meta_description} />
        <meta property='og:image' content={page.frontmatter.cover} />
        <meta property='og:image:alt' content={page.frontmatter.meta_title} />
        <meta property='og:url' content={page.frontmatter.path} />
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
        <link rel='image_src' href={`${config.siteUrl}${logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        {/* Schema.org tags */}
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/css/lightgallery.min.css' />
      </Helmet>
      <section className='hero'>
        <Image />
      </section>
      <section>
        <div className='column is-10 is-offset-1'>
          <Styledh1>
            {page.frontmatter.title}
          </Styledh1>
          <p>🐱 My Cats</p>
        </div>
      </section>
      <PhotosPageTemplate
        content={page.html}
        contentComponent={HTMLContent}
        cover={page.frontmatter.cover}
        category={page.frontmatter.category}
        date={page.frontmatter.date}
        tweet_id={page.frontmatter.tweet_id}
        meta_title={page.frontmatter.meta_title}
        description={page.frontmatter.meta_description}
        tags={page.frontmatter.tags}
        title={page.frontmatter.title}
      />
    </Layout>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PhotosPage

export const pageQuery = graphql`
  query PhotosPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        cover
        path
        meta_title
        meta_description
        tags
      }
    }    
  }
`
