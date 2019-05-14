import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import ImageGallery from 'gatsby-plugin-cloudinary-image-gallery'

const Gallery = ({ folder, columns, orientation }) => (
  <StaticQuery
    query={imageGalleryQuery}
    render={data => (
      <ImageGallery
        folder={folder}
        columns={columns}
        data={data}
        orientation={orientation}
      />
    )}
  />
)

const imageGalleryQuery = graphql`
  query galleryQuery {
    cloudinaryImage: allCloudinaryImage {
      edges {
        node {
          id
          folder
          thumb
          imgUrl
          width
          height
          orientation
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

Gallery.propTypes = {
  folder: PropTypes.string.isRequired,
}

export default Gallery
