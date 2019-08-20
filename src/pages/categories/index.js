import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Global from '../../components/Global'

const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 38px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background: radial-gradient(
    circle farthest-corner at center center,
    #8e0436,
    #d64000
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

const CategorysPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Global>
    <Helmet title={`Categories | ${title}`} />
    <section className='hero hero-blog-cover'>
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
              {group.map(categroy => (
                <li className='control' key={categroy.fieldValue}>
                  <Link to={`/categorys/${kebabCase(categroy.fieldValue)}/`}>
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
