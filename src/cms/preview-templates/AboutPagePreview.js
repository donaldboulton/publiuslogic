import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    cover={entry.getIn(['data', 'cover'])}
    category={entry.getIn(['data', 'category'])}
    date={entry.getIn(['data', 'datetime'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    tweet_id={entry.getIn(['data', 'tweet_id'])}
    content={widgetFor('body')}
    slug={entry.getIn(['data', 'slug'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
