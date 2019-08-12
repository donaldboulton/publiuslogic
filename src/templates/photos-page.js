import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PhotosPageTemplate from '../components/PhotosPageTemplate'
import Global from '../components/Global'
import config from '../../_data/config'
import PostCover from '../components/PostCover'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 38px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background: radial-gradient(
    circle farthest-corner at center center,
    #8e0436,
    #d64000
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

const PhotosPage = ({ data }) => {
  const { markdownRemark: post, timeToRead } = data
  const image = post.frontmatter.cover
  const postNode = data.markdownRemark
  const postImage = post.frontmatter.cover
  const imageWidth = postImage.width
  const imageHeight = postImage.height
  const coverHeight = '100%'

  let logo = config.siteLogo
  let pageTags = post.frontmatter.tags

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com/photos',
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
      'logo': {
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
    <Global pageTitle={post.frontmatter.title}>
      <Helmet>
        <title>{`${post.frontmatter.title} | ${config.siteTitle}`}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
        <meta name='keywords' content={pageTags} />
        <meta name='url' content={post.frontmatter.canonical} />
        <meta property='og:type' content='article' />
        <meta property='og:timeToRead' content={timeToRead} />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={post.frontmatter.cover} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content={imageWidth} />
        <meta property='og:image:height' content={imageHeight} />
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
        <link rel='image_src' href={`${config.siteUrl}${logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        {/* Schema.org tags */}
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <Styledh1 className='hero-body'>
                  {post.frontmatter.title}
                </Styledh1>
                <p>✨ My Cats</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PhotosPageTemplate
        title={post.frontmatter.title}
        cover={post.frontmatter.cover}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
        meta_title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        tags={post.frontmatter.tags}
      />
    </Global>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PhotosPage

export const photosPageQuery = graphql`
  query PhotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
