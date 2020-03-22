import React from 'react'
import PropTypes from 'prop-types'
import ArticleTemplate from '../../src/components/ArticleTemplate'

const ArticlePreview = ({ entry, widgetFor }) => {
  return (
    <ArticleTemplate
      content={widgetFor('body')}
      cover={entry.getIn(['data', 'cover'])}
      date={entry.getIn(['data', 'datetime'])}
      category={entry.getIn(['data', 'category'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      title={entry.getIn(['data', 'title'])}
      tweet_id={entry.getIn(['data', 'tweet_id'])}
      categorys={entry.getIn(['data', 'categorys'])}
      tags={entry.getIn(['data', 'tags'])}
      showToc={entry.getIn(['data', 'showToc'])}
      showTags={entry.getIn(['data', 'showTags'])}
      showAdds={entry.getIn(['data', 'showAdds'])}
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
