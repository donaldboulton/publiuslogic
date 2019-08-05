import React from 'react'
import styled from 'styled-components'
import Content from '../Content'
import GithubButtonsRepo from '../GithubButtonsRepo'
import WebIntents from '../WebIntents'
import ScrollDown from '../ScrollDown'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
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

require('moment')

const ArticleTemplate = ({
  content,
  cover,
  imageWidth,
  imageHeight,
  canonical,
  timeToRead,
  contentComponent,
  categorys,
  meta_description,
  date,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content

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
      <div className='columns is-desktop is-vcentered box'>
        <div className='column is-4'>
          <span className='subtitle is-size-4'>
            <Calendar size='.85em' />&nbsp;
            <Date>{date}&nbsp;</Date>&nbsp;
            <Timer size='.85em' />
            <Time>{timeToRead} 3 min read</Time>
          </span>
        </div>
        <WebIntents />
        <GithubButtons><GithubButtonsRepo className='is-size-6 is-pulled-right' /></GithubButtons>
      </div>
      <br />
      <Prism />
      <PostContent content={content} />
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
            <Link className='button is-primary is-small' to={`/categories/`}>{categorys}</Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

const Time = styled.span`
  font-size: 1rem;
  color: silver;
`
const Date = styled.span`
  font-size: 1rem;
  color: silver;
`
const GithubButtons = styled.span`
  top: 1px;
`

export default ArticleTemplate
