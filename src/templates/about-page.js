import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Menu8 from 'react-burger-menu/lib/menus/stack'
import PostCover from '../components/PostCover'
import Bio from '../components/Bio'
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'
import config from '../../_data/config'
import DarkModeStatus from '../components/DarkMode/DarkModeStatus'
import DarkModeCommands from '../components/DarkMode/DarkModeCommands'
import { Grid } from '../components/styles/Grid'
import { Tags } from 'styled-icons/fa-solid/Tags'
import Carbon from '../../static/img/rgAl-carbon.png'
import { StyledTableMenu, TableOfContents, PageTitle, ArticleTocIcon } from '../components/styles/ArticleStyles'

const techLinkCss = `transition: 0.4s; :hover {transform: scale(1.05);}`

const AboutPage = ({ data, data: { allMarkdownRemark: { group } }, pageContext }) => {
  const { markdownRemark: post, tech } = data
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const author = config.author
  const logo = config.siteLogo
  const image = post.frontmatter.cover

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
    name: 'About | PubliusLogic',
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
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <section className='hero'>
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
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
        <section className='section'>
          <div className='container content'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div>
                  <Bio />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        cover={post.frontmatter.cover}
        meta_title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div>
                <p>
                  This is an example app that uses the <code>useDarkMode</code> custom hook.
                  It persists across sessions (i.e., uses <code>localStorage</code>) and
                  shares state across instances and even tabs and/or browser windows.
                </p>
                <p>
                  For example, here is a component that shares the custom hook{' '}
                  <code>useDarkMode</code> with the toggle component above.
                </p>
                <p>
                  It is reporting that the current mode is:{' '}
                  <code>
                    <DarkModeStatus />
                  </code>
                </p>
                <p>
                  And here's another: <DarkModeCommands />
                </p>
                <p>It couldn't be any easier!</p>
                <p>
                  <img
                    alt='code'
                    src={Carbon}
                  />
                </p>
                <div className='column'>
                  View the source for this&nbsp;
                  <a className='a' href='https://codesandbox.io/s/mzj64x80ny'>Code Sand Box Demo app.</a> &nbsp;Or see
                  useDarkMode.&nbsp;
                  <a className='a' href='https://github.com/donavon/use-dark-mode'>
                    Source code on Github.
                  </a>
                </div>
              </div>
              <div className='column is-10'>
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
          </div>
        </div>
      </section>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        path
        slug
        meta_title
        meta_description
        tags
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
