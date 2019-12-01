import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktopL: '2560px',
  desktop: '1960px',
  laptop: '1024px',
  tablet: '768px',
  mobile: '320px',
})

const ImagesSection = ({ className, title, Img, photo, photos }) => (
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
          <StyledSymetryWrapper key={photo.title}>
            {photos.map((photo, index) => (
              <StyledImage
                key={photo.title} alt={photo.title} fluid={photo.fluid} image={photo.fluid}
              />
            ))}
          </StyledSymetryWrapper>
        </StyledWrapper>
      )
    }}
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
  ${customMedia.lessThan('desktop')} {
    background-size: 200px;
      &:after, &:before {
      background-size: contain;
    }
  }
  `
const StyledWrapper = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  overflow: hidden;
`

export default StyledImagesSection
