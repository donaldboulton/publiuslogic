import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { PageBody } from '../../components/styles/PageBody'
import { Styledh1 } from '../components/styles/ArticleStyles'

import Image from './image'

const CategoriesPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <Helmet title={`Categories | ${title}`} />
    <PageBody>
      <section
        className='post-cover'
        style={{ marginBottom: '2rem' }}
      >
        <Image />
      </section>
      <section
        style={{ marginBottom: '2rem' }}
      >
        <Styledh1>
          All Site Categories
        </Styledh1>
      </section>
      <section
        style={{ marginBottom: '2rem' }}
      >
        <ul className='taglist field is-grouped is-grouped-multiline'>
          {group.map(category => (
            <li className='control' key={category.fieldValue}>
              <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                <div className='tags has-addons is-large'>
                  <span aria-label='Category' className='tag is-primary'>{category.fieldValue}</span>
                  <span aria-label='Category Count' className='tag is-dark'>{category.totalCount}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageBody>
  </Layout>
)

export default CategoriesPage

export const categoryPageQuery = graphql`
  query CategoryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
