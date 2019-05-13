import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from '../Photos'
import styled from 'styled-components'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

export default class Lightbox extends Component {
  static propTypes = {
    photosImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
    };
  }

  render () {
    const { photosImages } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <LightboxContainer>
          {photosImages.map(image => (
            <PreviewButton
              key={image.node.childImageSharp.fluid.src}
              type='button'
              onClick={() => this.setState({ showLightbox: true, selectedImage: image })}
            >
              <Img fluid={image.node.childImageSharp.fluid} />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
          <Dialog>
            <Img fluid={selectedImage.node.childImageSharp.fluid} />
            <button type='button' onClick={() => this.setState({ showLightbox: false })}>
              Close
            </button>
          </Dialog>
        )}
      </Fragment>
    )
  }
}
