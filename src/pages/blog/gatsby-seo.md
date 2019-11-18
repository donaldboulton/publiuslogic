---
templateKey: article-page
title: Gatsby SEO
slug: gatsby seo
canonical: "https://publiuslogic.com/blog/gatsby-seo/"
date: 2019-07-30T20:14:43.942Z
category: 'tech'
cover: '/images/json-ld.jpg'
tags:
  - Gatsby
  - Json-LD
  - SEO
  - WebDev
  - Tutorial
meta_title: SEO JSON-LD done right.
meta_description: Gatsby SEO JSON-LD per page is the only logical option for perfection in a WebPage or Article.
tweet_id: '1118651504674725889'
showToc: true
---

## JSON-LD Per Template

Gatsby SEO JSON-LD and meta tags, "per page", is the only logical option for SEO = microdata perfection in a WebPage or Article.

The main issue with Json-LD for microdata is you need frontmatter data from pages and posts like the page title, url, description, created time edited time, author, publisher, ratings, reviews etc.

Doing this with a SEO Component like most Gatsby Tutorials means you would have to develop a query to pull all file markdown edges into any page you wanted with Json-LD for all pages and posts frontmatter data along with the body of the page.

I just added Json-LD and individual page meta tags per pages templates.

Below is a example of blog post page using Json-LD with react-helmet for the meta tags.

```jsx
import React from 'react'
import Helmet from 'react-helmet'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Global from '../components/Global'
import PostCover from '../components/PostCover'
import config from '../../data/config'

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data

  const postNode = data.markdownRemark
  const buildTime = post.frontmatter.date
  const postImage = post.frontmatter.cover
  const imageWidth = postImage.width
  const imageHeight = postImage.height
  const body = post.html
  const title = post.frontmatter.title
  const readingTime = data.readingTime

  let alternativeHeadline = post.frontmatter.meta_title
  let pageDescription = post.frontmatter.meta_description
  let pageTags = post.frontmatter.tags
  let url = post.frontmatter.canonical
  let logo = config.siteLogo

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
      name: 'donboulton',
    },
    copyrightHolder: {
      '@type': 'Person',
      name: 'donaldboulton',
    },
    copyrightYear: config.copyrightYear,
    creator: {
      '@type': 'Person',
      name: 'donboulton',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.5,
      ratingCount: 132,
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
        <meta property='og:readingTime' content={readingTime} />
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
        <script type='application/ld+json'>
          {JSON.stringify(articleSchemaOrgJSONLD)}
        </script>
      </Helmet>
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
                cover={post.frontmatter.cover}
                readingTime={readingTime}
                category={post.frontmatter.category}
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
  readingTime: PropTypes.number.isRequired,
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 500)
      readingTime
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tweet_id
        category
        meta_title
        meta_description
        tags
        cover
        canonical
      }
    }
    allRatingsJson(
      filter: { postPath: { eq: $id } }
      sort: { fields: [date], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          rating
        }
      }
    }
  }
`
```

Using the above article query for individual Blog Post pages frontmatter data.
