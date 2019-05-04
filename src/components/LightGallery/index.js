import React from 'react'
import { LightgalleryProvider } from 'react-lightgallery'
import Masonry from '../Masonry'

import { PhotoItem } from './styles'
  
const Photos = ({ tags, photos }) => {
  photos = photos.filter(photo => photo.title)
  return (
    <>
      <LightgalleryProvider
        lightgallerySettings={
          {
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

export default Photos
