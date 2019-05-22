import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
  'https://res.cloudinary.com/mansbooks/image/upload/photos/top-cat.jpg',
  'https://res.cloudinary.com/mansbooks/image/upload/photos/boys-kittens.jpg',
  'https://res.cloudinary.com/mansbooks/image/upload/photos/tiger-grass.jpg',
  'https://res.cloudinary.com/mansbooks/image/upload/photos/Banjo-Relaxing_covers.jpg',
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render {
    const { photoIndex, isOpen } = this.state

    return (
      <div>
        <button type='button' onClick='{() => this.setState({ isOpen: true })}'>
          Cat Gallery
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}
