import React from 'react'
import PropTypes from 'prop-types'
import Content from '../Content'

const HomePageTemplate = ({
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <PostContent content={content} />
    </div>
  )
}
HomePageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default HomePageTemplate
