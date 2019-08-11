import React, { Component } from 'react'
import Img from 'gatsby-image'
import path from 'path'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const media = generateMedia({
  xs: '350px',
  sm: '768px',
  md: '1200px',
  lg: '1400px',
})
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
          style={{ height: '400px', width: '100%' }}
        />
      )
    }

    /* eslint no-undef: 'off' */
    const coverURL =
      post.cover.substring(0, 1) === '/'
        ? __PATH_PREFIX__ + post.cover
        : post.cover
    return (
      <div>
        <StyledBackgroundSection className='hero cover-container'>
          <div
            style={{
              backgroundImage: `url(${coverURL})`,
              height: `400px`,
              width: `100%`,
              display: `flex`,
              placeContent: `start`,
            }}
          >
            <div
              className='hero-body'
              style={{
                placeSelf: `center`,
                textAlign: `center`,
                height: `50vh`,
                maxWidth: 1260,
                padding: `0px 1.0875rem 1.45rem`,
                marginTop: `5rem`,
              }}
            /><div className='overlay'>{post.meta_title}</div>
          </div>
        </StyledBackgroundSection>
      </div>
    )
  }
}

const StyledBackgroundSection = styled(PostCover)`
position: relative;
text-align: center;
width: 100vw;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;

${media.lessThan('lg')`
  background-size: cover;
    &:after, &:before {
    background-size: contain;
  }
`}

// For pseudo-elements you have to overwrite the default options (see style={{}} above).
// See: https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles 
//&:after, &:before {
//   background-clip: content-box;
//   background-size: contain;
//}
`

export default PostCover
