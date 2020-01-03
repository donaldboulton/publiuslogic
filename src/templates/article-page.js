import React from 'react'
import RehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Menu2 from 'react-burger-menu/lib/menus/stack'
import GithubButtonsRepo from '../components/GithubButtonsRepo'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import { Link, to, graphql } from 'gatsby'
import { globalHistory } from '@reach/router'
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
import ReactStars from 'react-stars'
import { Img, Thumbnail } from '../components/PrevNext/styles'
import { BookContent } from 'styled-icons/boxicons-regular/'
import { Rating, StyledTableMenu, TableOfContents, Styledh1, Title, TocIcon, Time, Date, GithubButtons, Pagination, Meta } from '../components/styles/ArticleStyles'

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
    a: Link,
    href: to,
  },
}).Compiler

export default function ArticlePage (props) {
  const {
    location,
    markdownRemark,
    tableOfContents,
    label,
    path,
    previous,
    next,
    allRatingsJson: ratings = [],
    pageContext,
  } = props.data

  const { frontmatter, htmlAst, timeToRead } = markdownRemark
  const rootUrl = 'https://publiuslogic.com'
  const pathName = globalHistory.location.pathname
  const buildTime = frontmatter.date
  const postImage = frontmatter.cover
  const postNode = frontmatter.cover
  const imageWidth = postImage.width
  const imageHeight = postImage.height
  const body = frontmatter.meta_description
  const title = frontmatter.title
  const coverHeight = '100%'
  const alternativeHeadline = frontmatter.meta_title
  const pageDescription = frontmatter.meta_description
  const pageTags = frontmatter.tags
  const url = rootUrl + `/${path}`
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
    '@type': 'LocalBusiness',
    '@id': rootUrl + `/${path}`,
    name: 'Publius Logic',
    image: {
      '@type': 'ImageObject',
      url: postImage,
    },
    sameAs: rootUrl + `/${path}`,
    priceRange: '$0.1',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '720 S. Rockwell',
      addressLocality: 'OKC Ok',
      addressRegion: 'OK',
      postalCode: '73128',
      addressCountry: 'US',
    },
    telephone: '+19033361494',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.4584,
      longitude: 97.6343,
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
    url: pathName,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': rootUrl + `/${path}`,
    },
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    pageName: title,
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
    articleBody: body,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      bestRating: '5',
      worstRating: '1',
      ratingCount: ratingCount,
    },
    review: {
      '@type': 'Review',
      url: 'https://publiuslogic.com/blog/netlify-cms',
      author: {
        '@type': 'Person',
        name: 'Lisa Kennedy',
        sameAs: 'https://plus.google.com/114108465800532712602',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Denver Post',
        sameAs: 'http://www.denver.com',
      },
      datePublished: '2019-03-13T20:00',
      description: 'Cms From Hell.',
      inLanguage: 'en',
      reviewRating: {
        '@type': 'Rating',
        worstRating: '1',
        bestRating: '5',
        ratingValue: ratingValue,
      },
    },
  }

  return (
    <Layout pageTitle={frontmatter.title} location={location}>
      <Helmet>
        <title>{`${frontmatter.title} | ${config.siteTitle}`}</title>
        <meta name='description' content={frontmatter.meta_description} />
        <meta name='keywords' content={pageTags} />
        <meta name='url' content={url} />
        <meta property='og:type' content='article' />
        <meta property='og:readingTime' content={timeToRead} />
        <meta property='og:title' content={frontmatter.title} />
        <meta property='og:description' content={frontmatter.meta_description} />
        <meta property='og:image' content={logo} />
        <meta property='og:image:alt' content={frontmatter.meta_title} />
        <meta property='og:image:width' content={imageWidth} />
        <meta property='og:image:height' content={imageHeight} />
        <meta property='og:url' content={frontmatter.path} />
        <meta name='rel' content={url} />
        <meta name='key' content={url} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={frontmatter.title} />
        <meta name='twitter:image' content={logo} />
        <meta name='twitter:description' content={frontmatter.meta_description} />
        <meta name='twitter:widgets:autoload' content='off' />
        <meta name='twitter:widgets:theme' content='dark' />
        <meta name='twitter:widgets:link-color' content='#d64000' />
        <meta name='twitter:widgets:border-color' content='#000000' />
        <meta name='twitter:dnt' content='on' />
        <link rel='canonical' href={`${rootUrl}${path}`} />
        <link rel='image_src' href={`${rootUrl}${logo}`} />
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
            <TableOfContents
              style={{ textIndent: '-1em hanging' }}
              id='linktoc'
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            />
          </Menu2>
        </StyledTableMenu>
        <PostCover
          cover={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='column is-10 is-offset-1'>
          <Styledh1>
            {frontmatter.title}
          </Styledh1>
          <Meta
            data={{
              ...frontmatter,
              description: frontmatter.meta_description,
              rating: { ratingValue, ratingCount: ratingCount },
            }}
            rich
          />
        </div>
        <div className='column is-9 is-offset-1'>
          <Bio />
          <div className='columns is-desktop is-vcentered'>
            <div className='column is-7'>
              <span className='subtitle is-size-5'>
                <Calendar size='0.9em' />&nbsp;
                <Date><small>{frontmatter.date}</small>&nbsp;</Date>&nbsp;
                <Timer size='0.9em' />&nbsp;
                <Time>{timeToRead}&nbsp;min read</Time>
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
              <div>{renderAst(htmlAst)}</div>
              <ArticleTemplate
                content={htmlAst}
                contentComponent={HTMLContent}
                cover={frontmatter.cover}
                timeToRead={timeToRead}
                category={frontmatter.category}
                date={frontmatter.date}
                tweet_id={frontmatter.tweet_id}
                meta_title={frontmatter.meta_title}
                description={frontmatter.meta_description}
                tags={frontmatter.tags}
                title={frontmatter.title}
              />
              <Share
                title={frontmatter.title}
                path={frontmatter.path}
                excerpt={frontmatter.meta_description}
              />
              <hr />
              <div className='container content'>
                <div className='columns is-desktop is-vcentered' style={{ marginTop: `2rem` }}>
                  <div className='column is-7'>
                    <input type='hidden' name='form-name' value='ratings' />
                    <input name='fields[postPath]' type='hidden' value={frontmatter.path} />
                    <input name='title' type='hidden' value={frontmatter.title} />
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
                        submitRating(rating, frontmatter.path)
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
                  {previous && (
                    <Link to={rootUrl + pageContext.previous} rel='prev' css='margin-right: 1em;'>
                      <h3 css='text-align: left;'>← Previous {label}</h3>
                      <Thumbnail>
                        {previous.frontmatter.cover && (
                          <Img {...pageContext.previous.frontmatter.cover.sharp || pageContext.previous.frontmatter.cover} />
                        )}
                        <h4>{pageContext.previous.frontmatter.title}</h4>
                      </Thumbnail>
                    </Link>
                  )}
                  {next && (
                    <Link to={rootUrl + pageContext.next} rel='next' css='margin-left: auto;'>
                      <h3 css='text-align: right;'>Next {label} →</h3>
                      <Thumbnail>
                        {next.cover && (
                          <Img {...pageContext.next.frontmatter.cover.sharp || pageContext.next.frontmatter.cover} />
                        )}
                        <h4>{pageContext.next.frontmatter.title}</h4>
                      </Thumbnail>
                    </Link>
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

export const pageQuery = graphql`
  query ArticlePageByPath($path: String!, $tags: [String]) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {   
      id
      htmlAst
      timeToRead
      tableOfContents
      excerpt(pruneLength: 300)                                  
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        path
        tweet_id
        category
        meta_title
        meta_description
        tags
        cover
      }
    }
    relatedPosts: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: $tags }, path: { ne: $path } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
          }
        }
      }
    }
    allRatingsJson(
      filter: { postPath: { eq: $path } }
      sort: { fields: [date], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          rating        
          fields {
            messageHtml
          }
        }
      }
    }
  }
`
