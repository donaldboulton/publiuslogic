import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { Tags } from 'styled-icons/fa-solid/Tags'
import { NavEntry, SubNav } from '../Nav/Desktop/styles'
import { TableOfContents, PageTitle, ArticleTocIcon } from '../styles/ArticleStyles'

const SiteTags = ({ group }) => {
  const data = useStaticQuery(graphql`
      {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `)
  return (
    <NavEntry key={tag}>
        <Tags />
      <SubNav>
        <PageTitle>
          <ArticleTocIcon />
            | Site Tags
        </PageTitle>
        <TableOfContents>
          <ul className='linktoc taglist field is-grouped is-grouped-multiline'>
            {data.allMarkdownRemark.group.map(tag => (
              <li className='control menu-item' key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  <div className='tags has-addons is-large'>
                    <span aria-label='Tag' className='tag is-primary'>{tag.fieldValue}</span>
                    <span aria-label='Tag Count' className='tag is-dark'>{tag.totalCount}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </TableOfContents>
      </SubNav>
    </NavEntry>
  )
}

export default SiteTags

