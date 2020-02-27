import React from 'react'
import RehypeReact from 'rehype-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PostCover from '../components/PostCover'
import Bio from '../components/Bio'
import { PageBody } from '../components/styles/PageBody'
import Toc from '../components/Toc'
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'
import Cloudinary from '../components/Cloudinary'
import UploadWidget from '../components/Cloudinary/UploadWidget'
import Contact from '../components/ContactForm'
import { Grid } from '../components/styles/Grid'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-cloudinary': Cloudinary,
    'interactive-contact': Contact,
    'interactive-upload-widget': UploadWidget,
  },
}).Compiler

const techLinkCss = `transition: 0.4s; :hover {transform: scale(1.05);}`

const AboutPage = ({ data, data: { allMarkdownRemark: { group } }, pageContext, allRatingsJson: ratings = [] }) => {
  const { markdownRemark: post, tech } = data
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const path = data.path || ''
  const rootUrl = 'https://publiuslogic.com'
  const author = config.author
  const logo = config.siteLogo
  const image = post.frontmatter.cover
  const title = post.frontmatter.title
  const showToc = post.frontmatter.showToc
  const url = rootUrl + `/${path}`

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: url,
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    description: config.siteDescription,
    name: title,
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
        <meta name='url' content={url} />
        <meta name='author' content={author} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={post.frontmatter.cover} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={url} />
        <meta name='rel' content={url} />
        <meta name='key' content={url} />
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
        <link rel='canonical' href={url} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        {/* Schema.org tags */}
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <section className='item-b'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <PageBody as='div' className='item-c'>
        <Styledh1>
          {post.frontmatter.title}
        </Styledh1>
        <Bio />
        {showToc && <Toc
          className='item-d'
          style={{
            display: `flex`,
            position: `sticky`,
            right: `1em`,
            top: `0`,
          }}
        />}
        <main>{renderAst(postNode.htmlAst)}</main>
        <AboutPageTemplate
          content={postNode.html}
          contentComponent={HTMLContent}
          cover={post.cover}
          timeToRead={postNode.timeToRead}
          category={post.category}
          date={post.date}
          tweet_id={post.tweet_id}
          meta_title={post.meta_title}
          description={post.meta_description}
          tags={post.tags}
          title={post.title}
          showToc={post.showToc}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div
          style={{
            marginLeft: '2vw',
          }}
        >
          <h2>My Development Stack and Tools</h2>
          <Grid minWidth='5em' align='center'>
            {tech.edges.map(({ node: { title, url, logo } }) => (
              <a key={title} href={url} css={techLinkCss}>
                <span css='font-size: 0.85em;'>{title}</span>
                <img src={logo.src} alt={title} />
              </a>
            ))}
          </Grid>
        </div>
      </PageBody>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    edges: PropTypes.array,
    helmet: PropTypes.object,
  }),
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      excerpt(pruneLength: 200, truncate: true) 
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        path
        slug
        meta_title
        meta_description
        tags
        showToc
        showStack
        cover
      }
    }
    tech: allTechYaml {
      edges {
        node {
          title
          url
          logo {
            src: publicURL
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        next {
          fields {
            slug
          }
          frontmatter {
            title
            cover
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            cover
            title
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
