import React from 'react'
import { ImageGrid, ImageItem, Thumbnail } from './styles'
import {useStaticQuery, graphql} from 'gatsby'

const ImageGallery = () => {
    const data = useStaticQuery(graphql`query CloudinaryImage {
            allCloudinaryMedia {
              edges {
                node {
                  secure_url
                }
              }
            }
          }`
    )
    const clImages = data.allCloudinaryMedia.edges
    return (
        <div>
          <ImageGrid className="image-grid">
            {clImages.map((image, index) => (
                  <ImageItem className="image-item" key={`${index}-cl`}>
                    <Thumbnail src={image.node.secure_url} alt={"no alt :("} />
                  </ImageItem>
                ))
            }
          </ImageGrid>
        </div>
      )
  }
  export default ImageGallery