import React, { useRef, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { TagsTitle, TagsDiv, TagsToggle } from './styles'
import { Pricetags } from '@styled-icons/evaicons-solid/Pricetags'
import { TableOfContents } from '../styles/ArticleStyles'

const SiteTags = ({ group, ...rest }) => {
  const { tagsTitle = `Tags` } = rest
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
      <TagsDiv ref={ref} open={open} className='footer'>
        <TagsTitle>
          <Pricetags />
          {tagsTitle}
          <TagsToggle onClick={() => setOpen(false)} />
        </TagsTitle>
        <TableOfContents>
          <nav className='nav-scroll'>
            <ul className='taglist field is-grouped is-grouped-multiline'>
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
          </nav>
        </TableOfContents>
      </TagsDiv>
    </>
  )
}

export default SiteTags

