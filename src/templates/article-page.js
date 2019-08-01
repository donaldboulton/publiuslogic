import React from 'react'
import Helmet from 'react-helmet'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Seo from '../components/SEO'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Global from '../components/Global'
import PostCover from '../components/PostCover'
import config from '../../data/config'

const ArticlePage = ({ data, node }) => {
  const { markdownRemark: post } = data

  const postNode = data.markdownRemark
  const buildTime = post.frontmatter.date
  const cover = post.frontmatter.cover
  const postImage = post.frontmatter.cover
  const imageWidth = postImage.width
  const imageHeight = postImage.height
  const body = post.html
  const title = post.frontmatter.title

  let alternativeHeadline = post.frontmatter.meta_title
  let pageDescription = post.frontmatter.meta_description
  let pageTags = post.frontmatter.tags
  let url = post.frontmatter.canonical
  let logo = config.siteLogo
  let author = config.author
  
  const articleSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    publisher: {
      '@type': 'Organization',
      name: title,
      'logo': {
        '@type': 'ImageObject',
        url: logo,
      },
    },
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    name: title,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: config.copyright,
    creator: {
      '@type': 'Person',
      name: author,
    },
    alternativeHeadline: alternativeHeadline,
    datePublished: buildTime,
    dateModified: buildTime,
    description: pageDescription,
    headline: title,
    keywords: pageTags,
    inLanguage: 'en_US',
    image: {
      '@type': 'ImageObject',
      url: postImage,
    },
    articleBody: body,
  }

  return (
    <Global pageTitle={title}>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
        <meta name='keywords' content={pageTags} />
        <meta name='url' content={post.frontmatter.canonical} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={cover} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content={imageWidth} />
        <meta property='og:image:height' content={imageHeight} />
        <meta property='og:url' content={post.frontmatter.canonical} />
        <meta name='rel' content={post.frontmatter.canonical} />
        <meta name='key' content={post.frontmatter.canonical} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post.frontmatter.title} />
        <meta name='twitter:image' content={post.frontmatter.cover} />
        <meta name='twitter:description' content={post.frontmatter.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='me' href='https://twitter.com/donboulton' />
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(articleSchemaOrgJSONLD)}
        </script>
      </Helmet>
      <Seo
        title={title}
        titleAlt={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        url={post.fields.slug}
        image={post.frontmatter.cover}
        keywords={pageTags}
        postNode={postNode}
        postSEO
        canonical={url}
      />
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                content={post.html}
                contentComponent={HTMLContent}
                categorys={post.frontmatter.categorys}
                date={post.frontmatter.date}
                tweet_id={post.frontmatter.tweet_id}
                meta_title={post.frontmatter.meta_title}
                description={post.frontmatter.meta_description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
              />
              <Share
                title={post.frontmatter.title}
                slug={post.fields.slug}
                excerpt={post.frontmatter.meta_description}
              />
              <hr />
              <Comments />
            </div>
          </div>
        </div>
      </section>
    </Global>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      timeToRead
      html
      fields {
        slug
      }      
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tweet_id
        categorys
        meta_title
        meta_description
        tags
        cover
        canonical
      }
    }
  }
`
