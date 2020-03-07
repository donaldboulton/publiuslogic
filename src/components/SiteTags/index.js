import React, { useRef, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { TagsTitle, TagsDiv, TagsIcon, TagsToggle } from './styles'
import { TableOfContents } from '../styles/ArticleStyles'

const SiteTags = ({ group, ...rest }) => {
  const { tagsTitle = `Site Tags` } = rest
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))

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
    <>
      <TagsToggle opener open={open} onClick={() => setOpen(true)} />
      <TagsDiv ref={ref} open={open}>
        <TagsTitle>
          <TagsIcon />
          {tagsTitle}
          <TagsToggle onClick={() => setOpen(false)} />
        </TagsTitle>
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
      </TagsDiv>
    </>
  )
}

export default SiteTags

