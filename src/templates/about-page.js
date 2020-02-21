import React from 'react'
import RehypeReact from 'rehype-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Menu8 from 'react-burger-menu/lib/menus/stack'
import PostCover from '../components/PostCover'
import Bio from '../components/Bio'
import Toc from '../components/Toc'
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'
import Cloudinary from '../components/Cloudinary'
import UploadWidget from '../components/Cloudinary/UploadWidget'
import Contact from '../components/ContactForm'
import { Grid } from '../components/styles/Grid'
import { Tags } from 'styled-icons/fa-solid/Tags'
import { StyledTableMenu, TableOfContents, PageTitle, Styledh1, ArticleTocIcon } from '../components/styles/ArticleStyles'
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

const AboutPage = ({ data, data: { allMarkdownRemark: { group } }, pageContext }) => {
  const { markdownRemark: post, tech } = data
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const author = config.author
  const logo = config.siteLogo
  const image = post.frontmatter.cover
  const title = post.frontmatter.title
  const showToc = post.frontmatter.showToc

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com/about',
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://publiuslogic.com/about',
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
        <meta name='url' content={post.frontmatter.slug} />
        <meta name='author' content={author} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta property='og:description' content={post.frontmatter.meta_description} />
        <meta property='og:image' content={post.frontmatter.cover} />
        <meta property='og:image:alt' content={post.frontmatter.meta_title} />
        <meta property='og:image:width' content='100%' />
        <meta property='og:image:height' content='400px' />
        <meta property='og:url' content={post.frontmatter.slug} />
        <meta name='rel' content={post.frontmatter.slug} />
        <meta name='key' content={post.frontmatter.slug} />
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
        <link rel='canonical' href={post.frontmatter.slug} />
        <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
        <link rel='me' href='https://twitter.com/donboulton' />
        {/* Schema.org tags */}
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/css/lightgallery.min.css' />
      </Helmet>
      <StyledTableMenu>
        <Menu8 right customBurgerIcon={<Tags />}>
          <PageTitle>
            <ArticleTocIcon />
            | Site Tags
          </PageTitle>
          <TableOfContents>
            <ul className='linktoc taglist field is-grouped is-grouped-multiline'>
              {group.map(tag => (
                <li className='control menu-item' key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <div className='tags has-addons is-large'>
                      <span aria-label='Tag' className='tag is-primary'>{tag.fieldValue}</span>
                      <span aria-label='Tag Count' className='tag is-dark'>{tag.totalCount}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </TableOfContents>
        </Menu8>
      </StyledTableMenu>
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='container columns'>
          <div className='column is-10 is-offset-1'>
            <Styledh1>
              {post.frontmatter.title}
            </Styledh1>
            <div>
              <Bio />
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='columns content'>
          <div className='column is-9 is-offset-1'>
            <main>{renderAst(postNode.htmlAst)}</main>
            <AboutPageTemplate
              contentComponent={HTMLContent}
              content={post.html}
              cover={post.frontmatter.cover}
              meta_title={post.frontmatter.meta_title}
              description={post.frontmatter.meta_description}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
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
          </div>
          <div className='column'>
            <div>
              {showToc && <Toc css='position: fixed; right: 1em; top: 40vh;' />}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    edges: PropTypes.array,
    helmet: PropTypes.object,
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
