import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../components/AboutPageTemplate'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    cover={entry.getIn(['data', 'cover'])}
    date={entry.getIn(['data', 'datetime'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    title={entry.getIn(['data', 'title'])}
    category={entry.getIn(['data', 'category'])}
    tags={entry.getIn(['data', 'tags'])}
    showToc={entry.getIn(['data', 'showToc'])}
    showTags={entry.getIn(['data', 'showTags'])}
    showAdds={entry.getIn(['data', 'showAdds'])}
    showStack={entry.getIn(['data', 'showStack'])}
    slug={entry.getIn(['data', 'slug'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
