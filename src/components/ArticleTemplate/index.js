import React from 'react'
import Content from '../Content'
import { CommentCount } from 'disqus-react'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import { disqusConfig } from '../../utils/misc'

const ArticleTemplate = ({
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
  const PostContent = contentComponent || Content

  return (
    <div>
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {title}
      </h1>
      <img src={cover} alt={title} />      
      <br />
      <span>
        <Calendar size='1.2em' />
        {date}
        <Link to={`/blog` + slug + `#disqus_thread`}>
          <CommentCount {...disqusConfig({ slug, title })} />
        </Link>
      </span>
      <br />
      <PostContent content={content} />
      <div style={{ marginTop: `2rem` }}>
        <h4>Tags</h4>
        <ul className='taglist'>
          {(tags && tags.length)
            ? tags.map(tag => (
              <li key={tag + `tag`}>
                <Link className='button is-primary' to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))
            : null
          }
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default ArticleTemplate
