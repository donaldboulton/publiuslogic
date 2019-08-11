import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostCover from './PostCoverComponent'

class queryWrapper extends Component {
  render () {
    const { postNode, coverHeight, coverClassName } = this.props
    return (
      <StaticQuery
        query={graphql`
          query coverQuery {
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
                    fluid(quality: 90, maxWidth: 1400) {
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
          <PostCover>
            <Img
              fluid={data.coverQuery.childImageSharp.fluid}
              fileEdges={data.allFile.edges}
              postNode={postNode}
              coverHeight={coverHeight}
              coverClassName={coverClassName}
            />
          </PostCover>
        )}
      />
    )
  }
}

export default queryWrapper
