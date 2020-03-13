import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../pages/tags/image'
import Tags from '../components/SiteTags'
import { Styledh1 } from '../components/styles/ArticleStyles'
import { PageBody, BodyWrapper, TocWrapper } from '../components/styles/PageBody'
class TagRoute extends Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
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
        <section
          className='post-cover'
          style={{ marginBottom: '2rem' }}
        >
          <Image />
        </section>
        <PageBody as='div'>
          <BodyWrapper>
            <Styledh1>
              Tags
            </Styledh1>
            <section
              style={{ marginBottom: '6rem' }}
            >
              <Helmet title={`${tag} | ${title}`} />
              <h3 className='title is-size-4 is-bold-light'>{tagHeader}</h3>
              <ul aria-label='Read More' className='taglist read-more'>{postLinks}</ul>
              <p>
                <Link aria-label='Browse all tags' className='a' to='/tags/'>Browse all tags →</Link>
              </p>
            </section>
          </BodyWrapper>
        </PageBody>
        <TocWrapper>
          <Tags />
        </TocWrapper>
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
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
