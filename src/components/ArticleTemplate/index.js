import React from 'react'
import Content from '../Content'
import GithubButtonsRepo from '../GithubButtonsRepo'
import WebIntents from '../WebIntents'
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
  categorys,
  meta_title,
  meta_desc,
  date,
  tags,
  title,
  slug,
  tweet_id,
}) => {
  const PostContent = contentComponent || Content
  const { markdownRemark: post } = date

  return (
    <div>
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {title}
      </h1>
      <ScrollDown
        direction='down' to={25}
        showAbove={-1500}
        css='position: fixed; right: 1em; top: 4.5em;'
      />
      <br />
      <div className='columns is-desktop is-vcentered'>
        <div className='column is-7'>
          <span className='subtitle is-size-4'>
            <Calendar size='1.2em' />&nbsp;
            <small>{date}&nbsp;</small>
          </span>
        </div>
        <GithubButtonsRepo className='is-size-6 is-pulled-right' />
      </div>
      <br />
      <Prism />
      <PostContent content={content} />
      <div className='column is-10'>
        <div className='is-vcentered'>
          <WebIntents />
        </div>
      </div>
      <div className='columns is-vcentered'>
        <div className='column is-three-quarters' style={{ marginTop: `2rem` }}>
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
        <div className='column is-pulled-right'>
          <h4>Category</h4>
          <Link className='button is-primary' to={`/categories/`}>{categorys}</Link>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ArticleTemplate
