import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Image from './image'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
`

const CategoriesPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <Helmet title={`Categories | ${title}`} />
    <section className='hero is-medium'>
      <Image />
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <Styledh1>
                  All Site Categories
                </Styledh1>
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
          </div>
        </div>
      </div>
    </section>
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
