import React from 'react'
import RehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { globalHistory } from '@reach/router'
import styled from 'styled-components'
import GithubButtonsRepo from '../components/GithubButtonsRepo'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Global from '../components/Global'
import config from '../../_data/config'
import PostCover from '../components/PostCover'
import Counter from '../components/Counter'
import HitCounter from '../components/HitCounter'

const Styledh1 = styled.h1`
  display: inline-block;
  padding-top: 2em;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background-position: 50% 50%;
  text-align: center;
}
`
const Time = styled.span`
  font-size: 0.9rem;
  color: silver;
`
const Date = styled.span`
  font-size: 0.9em;
  color: silver;
`
const GithubButtons = styled.span`
  right: 2px;
`
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-counter': Counter,
    'interactive-hit-counter': HitCounter,
  },
}).Compiler

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark
  const readingTime = data.readingTime
  const buildTime = post.frontmatter.date
  const postImage = post.frontmatter.cover
  const imageWidth = postImage.width
  const imageHeight = postImage.height
  const body = post.html
  const title = post.frontmatter.title
  const coverHeight = '100%'
  const postPath = globalHistory.location.pathname

  const alternativeHeadline = post.frontmatter.meta_title
  const pageDescription = post.frontmatter.meta_description
  const pageTags = post.frontmatter.tags
  const url = post.frontmatter.canonical
  const logo = config.siteLogo

  const articleSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'Article',
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
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postPath,
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
      ratingValue: '4.5',
      ratingCount: '36',
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
        <meta property='og:image' content={logo} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content={imageWidth} />
        <meta property='og:image:height' content={imageHeight} />
        <meta property='og:url' content={post.frontmatter.canonical} />
        <meta name='rel' content={post.frontmatter.canonical} />
        <meta name='key' content={postPath} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post.frontmatter.title} />
        <meta name='twitter:image' content={logo} />
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
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='column is-10 is-offset-1'>
          <Styledh1>
            {post.frontmatter.title}
          </Styledh1>
        </div>
        <div className='column is-9 is-offset-1'>
          <div className='columns is-desktop is-vcentered'>
            <div className='column is-6'>
              <span className='subtitle is-size-5'>
                <Calendar size='0.9em' />&nbsp;
                <Date><small>{post.frontmatter.date}</small>&nbsp;</Date>&nbsp;
                <Timer size='0.9em' />&nbsp;
                <Time>{post.timeToRead}&nbsp;min read</Time>
              </span>
            </div>
            <GithubButtons><GithubButtonsRepo className='is-pulled-right' /></GithubButtons>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div>{renderAst(post.htmlAst)}</div>
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
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id      
      htmlAst
      timeToRead
      tableOfContents(
        pathToSlugField: "frontmatter.path"
        heading: "only show toc from this heading onwards"
        maxDepth: 2
      ) 
      excerpt(pruneLength: 200)                          
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
