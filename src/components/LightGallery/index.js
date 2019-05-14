import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { LightgalleryProvider } from 'react-lightgallery'
import Masonry from '../Masonry'

import { PhotoItem } from './styles'

const PhotoItems = ({ className, title, img, photos }) => (
  <StaticQuery
    query={graphql`
    query {
      photos: allFile(filter: {sourceInstanceName: { eq: "photos" }}) {
        edges {
          node {
            name
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
      photos = photos.filter(photo => photo.title)
      return (
        <>
          <LightgalleryProvider
            lightgallerySettings={
              {
                mode: 'fade',
                enableTouch: 'true',
                enableDrag: 'true',
                animateThumb: 'true',
                speed: 500,
                // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
              }
            }
            galleryClassName='gallery'
          >
            <Masonry id='aniimated-thumbnials'>
              {photos.map((photo, index) => (
                <div key={photo.title} className='react_lightgallery_item'>
                  <PhotoItem alt={photo.title} fluid={photo.fluid} image={photo.fluid} group='subject' />
                </div>
              ))}
            </Masonry>
          </LightgalleryProvider>
          )}
        </>
      )
    }
    }
  />
)

export default PhotoItems
