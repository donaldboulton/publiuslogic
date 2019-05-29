import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Lightbox from '../LightGallery/LightBox'

const Photos = () => (
  <StaticQuery
    query={graphql`
      query {
        photosImages: allFile(filter: {sourceInstanceName: { eq: "photos" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox photosImages={data.photosImages.edges} />}
  />
)

export default Photos
