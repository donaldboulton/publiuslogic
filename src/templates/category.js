import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostListing from './blog.js'

export default class CategoryTemplate extends React.Component {
  render () {
    const { pageContext, data } = this.props
    const { category } = pageContext
    return (
      <Layout>
        <div
          location={this.props.location}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
        >
          <div className='category-container'>
            <Helmet title={`Posts in category "${category}"`} />
            <PostListing postEdges={data.allMarkdownRemark.edges} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`
