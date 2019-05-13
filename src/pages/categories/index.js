import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Global from '../../components/Global'

const CategorysPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Global>
    <Helmet title={`Categorys | ${title}`} />
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                               Categorys
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
            <ul className='taglist field is-grouped is-grouped-multiline'>
              {group.map(categroy => (
                <li className='control' key={categroy.fieldValue}>
                  <Link to={`/tags/${kebabCase(categroy.fieldValue)}/`}>
                    <div className='tags has-addons is-large'>
                      <span className='tag is-primary'>{categroy.fieldValue}</span>
                      <span className='tag is-dark'>{categroy.totalCount}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Global>
)

export default CategorysPage

export const categoryPageQuery = graphql`
  query CategorysQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___categorys) {
        fieldValue
        totalCount
      }
    }
  }
`
