import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Menu4 } from 'react-burger-menu'
import { kebabCase } from 'lodash'
import { Tags } from 'styled-icons/fa-solid/Tags'
import { StyledTableMenu, PageTitle, TableOfContents, ArticleTocIcon } from '../styles/ArticleStyles'

class TagsMenu extends React.Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query TagQuery {
            allMarkdownRemark(limit: 1000) {
              group(field: frontmatter___tags) {
                fieldValue
                totalCount
              }
            }
          }
        `}
        render={data => (
          <StyledTableMenu>
            <Menu4 right customBurgerIcon={<Tags />}>
              <PageTitle>
                <ArticleTocIcon />
              | Site Tags
              </PageTitle>
              <TableOfContents>
                <ul className='linktoc taglist field is-grouped is-grouped-multiline'>
                  {data.group.map(_tag => (
                    <li className='control menu-item' key={data.tag.fieldValue}>
                      <Link to={`/tags/${kebabCase(data.tag.fieldValue)}/`}>
                        <div className='tags has-addons is-large'>
                          <span aria-label='Tag' className='tag is-primary'>{data.tag.fieldValue}</span>
                          <span aria-label='Tag Count' className='tag is-dark'>{data.tag.totalCount}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </TableOfContents>
            </Menu4>
          </StyledTableMenu>
        )}
      />
    )
  }
}

export default TagsMenu
