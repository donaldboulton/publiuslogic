import React from 'react'
import PropTypes from 'prop-types'
import RehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'
import Comments from '../components/Comments'
import config from '../../_data/config'
import { PageBody } from '../components/styles/PageBody'
import { Grid } from '../components/styles/Grid'
import { rhythm } from '../utils/typography'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-comments': Comments,
  },
}).Compiler

const techLinkCss = `transition: 0.4s; :hover {transform: scale(1.05);}`

const HomePage = ({ data, pageContext }) => {
  const { markdownRemark: post, tech } = data
  const postNode = data.markdownRemark
  const path = data.path || ''
  const rootUrl = 'https://publiuslogic.com'
  const url = rootUrl + `/${path}`
  const logo = config.siteLogo
  const image = post.frontmatter.cover
  const author = config.author

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com',
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://publiuslogic.com',
    },
    description: config.siteDescription,
    name: 'Home | PubliusLogic',
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
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <PageBody as='div' className='item-c'>
        <main>{renderAst(postNode.htmlAst)}</main>
        <HomePageTemplate
          content={postNode.html}
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          cover={post.frontmatter.cover}
          meta_title={post.frontmatter.meta_title}
          description={post.frontmatter.meta_description}
          heading={post.frontmatter.heading}
          offerings={post.frontmatter.offerings}
          testimonials={post.frontmatter.testimonials}
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
          <h2>My Stack</h2>
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

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    edges: PropTypes.array,
    helmet: PropTypes.object,
  }),
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id      
      htmlAst
      excerpt(pruneLength: 200, truncate: true)                                
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        cover
        tags
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
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
    }
  }
`
