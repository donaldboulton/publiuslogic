import React from 'react'
import PropTypes from 'prop-types'
import { ArticleTemplate } from '../../templates/article-page'

const ArticlePreview = ({ entry, widgetFor }) => {
  return (
    <ArticleTemplate
      title={entry.getIn(['data', 'title'])}
      cover={entry.getIn(['data', 'cover'])}
      date={entry.getIn(['data', 'datetime'])}
      category={entry.getIn(['data', 'category'])}
      tags={entry.getIn(['data', 'tags'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      tweet_id={entry.getIn(['data', 'tweet_id'])}
      content={widgetFor('body')}
      path={entry.getIn(['data', 'path'])}
      slug={entry.getIn(['data', 'slug'])}
    />
  )
}

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePreview
