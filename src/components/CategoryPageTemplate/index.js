import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

const CategoryPageTemplate = ({
  content,
  contentComponent,
  cover,
  category,
  meta_title,
  meta_desc,
  date,
  tags,
  title,
  slug,
}) => {
  const { markdownRemarkFields: post } = date
  const { subtitle, meta_description } = this.props
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } }
  return (
    <div>
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
              <ul className='taglist field is-grouped is-grouped-multiline'>
                {group.map(category => (
                  <li className='control' key={category.fieldValue}>
                    <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                      <div className='tags has-addons'>
                        <span className='tags is-primary'>{category.fieldValue}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

CategoryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default CategoryPageTemplate
