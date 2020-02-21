import React from 'react'
import PropTypes from 'prop-types'
import Content from '../Content'
import ScrollDown from '../ScrollDown'

const AboutPageTemplate = ({
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <ScrollDown
        direction='down' to={25}
        showAbove={-1500}
        css='position: fixed; right: 1em; top: 3.1em;'
      />
      <PostContent content={content} />
    </div>
  )
}
AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
