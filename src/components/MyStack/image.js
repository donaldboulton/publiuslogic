import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { generateMedia } from 'styled-media-query'

const media = generateMedia()

const ImagesSection = ({ className, title, img, photo, photos }) => (
  <StaticQuery
    query={graphql`
      query {
        photos: allFile(filter: {sourceInstanceName: { eq: "photos" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      photos = photo.filter(photo => photo.title)
      return (
        <StyledWrapper>
          <StyledSymetryWrapper key={photo.title} >
            {photos.map((photo, index) => (
              <StyledImage
                alt={photo.title} fluid={photo.fluid} image={photo.fluid}
              />
            ))}
          </StyledSymetryWrapper>
        </StyledWrapper>
      )
    }
    }
  />
)

const StyledSymetryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`
const StyledImage = styled(Img)`
  width: 200px;
  height: 200px;
`
const StyledImagesSection = styled(ImagesSection)`
  position: relative;
  text-align: center;
  
  ${media.lessThan('small')`
    background-size: 200px;
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
const StyledWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  overflow: hidden;
  // This is an example how to target the pseudo-elements via classId (deprecated):
  //.gatsby-background-image-gbi:after, .gatsby-background-image-gbi:before {
  //  background-clip: content-box;
  //}
`

export default StyledImagesSection
