import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Cloudinary from 'gatsby-source-cloudinary'

const Gallery = ({ data, folder, context }) => {
  return (
    <div>
      <Fragment>
        <Cloudinary
          folder={folder}
          data={data}
          context='true'
        />
      </Fragment>
    </div>
  )
}

Gallery.propTypes = {
  folder: PropTypes.string.isRequired,
}

export default Gallery
