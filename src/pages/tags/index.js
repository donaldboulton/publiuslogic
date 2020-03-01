import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { PageBody } from '../../components/styles/PageBody'
import { Styledh1 } from '../../components/styles/ArticleStyles'
import Image from './image'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout pageTitle={title}>
    <Helmet title={`Tags | ${title}`} />
    <section className='post-cover'>
      <Image />
    </section>
    <PageBody>
      <section>
        <Styledh1>
          All Site Tags
        </Styledh1>
      </section>
      <section
        style={{ marginBottom: '6rem' }}
      >
        <ul className='taglist field is-grouped is-grouped-multiline'>
          {group.map(tag => (
            <li className='control' key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <div className='tags has-addons is-large'>
                  <span aria-label='Tag' className='tag is-primary'>{tag.fieldValue}</span>
                  <span aria-label='Tag Count' className='tag is-dark'>{tag.totalCount}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageBody>
  </Layout>
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
