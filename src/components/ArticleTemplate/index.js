import React from 'react'
import Content from '../Content'
import GithubButtonsRepo from '../GithubButtonsRepo'
import ScrollDown from '../ScrollDown'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Prism from '../../utils/prism'

require('prismjs')
require('prismjs/plugins/toolbar/prism-toolbar.js')
require('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-json')
require('prismjs/components/prism-diff')
require('prismjs/components/prism-markdown')
require('prismjs/components/prism-graphql')

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
  const { markdownRemark: post } = date

  return (
    <div>
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {title}
      </h1>
      <ScrollDown
        direction='down' to={15}
        showAbove={-1500}
        css='position: fixed; right: 1em; top: 4.5em;'
      />
      <img src={cover} alt={title} />      
      <br />
      <span>
        <span className='subtitle is-size-4'>
          <Calendar size='1.2em' />&nbsp;
          <small>{date}&nbsp;</small>
        </span>
        <span className='is-pulled-right'>
          <GithubButtonsRepo />
        </span>
      </span>
      <br />
      <Prism />
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
