import React from 'react'
import PropTypes from 'prop-types'
import ArticlePageTemplate from '../../components/ArticlePageTemplate'

const ArticlePagePreview = ({ entry, widgetFor }) => {
  return (
    <ArticlePageTemplate
      title={entry.getIn(['data', 'title'])}
      cover={entry.getIn(['data', 'cover'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      date={entry.getIn(['data', 'datetime'])}
      category={entry.getIn(['data', 'category'])}
      tweet_id={entry.getIn(['data', 'tweet_id'])}
      tags={entry.getIn(['data', 'tags'])}
      showToc={entry.getIn(['data', 'showToc'])}
      showTags={entry.getIn(['data', 'showTags'])}
      showAdds={entry.getIn(['data', 'showAdds'])}
      showStack={entry.getIn(['data', 'showStack'])}
      slug={entry.getIn(['data', 'slug'])}
      content={widgetFor('body')}
    />
  )
}

ArticlePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePagePreview
