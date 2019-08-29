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
    #ffffff,
    #cccccc
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Global pageTitle={title}>
    <Helmet title={`Tags | ${title}`} />
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <Styledh1>
                  All Site Tags
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
            style={{ marginBottom: '6rem' }}
          >
            <ul className='taglist field is-grouped is-grouped-multiline'>
              {group.map(tag => (
                <li className='control' key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <div className='tags has-addons is-large'>
                      <span className='tag is-primary'>{tag.fieldValue}</span>
                      <span className='tag is-dark'>{tag.totalCount}</span>
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

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
