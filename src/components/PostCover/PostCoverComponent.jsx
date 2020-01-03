import React from 'react'
import Img from 'gatsby-image'
import path from 'path'

class PostCover extends React.Component {
  render () {
    const { fileEdges, cover, coverHeight, coverClassName } = this.props
    const coverNodeList = fileEdges.filter(fileNode => {
      if (fileNode.node.childImageSharp === null) return false

      if (
        fileNode.node.absolutePath.indexOf(
          path.join('/static/assets/images/', cover)
        ) !== -1
      ) { return true }

      return false
    })

    if (coverNodeList.length === 1) {
      return (
        <Img
          fluid={coverNodeList[0].node.childImageSharp.fluid}
          outerWrapperClassName={coverClassName}
          style={{ height: coverHeight, width: '100%' }}
        />
      )
    }

    /* eslint no-undef: 'off' */
    const coverURL =
      cover.substring(0, 1) === '/'
        ? __PATH_PREFIX__ + cover
        : cover
    return (
      <div
        style={{
          backgroundImage: `url(${coverURL})`,
          height: `${coverHeight}px`
        }}
        className={coverClassName}
      />
    )
  }
}

export default PostCover

