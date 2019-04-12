import React from 'react'
import PropTypes from 'prop-types'
import PrivacyPageTemplate from '../../components/PrivacyPageTemplate'

const PrivacyPagePreview = ({ entry, widgetFor }) => (
  <PrivacyPageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
  />
)

PrivacyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PrivacyPagePreview
