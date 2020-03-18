import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../src/components/AboutPageTemplate'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    cover={entry.getIn(['data', 'cover'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
    showToc={entry.getIn(['data', 'showToc'])}
    showTags={entry.getIn(['data', 'showTags'])}
    showAdds={entry.getIn(['data', 'showAdds'])}
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
