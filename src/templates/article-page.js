import React from 'react'
import RehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { globalHistory } from '@reach/router'
import styled from 'styled-components'
import Menu2 from 'react-burger-menu/lib/menus/stack'
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
import detailsStyles from '../../src/styles/details-panel-styles'
import { BookContent } from 'styled-icons/boxicons-regular/BookContent'
import { generateMedia } from 'styled-media-query'

import profilePic from '../../static/img/donald-boulton.jpg'

const customMedia = generateMedia({
  desktopL: '2560px',
  desktop: '1960px',
  laptop: '1024px',
  tablet: '768px',
  mobile: '320px',
})

const Styledh1 = styled.h1`
  display: inline-block;
  padding-top: 2em;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background-position: 50% 50%;
  text-align: center;
`
const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
`
const TocDiv = styled.div`
  height: max-content;
  max-height: 80vh;
  z-index: 4;
  line-height: 2em;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  left: 1.1em;
  ul {
    max-height: 78vh;
  }
  ${customMedia.lessThan('laptop')} {
    max-width: 16em;
    bottom: 1em;
    left: 1em;
    transition: ${props => props.theme.shortTrans};
  }
  ${customMedia.lessThan('tablet')} {
    max-width: 15em;
    font-size: 0.85em;
    grid-column: 4 / -1;
    position: sticky;
    top: 2em;
    left: 2em;
  }
`
const TocIcon = styled(BookContent)`
  width: 1.2em;
  margin-right: 0.2em;
`
const TocMenuIcon = styled(BookContent)`
  width: 1.2em;
  height: 1.2em;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  justify-self: end;
  :hover {
    transform: scale(1.1);
  }
  :active {
    background: transparent;
    color: transparent;
  }
`
const TableOfContents = styled.div`
  ul {
    color: ${props => props.theme.black};
  }
  a {
    color: ${props => props.theme.white};
  }
  a:hover {
    color: ${props => props.theme.hoveredLinks};
  }
`
const Time = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.white};
`
const Date = styled.span`
  font-size: 0.9em;
  color: ${props => props.theme.white};
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
  const url = post.frontmatter.slug
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
        <meta name='url' content={post.frontmatter.slug} />
        <meta property='og:type' content='article' />
        <meta property='og:readingTime' content={readingTime} />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={logo} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content={imageWidth} />
        <meta property='og:image:height' content={imageHeight} />
        <meta property='og:url' content={post.frontmatter.slug} />
        <meta name='rel' content={post.frontmatter.slug} />
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
        <link rel='canonical' href={post.frontmatter.slug} />
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
          <div className='columns is-mobile is-5 is-vcentered'>
            <div className='column'>
              <img
                className='profilePic'
                src={profilePic}
                alt='PubliusLogic'
              />
            </div>
            <div className='column'>
              Written by <strong>Donald Boulton</strong> who lives in OKC OK.
              <a href='https://twitter.com/donboulton'>
                You should follow him on Twitter
              </a>
            </div>
          </div>
          <div className='columns is-desktop is-vcentered'>
            <div className='column is-7'>
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
      <TocDiv id='containerElement'>
        <Menu2 left noOverlay styles={detailsStyles} customBurgerIcon={<TocMenuIcon />} customCrossIcon={<TocMenuIcon />}>
          <Title>
            <TocIcon />
                | Contents
          </Title>
          <TableOfContents
            id='link'
            dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
          />
        </Menu2>
      </TocDiv>
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
      tableOfContents
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
