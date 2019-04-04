import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const CategoryPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <Helmet title={`Categories | ${title}`} />
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                                    Categories
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container content'>
        <div className='columns'>
          <div
            className='column is-10 is-offset-1'
            style={{ marginBottom: '6rem' }}
          >
            <ul className='categorylist field is-grouped is-grouped-multiline'>
              {group.map(category => (
                <li className='control' key={category.fieldValue}>
                  <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                    <div className='category has-addons'>
                      <span className='category is-primary'>{category.fieldValue}</span>
                      <span className='category is-dark'>{category.totalCount}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default CategoryPage

export const pageQuery = graphql`
  query CategoryByID($category: String!) {
    markdownRemark(id: { eq: $category }) {
      id
      html
      fields {
        slug
      }      
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
