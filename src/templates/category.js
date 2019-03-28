import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../data/config'

export default class CategoryTemplate extends React.Component {
  render () {
    const { category } = this.props.pageContext
    return (
      <div
        location={this.props.location}
        title={category.charAt(0).toUpperCase() + category.slice(1)}
      >
        <div className='category-container'>
          <Helmet>
            <title>
              {`Posts in category '${category}' | ${config.siteTitle}`}
            </title>
            <link
              rel='canonical'
              href={`${config.siteUrl}/categories/${category}`}
            />
          </Helmet>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query CategoryByID($category: String!) {
    markdownRemark(id: { eq: $category }) {
      id
      html
      fields {
            slug
          }
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        category
        meta_title
        meta_description
        tags
      }
    }
  }
`
