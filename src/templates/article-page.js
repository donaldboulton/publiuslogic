import React from 'react'
import RehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { globalHistory } from '@reach/router'
import ReactStars from 'react-stars'
import Menu2 from 'react-burger-menu/lib/menus/stack'
import GithubButtonsRepo from '../components/GithubButtonsRepo'
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
import { BookContent } from 'styled-icons/boxicons-regular/'
import { Rating, StyledTableMenu, Styledh1, Title, TocIcon, Time, Date, GithubButtons, Pagination, Prev, Next, Meta } from '../components/styles/ArticleStyles'

const submitRating = (rating, path) => {
  const data = {
    'fields[rating]': rating,
    'fields[postPath]': path,
    'options[reCaptcha][siteKey]': '6Le3cZMUAAAAAEAXmN6cDoJGVUVZ0RzuJlLAj6a-',
  }

  // eslint-disable-next-line no-undef
  const XHR = new XMLHttpRequest()
  let urlEncodedData = ''
  const urlEncodedDataPairs = []
  let name

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + '=' + encodeURIComponent(data[name]),
    )
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+')

  // Define what happens on successful data submission
  XHR.addEventListener('load', function (event) {
    alert('Thanks for rating us! Your rating will appear soon. Stay tuned..')
  })

  // Define what happens in case of error
  XHR.addEventListener('error', function (event) {
    alert('Sorry, something went wrong. Please file an issue in github!')
  })

  // Set up our request
  XHR.open(
    'POST',
    'https://api.staticman.net/v3/entry/github/donaldboulton/publiuslogic/master/ratings',
  )

  // Add the required HTTP header for form data requests
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  // Finally, send our data.
  XHR.send(urlEncodedData)
}
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-counter': Counter,
    'interactive-hit-counter': HitCounter,
    'interactive-todo': Todo,
    'interactive-colorbox': ColorBox,
  },
}).Compiler

const ArticlePage = ({ pageContext, data: { markdownRemark: postNode, timeToRead, htmlAst }, allRatingsJson: ratings = [] }) => {
  const post = postNode.frontmatter
  const postSlugPath = globalHistory.location.pathname
  const buildTime = post.date
  const postImage = post.cover
  const { slug, prev, next } = pageContext
  const imageWidth = postImage.width
  const imageHeight = postImage.height
  const body = post.html
  const title = post.title
  const coverHeight = '100%'
  const alternativeHeadline = post.meta_title
  const pageDescription = post.meta_description
  const pageTags = post.tags
  const logo = config.siteLogo
  const ratingValue =
  ratings && ratings.edges
    ? ratings.edges.reduce(
      (accumulator, rating) => accumulator + parseInt(rating.node.rating),
      0,
    ) / ratings.totalCount
    : 0
  const ratingCount = ratings && ratings.edges ? ratings.totalCount : 0

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
    <Layout pageTitle={post.title}>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
        <meta name='description' content={post.meta_description} />
        <meta name='keywords' content={pageTags} />
        <meta name='url' content={postSlugPath} />
        <meta property='og:type' content='article' />
        <meta property='og:readingTime' content={postNode.timeToRead} />
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
            <Toc />
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
        <Meta
          data={{
            ...post,
            description: post.meta_description,
            rating: { ratingValue, ratingCount: ratingCount },
          }}
          rich
        />
        <div className='column is-9 is-offset-1'>
          <Bio />
          <div className='columns is-desktop is-vcentered'>
            <div className='column is-7'>
              <span className='subtitle is-size-5'>
                <Calendar size='0.9em' />&nbsp;
                <Date><small>{post.date}</small>&nbsp;</Date>&nbsp;
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
              <div>{renderAst(postNode.htmlAst)}</div>
              <ArticleTemplate
                content={postNode.html}
                contentComponent={HTMLContent}
                cover={post.cover}
                readingTime={postNode.timeToRead}
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
                    <input type='hidden' name='form-name' value='ratings' />
                    <input name='fields[postPath]' type='hidden' value={post.path} />
                    <input name='title' type='hidden' value={post.title} />
                    {/* TODO calculate score in gatsby-node */}
                    {ratings ? (
                      <Rating>
                        Rating:{' '}
                        {ratings && ratings.edges
                          ? ratings.edges.reduce(
                            (accumulator, rating) =>
                              accumulator + parseInt(rating.node.rating),
                            0,
                          ) / ratings.totalCount
                          : null}{' '}
                          - {ratings.totalCount} Reviews
                          Rating: {ratingValue !== 0 ? ratingValue : null} -{' '}
                        {ratings.totalCount} Reviews
                      </Rating>
                    ) : null}
                    <ReactStars
                      onChange={rating => {
                        submitRating(rating, post.path)
                      }}
                      half={false}
                      size={24}
                      color2='#ffe600'
                    />
                  </div>
                  <div className='column is-pulled-right'>
                    <WebIntents />
                  </div>
                </div>
              </div>
              <Comments />
              <section className='section'>
                <Pagination>
                  {prev && (
                    <Prev key={pageContext.post.node.fields.slug}>
                      <span>Previous</span>
                      <Link to={pageContext.prev.post.node.fields.slug}>{prev.post.frontmatter.title}</Link>
                    </Prev>
                  )}

                  {next && (
                    <Next key={pageContext.post.node.fields.slug}>
                      <span>Next</span>
                      <Link to={pageContext.next.post.node.fields.slug}>{next.post.frontmatter.title}</Link>
                    </Next>
                  )}
                </Pagination>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

ArticlePage.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
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
        path
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
