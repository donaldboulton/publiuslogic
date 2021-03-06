import React from 'react'
import PropTypes from 'prop-types'
import Content from '../Content'
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

const ArticlePageTemplate = ({
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <Prism />
      <PostContent content={content} />
    </div>
  )
}

ArticlePageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default ArticlePageTemplate

