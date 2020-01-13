import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Menu5 from 'react-burger-menu/lib/menus/stack'
import config from '../../_data/config'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Image from '../components/PostCard/image'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'
import { Tags } from 'styled-icons/fa-solid/Tags'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  z-index: 22;
`
const PostTocIcon = styled(Tags)`
  width: 1em;
  margin-right: 0.2em;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`
export const StyledTableMenu = styled.div` 
  .bm-item {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5em 0;
    > * {
      display: flex;
      align-items: center;
    }
    > :not(:last-child) {
      margin-right: 1em;
    }
    transition: color 0.2s;
  }
  .bm-item:hover {
    color: ${props => props.theme.hoveredLinks};
  }
  .bm-item:active {
    color: ${props => props.theme.activeLinks};
  }
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 26px;
    right: 1.4vw;
    top: 2.2vh;
  }
  .bm-burger-bars {
    background: ${props => props.theme.lightBg};  
  }
  .bm-cross-button {
    height: 30px;
    width: 15px;
    left: 8px !important;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-menu {
    background: rgba(0, 0, 0, 0.59);
    padding: 2.5em 1.5em 0;
    font-size: 1em;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
    background: transparent;
  }
  .linktoc {
    overflow-y: auto;
    scrollbar-color: linear-gradient(to bottom,#201c29,#100e17);
    scrollbar-width: 10px;
    overflow-x: hidden;
  }
  .linktoc::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .linktoc::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#d201c29),to(#100e17));
    background: linear-gradient(to bottom,#201c29,#100e17);
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
  }
  .linktoc::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.59);
  }
  ul {
    max-height: 78vh;
  }
`
export const TableOfContents = styled.div`
  ul {
    textIndent: -1em hanging;
  }
  li {
    margin-bottom: 1em;
  }
  a {
    color: ${props => props.theme.links};
  }
  a:hover {
     color: ${props => props.theme.hoveredLinks};
  }
  a:active {
     color: ${props => props.theme.activeLinks};
  }
`
const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.black};
`
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
export default class BlogPage extends React.Component {
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
        <StyledTableMenu>
          <Menu5 right customBurgerIcon={<Tags />}>
            <Title>
              <PostTocIcon />
                | All Site Tags
            </Title>
            <TableOfContents>
              <ul className='linktoc taglist field is-grouped'>
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
          </Menu5>
        </StyledTableMenu>
        <section className='hero'>
          <Image />
        </section>
        <section className='section'>
          <div className='column is-10 is-offset-1'>
            <Styledh1>
                  Blog | PubliusLogic
            </Styledh1>
            <p>✨ Listing all Posts.</p>
            <p>
              For Refinements see <Link className='a' to='/categories/'>Categories</Link> or <Link className='a' to='/tags/'>Tags</Link>
            </p>
          </div>
        </section>
        <section className='section'>
          <div className='container content'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <PostCard posts={group} />
                <div className='container content'>
                  <div className='columns is-desktop is-vcentered' style={{ marginTop: `2rem` }}>
                    <div className='column is-7 is-offset-1'>
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
                    </div>
                    <div className='column is-pulled-right'>
                      <div className='field has-addons'>
                        <span className='control'>
                          {!first && <PaginationLink test={first} url={previousUrl} text='Previous' />}
                          {!last && <PaginationLink test={last} url={nextUrl} text='Next' />}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
