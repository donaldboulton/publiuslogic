import React from 'react'
import RehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { globalHistory } from '@reach/router'
import Menu2 from 'react-burger-menu/lib/menus/stack'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Layout from '../components/Layout'
import config from '../../_data/config'
import PostCover from '../components/PostCover'
import Counter from '../components/Counter'
import HitCounter from '../components/HitCounter'
import Todo from '../components/Todo'
import Bio from '../components/Bio'
import ColorBox from '../components/ColorBox'
import WebIntents from '../components/WebIntents'
import Toc from '../components/Toc'
import Ratings from '../components/Ratings'
import { BookContent } from 'styled-icons/boxicons-regular/'
import { StyledTableMenu, Styledh1, Title, TocIcon, Time, Date } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-counter': Counter,
    'interactive-hit-counter': HitCounter,
    'interactive-todo': Todo,
    'interactive-colorbox': ColorBox,
  },
}).Compiler
const ArticlePage = ({ data, timeToRead, postNode, htmlAst, allRatingsJson: ratings = [] }) => {
  const post = this.props.data.markdownRemark
  const { previous, next } = this.props.pageContext
  const { frontmatter, body } = postNode
  const { title, slug, cover, showToc } = frontmatter
  const postSlugPath = globalHistory.location.pathname
  const buildTime = post.date
  const postImage = post.cover
  const imageWidth = postImage.width
  const imageHeight = postImage.height
  const coverHeight = '100%'
  const alternativeHeadline = post.frontmatter.meta_title
  const pageDescription = postNode.meta_description
  const pageTags = postNode.tags
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
    url: postSlugPath,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postSlugPath,
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
    <Layout pageTitle={post.title} location={this.props.location}>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
        <meta name='description' content={post.meta_description} />
        <meta name='keywords' content={pageTags} />
        <meta name='url' content={postSlugPath} />
        <meta property='og:type' content='article' />
        <meta property='og:readingTime' content={timeToRead} />
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.meta_description} />
        <meta property='og:image' content={logo} />
        <meta property='og:image:alt' content={post.meta_title} />
        <meta property='og:image:width' content={imageWidth} />
        <meta property='og:image:height' content={imageHeight} />
        <meta property='og:url' content={postSlugPath} />
        <meta name='rel' content={post.path} />
        <meta name='key' content={postSlugPath} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post.title} />
        <meta name='twitter:image' content={logo} />
        <meta name='twitter:description' content={post.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='canonical' href={postSlugPath} />
        <link rel='image_src' href={`${config.siteUrl}${logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(articleSchemaOrgJSONLD)}
        </script>
      </Helmet>
      <section className='hero'>
        <StyledTableMenu>
          <Menu2 right customBurgerIcon={<BookContent />}>
            <Title>
              <TocIcon />
                | Page Contents
            </Title>
            {showToc && <Toc />}
          </Menu2>
        </StyledTableMenu>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='column is-10 is-offset-1'>
          <Styledh1>
            {post.title}
          </Styledh1>
        </div>
        <div className='column is-9 is-offset-1'>
          <Bio />
          <div className='columns is-desktop is-offset-1 is-vcentered'>
            <div className='column is-7'>
              <span className='subtitle is-size-5'>
                <Calendar size='0.9em' />&nbsp;
                <Date><small>{post.date}</small>&nbsp;</Date>&nbsp;
                <Timer size='0.9em' />&nbsp;
                <Time>{timeToRead}&nbsp;min read</Time>
              </span>
            </div>
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
                cover={post.cover}
                readingTime={timeToRead}
                category={post.category}
                date={post.date}
                tweet_id={post.tweet_id}
                meta_title={post.meta_title}
                description={post.meta_description}
                tags={post.tags}
                title={post.title}
              />
              <Share
                title={post.title}
                slug={post.path}
                excerpt={post.meta_description}
              />
              <hr />
              <div className='container content'>
                <div className='columns is-desktop is-vcentered' style={{ marginTop: `2rem` }}>
                  <div className='column is-7'>
                    <Ratings />
                  </div>
                  <div className='column is-pulled-right'>
                    <WebIntents />
                  </div>
                </div>
              </div>
              <Comments />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
              <section className='section'>
                <div className='container content'>
                  <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                      <ul
                        style={{
                          display: `flex`,
                          flexWrap: `wrap`,
                          justifyContent: `space-between`,
                          listStyle: `none`,
                          padding: 0,
                        }}
                      >
                        <li>
                          {previous && (
                            <Link to={previous.fields.slug} rel='prev'>
                              ← {previous.frontmatter.title}
                            </Link>
                          )}
                        </li>
                        <li>
                          {next && (
                            <Link to={next.fields.slug} rel='next'>
                              {next.frontmatter.title} →
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
   query ArticleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id      
      htmlAst
      timeToRead
      tableOfContents
      excerpt(pruneLength: 200)                                
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tweet_id
        path
        category
        related
        meta_title
        meta_description
        tags        
        cover
      }
    }
    allRatingsJson(
      filter: { postPath: { eq: $slug } }
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

