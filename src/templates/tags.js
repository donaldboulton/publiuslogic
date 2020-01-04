import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../components/SiteMapPageTemplate/image'
import styled from 'styled-components'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
`

class TagRoute extends React.Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.frontmatter.path}>
        <Link to={post.node.frontmatter.path}>
          <h2 className='is-size-2'>{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout pageTitle={title}>
        <section className='hero is-medium'>
          <Image />
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <Styledh1>
                       Tags
                    </Styledh1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <Helmet title={`${tag} | ${title}`} />
          <div className='container content'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='title is-size-4 is-bold-light'>{tagHeader}</h3>
                <ul aria-label='Read More' className='taglist read-more'>{postLinks}</ul>
                <p>
                  <Link aria-label='Browse all tags' className='a' to='/tags/'>Browse all tags →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
