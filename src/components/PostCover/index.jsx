import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostCover from './PostCoverComponent'

class queryWrapper extends Component {
  render () {
    const { postNode, coverHeight, coverClassName } = this.props
    return (
      <StaticQuery
        query={graphql`
          query CoverQuery {
            allFile {
              edges {
                node {
                  id
                  absolutePath
                  childImageSharp {
                    id
                    resolutions {
                      aspectRatio
                      width
                      height
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      originalName
                    }
                    internal {
                      contentDigest
                      type
                      owner
                    }
                    fluid(quality: 90, maxWidth: 1960) {
                      ...GatsbyImageSharpFluid_withWebp
                      originalName
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <PostCover
            fileEdges={data.allFile.edges}
            postNode={postNode}
            coverHeight={coverHeight}
            coverClassName={coverClassName}
          />
        )}
      />
    )
  }
}

export default queryWrapper
