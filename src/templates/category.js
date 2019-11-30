import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Global from '../components/Global'
import Image from '../components/SiteMapPageTemplate/image'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
`
class CategoryRoute extends Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 aria-label='Page Title' className='is-size-2'>{post.node.frontmatter.title}</h2>
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
      <Global pageTitle={title}>
        <section className='hero is-medium'>
          <Image />
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <Styledh1>
                      Categories
                    </Styledh1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  <Link aria-label='All Categories' className='a' to='/categories/'>Browse all categories →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Global>
    )
  }
}

export default CategoryRoute

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
