import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, widgetFor }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <HomePageTemplate
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
      offerings={{ blurbs }}
      testimonials={testimonials}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePagePreview
