import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { HTMLContent } from '../components/Content'
import UsersPageTemplate from '../components/UsersPageTemplate'
import Layout from '../components/Layout'
import { Calendar, FileSymlinkFile } from 'styled-icons/octicons/'
import { Timer } from 'styled-icons/material/Timer'
import config from '../../_data/config'
import PostCover from '../components/PostCover'
import Menu6 from 'react-burger-menu/lib/menus/stack'
import Bio from '../components/Bio'
import { Tags } from 'styled-icons/fa-solid/Tags'
import { StyledTableMenu, TableOfContents, Styledh1, PageTitle, ArticleTocIcon, MetaPage, TagList } from '../components/styles/ArticleStyles'

const UsersPage = ({ data, location, data: { allMarkdownRemark: { group } } }) => {
  const { markdownRemark: post } = data
  const image = post.frontmatter.cover
  const author = config.author
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const logo = config.siteLogo

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: 'https://publiuslogic.com/users',
    inLanguage: config.siteLanguage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://publiuslogic.com/users',
    },
    description: config.siteDescription,
    name: 'Users | PubliusLogic',
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
      <StyledTableMenu>
        <Menu6 right customBurgerIcon={<Tags />}>
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
        </Menu6>
      </StyledTableMenu>
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
          <Bio />
          <div className='column is-offset-1'>
            <MetaPage>
              <span>
                <Calendar size='1.2em' />
                &ensp;
                {post.frontmatter.date}
              </span>
              <span>
                <Timer size='1.2em' />
                &ensp;
                {post.timeToRead} min read
              </span>
              <Link aria-label='Tags' to='/tags/'><TagList tags={post.frontmatter.tags} /></Link>
              <span>
                <FileSymlinkFile size='1.2em' />
                  &ensp;
                  Category:
                  &ensp;
                <Link aria-label='Categories' to='/categories/'>{post.frontmatter.category}</Link>
              </span>
            </MetaPage>
          </div>
        </div>
      </section>
      <UsersPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        cover={post.frontmatter.cover}
        meta_title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

UsersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UsersPage

export const usersPageQuery = graphql`
  query UsersBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id      
      htmlAst
      timeToRead
      excerpt(pruneLength: 200, truncate: true)                                
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        tweet_id
        path
        slug
        category
        meta_title
        meta_description
        tags
        cover
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
