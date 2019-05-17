import React from 'react'
import PropTypes from 'prop-types'
import Masonry from '../Masonry'
import Photo from '../Cloudinary'

const PhotosList = ({ photos }) => (
  <Masonry>
    <div className='photos'>
      {this.props.photos.map(photo => {
        return (
          <Photo
            key={photo.public_id}
            publicId={photo.public_id}
          />
        )
      })}
    </div>
  </Masonry>
)

Photo.propTypes = {
  photos: PropTypes.array,
  onPhotosUploaded: PropTypes.func,
}

Photo.contextTypes = {
  cloudName: PropTypes.string,
  uploadPreset: PropTypes.string,
}

export default PhotosList
