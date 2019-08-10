import React, { Component } from 'react'
import Img from 'gatsby-image'
import path from 'path'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const media = generateMedia({
  ws: '280px',
  xs: '350px',
  sm: '768px',
  md: '1224px',
  lg: '1824px',
})

export const Cover = styled(Img)`
  width: 100vw;
  height: 400px;
  z-index: 1;
  background-clip: border-box;
  background-origin: border-box;
  position: absolute !important;
`
const StyledBackgroundSection = styled(BackgroundSection)`
  position: relative;
  text-align: center;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  
  ${media.lessThan('large')`
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
      <StyledBackgroundSection className='hero cover-container'>
        <div
          id='Cover'
          style={{
            backgroundImage: `url(${coverURL})`,
            height: `400px`,
            width: `100%`,
            display: `flex`,
            placeContent: `start`,
          }}
          className={coverClassName}
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
          >
            <div className='overlay'>{post.meta_title}</div>
          </div>
        </div>
      </StyledBackgroundSection>
    )
  }
}

export default PostCover

