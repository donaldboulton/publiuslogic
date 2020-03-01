import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { PageBody } from '../components/styles/PageBody'
import Image from '../pages/categories/image'
import { Styledh1 } from '../components/styles/ArticleStyles'
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
      <Layout pageTitle={title}>
        <Helmet title={`${category} | ${title}`} />
        <section className='hero post-cover'>
          <Image />
        </section>
        <PageBody as='div'>
          <Styledh1>
            Categories
          </Styledh1>
          <section>
            style={{ marginBottom: '6rem' }}
            >
            <h3>{categoryHeader}</h3>
            <ul className='taglist read-more'>{postLinks}</ul>
            <p>
              <Link aria-label='All Categories' className='a' to='/categories/'>Browse all categories →</Link>
            </p>
          </section>
        </PageBody>
      </Layout>
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
