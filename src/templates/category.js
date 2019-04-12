import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class CategoriesRoute extends Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className='is-size-2'>{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const categoryHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${category}”`

    return (
      <Layout>
        <section className='section'>
          <Helmet title={`${category} | ${title}`} />
          <div className='container content'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='title is-size-4 is-bold-light'>{categoryHeader}</h3>
                <ul className='taglist read-more'>{postLinks}</ul>
                <p>
                  <Link className='button is-primary' to='/categories/'>Browse all Categories →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CategoriesRoute

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
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
