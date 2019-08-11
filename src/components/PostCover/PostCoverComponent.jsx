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
        <StyledWrapper>
          <StyledSymetryWrapper>
            <StyledPostCover
              fluid={coverURL}
              postNode={postNode}
              coverClassName='hero'
              objectFit='cover'
              objectPosition='50% 50%'
            />
            <StyledTitle>
              <Styledh1>
                {post.frontmatter.meta_title}
              </Styledh1>
            </StyledTitle>
          </StyledSymetryWrapper>
        </StyledWrapper>
      </div>
    )
  }
}

export const StyledTitle = styled.div`
  text-align: center;
  font-size: 1.5em;
  margin: 1em;
  z-index: 20;
  box-sizing: border-box;
  display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 1em;
`
const StyledSymetryWrapper = styled.div`
width: 100vw;
height: 400px;
overflow: hidden;
`
const StyledWrapper = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  overflow: hidden;
  // This is an example how to target the pseudo-elements via classId (deprecated):
  //.gatsby-background-image-gbi:after, .gatsby-background-image-gbi:before {
  //  background-clip: content-box;
  //}
`
const Styledh1 = styled.h1`
  display: inline-block;
  font-size: 60px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  z-index: 22;
  background: radial-gradient(
    circle farthest-corner at center center,
    #8e0436,
    #d64000
  ) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`
const StyledPostCover = styled(Img)`
  width: 100vw;
  height: 400px;
  z-index: 1;
  background-clip: border-box;
  background-origin: border-box;
  position: absolute !important;
`
export const StyledBackgroundSection = styled(PostCover)`
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

export default PostCover
