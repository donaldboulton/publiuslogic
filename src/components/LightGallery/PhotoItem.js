import React from 'react'
import { LightgalleryItem } from 'react-lightgallery'

import { LargeImage } from './styles'

const PhotoItem = ({ photo, url, title, ItemTitle, LinesEllipsis }) => (
  <div>
    <LightgalleryItem group='any' src={photo} className='react_lightgallery_gallery'>
      <a href={url}>
        <img key={LargeImage} src={photo} />
        <ItemTitle>
          <LinesEllipsis
            text={title}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </ItemTitle>
      </a>
    </LightgalleryItem>
  </div>
)

export default PhotoItem
