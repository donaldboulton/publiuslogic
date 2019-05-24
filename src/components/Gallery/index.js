import React, { useState, Fragment } from 'react'
import { Lightbox, Image } from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Button from './Button'

const images = [
  'https://res.cloudinary.com/mansbooks/image/upload/photos/top-cat.jpg',
  'https://res.cloudinary.com/mansbooks/image/upload/photos/boys-kittens.jpg',
  'https://res.cloudinary.com/mansbooks/image/upload/photos/tiger-grass.jpg',
  'https://res.cloudinary.com/mansbooks/image/upload/photos/Banjo-Relaxing_covers.jpg',
]

function Gallery () {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <div className='column'>
      <Fragment>
        <Button type='button' onClick={() => setIsOpen(true)}>
          <span><Image images={photoIndex} /></span>
        </Button>
      </Fragment>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  )
}

export default Gallery
