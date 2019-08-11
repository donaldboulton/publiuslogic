import React, { Component } from 'react'
import Img from 'gatsby-image'
import path from 'path'
import './PostCover.scss'

class PostCover extends Component {
  render () {
    const { fileEdges, postNode, coverHeight, coverClassName } = this.props
    const post = postNode.frontmatter ? postNode.frontmatter : postNode
    const coverNodeList = fileEdges.filter(fileNode => {
      if (fileNode.node.childImageSharp === null) return false

      if (
        fileNode.node.absolutePath.indexOf(
          path.join('/static/assets/images/', post.cover)
        ) !== -1
      ) { return true }

      return false
    })

    if (coverNodeList.length === 1) {
      return (
        <Img
          fluid={coverNodeList[0].node.childImageSharp.fluid}
          outerWrapperClassName={coverClassName}
          style={{ height: '400px', width: '100vw' }}
        />
      )
    }

    /* eslint no-undef: 'off' */
    const coverURL =
      post.cover.substring(0, 1) === '/'
        ? __PATH_PREFIX__ + post.cover
        : post.cover
    return (
      <div
        style={{
          backgroundImage: `url(${coverURL})`,
          width: `100vw`,
          height: `400px`,
        }}
        className={coverClassName}
      />
    )
  }
}

export default PostCover

