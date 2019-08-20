import React from 'react'
import Content from '../Content'
import ScrollDown from '../ScrollDown'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Reviews from '../Ratings'
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
  markdownRemark,
  cover,
  imageWidth,
  imageHeight,
  canonical,
  readingTime,
  contentComponent,
  category,
  meta_title,
  meta_description,
  date,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <ScrollDown
        direction='down' to={25}
        showAbove={-1500}
        css='position: fixed; right: 1em; top: 4.5em;'
      />
      <br />
      <Prism />
      <PostContent content={content} />
      <hr />
      <Reviews />
      <div className='container content'>
        <div className='columns is-desktop is-vcentered'>
          <div className='column is-10' style={{ marginTop: `2rem` }}>
            <h4>Tags</h4>
            <ul className='taglist'>
              {(tags && tags.length)
                ? tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link className='button is-primary is-small' to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))
                : null
              }
            </ul>
          </div>
          <div className='column'>
            <h4>Category</h4>
            <Link className='button is-primary is-small' to={`/categories/`}>{category}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleTemplate
