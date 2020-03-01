import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import config from '../../_data/config'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { PageBody } from '../components/styles/PageBody'
import Image from '../components/PostCard/image'
import Bio from '../components/Bio'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'
import { Styledh1, PreviousNext } from '../components/styles/ArticleStyles'

const ButtonSecondary = styled(Link)`
  border: thin ${props => props.theme.white};
`
const ButtonDisabled = styled.div`
  background: transparent;
  border: thin ${props => props.theme.white};
`

const PaginationLink = props => {
  if (!props.test) {
    return (
      <ButtonSecondary className='button' to={`/blog/${props.url}`}>
        {`${props.text}`}
      </ButtonSecondary>
    )
  } else {
    return (
      <ButtonDisabled disabled className='button'>
        {props.text}
      </ButtonDisabled>
    )
  }
}
export default class BlogPage extends Component {
  render () {
    const { location, pageContext } = this.props
    const { group, index, pageCount, first, last } = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'
    const logo = config.siteLogo

    const pageNumbers = new Array(pageCount).fill(undefined).map((_, index) => index + 1)

    const blogSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'Blog',
      url: 'https://publiuslogic.com/blog',
      name: 'Blog | PubliusLogic',
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      inLanguage: 'en_US',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://publiuslogic.com/blog',
      },
      description: 'List Of PubliusLogic Posts',
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
      datePublished: '2018-07-12T10:30:00+01:00',
      dateModified: '2019-07-12T10:30:00+01:00',
      image: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/mansbooks/image/upload/v1559828638/photos/support.webp',
      },
    }

    return (
      <Layout pageTitle={config.siteTitleAlt}>
        <Helmet>
          <title>Blog | Publius Logic</title>
          <meta name='description' content='Blog | Publius Logic' />
          <meta name='keywords' content='PubliusLogic, Blog, Posts' />
          <meta name='image' content='https://res.cloudinary.com/mansbooks/image/upload/v1559828638/photos/support.webp' />
          <meta name='url' content='https://publiuslogic.com/blog' />
          <meta name='author' content='donaldboulton' />
          <meta property='og:type' content='blog' />
          <meta property='og:title' content='https://publiuslogic.com/blog' />
          <meta property='og:description' content='PubliusLogic Blog Posts' />
          <meta property='og:image' content='https://res.cloudinary.com/mansbooks/image/upload/v1559828638/photos/support.webp' />
          <meta property='og:image:alt' content='Blog' />
          <meta property='og:image:width' content='100%' />
          <meta property='og:image:height' content='400px' />
          <meta property='og:url' content='https://publiuslogic.com/blog' />
          <meta name='rel' content='https://publiuslogic.com/blog' />
          <meta name='key' content='https://publiuslogic.com/blog' />
          <meta name='twitter:author' content='donboulton' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='PubliusLogic Blog Posts' />
          <meta name='twitter:image' content='https://res.cloudinary.com/mansbooks/image/upload/v1559828638/photos/support.webp' />
          <meta name='twitter:description' content='PubliusLogic Blog Posts' />
          <meta name='twitter:widgets:autoload' content='off' />
          <meta name='twitter:widgets:theme' content='dark' />
          <meta name='twitter:widgets:link-color' content='#d64000' />
          <meta name='twitter:widgets:border-color' content='#000000' />
          <meta name='twitter:dnt' content='on' />
          <link rel='canonical' content='https://publiuslogic.com/blog' />
          <link rel='image_src' href={`${config.siteUrl}${config.logo}`} />
          <link rel='me' href='https://twitter.com/donboulton' />
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(blogSchemaOrgJSONLD)}
          </script>
        </Helmet>
        <section className='hero'>
          <Image />
        </section>
        <PageBody as='div'>
          <Styledh1>
            Blog
          </Styledh1>
          <Bio />
          <p>✨ Listing all Posts.</p>
          <p>
            For Refinements see <Link className='a' to='/categories/'>Categories</Link> or <Link className='a' to='/tags/'>Tags</Link>
          </p>
          <section>
            <PostCard posts={group} />
          </section>
          <section>
            <PreviousNext>
              <div className='field has-addons'>
                <span className='control'>
                  {
                    pageNumbers.map(number => {
                      const isActive = location.pathname.indexOf(number) > -1 || (location.pathname === '/blog/' && number === 1)
                      return <PaginationLink test={isActive} key={location.pathname} url={`/${number === 1 ? '' : number}`} text={number} />
                    })
                  }
                </span>
              </div>
              <div>
                <span className='control'>
                  {!first && <PaginationLink test={first} url={previousUrl} text='Previous' />}
                  {!last && <PaginationLink test={last} url={nextUrl} text='Next' />}
                </span>
              </div>
            </PreviousNext>
          </section>
        </PageBody>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "article-page" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            path
            meta_description
            templateKey
            date(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`
