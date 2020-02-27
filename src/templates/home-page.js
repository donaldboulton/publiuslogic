import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { PageBody } from '../components/styles/PageBody'
import HomePageTemplate from '../components/HomePageTemplate'
import StyledBackgroundSection from '../components/HomePageTemplate/image'
import Layout from '../components/Layout'
import config from '../../_data/config'
import { Grid } from '../components/styles/Grid'
import { rhythm } from '../utils/typography'

const techLinkCss = `transition: 0.4s; :hover {transform: scale(1.05);}`

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { markdownRemark: tech } = data
  const image = frontmatter.cover
  const author = config.author
  const logo = config.siteLogo
  const path = data.path || ''
  const rootUrl = 'https://publiuslogic.com'
  const url = rootUrl + `/${path}`

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
    <Layout pageTitle={frontmatter.title}>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name='description' content={frontmatter.meta_description} />
        <meta name='keywords' content={frontmatter.tags} />
        <meta name='image' content={frontmatter.cover} />
        <meta name='url' content={url} />
        <meta name='author' content={author} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={frontmatter.title} />
        <meta property='og:description' content={frontmatter.meta_description} />
        <meta property='og:image' content={frontmatter.cover} />
        <meta property='og:image:alt' content={frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={url} />
        <meta name='rel' content={url} />
        <meta name='key' content={url} />
        <meta name='twitter:author' content='donboulton' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={frontmatter.title} />
        <meta name='twitter:image' content={frontmatter.cover} />
        <meta name='twitter:description' content={frontmatter.meta_description} />
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
      <StyledBackgroundSection className='cover-container item-b post-cover'>
        <div
          style={{
            height: `400px`,
            width: `100vw`,
            display: `flex`,
            placeContent: `start`,
          }}
        >
          <div
            className='hero-body'
            style={{
              placeSelf: `center`,
              textAlign: `center`,
              height: `50vh`,
              maxWidth: 1260,
              padding: `0px 1.0875rem 1.45rem`,
              marginTop: `10rem`,
            }}
          >
            <div className='overlay'>PubliusLogic</div>
          </div>
        </div>
      </StyledBackgroundSection>
      <PageBody as='div' className='item-c'>
        <HomePageTemplate
          title={frontmatter.title}
          cover={frontmatter.cover}
          meta_title={frontmatter.meta_title}
          description={frontmatter.meta_description}
          heading={frontmatter.heading}
          offerings={frontmatter.offerings}
          testimonials={frontmatter.testimonials}
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

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      helmet: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id      
      html
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
