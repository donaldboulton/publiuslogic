import React from 'react'
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

export default AboutPageTemplate
