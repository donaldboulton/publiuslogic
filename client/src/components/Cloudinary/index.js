/* eslint-disable indent */
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import { Grid, Cell } from 'styled-css-grid'
import { media } from '../../utils/mediaQuery'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const SectionTitle = styled.h3`
  font-size: 1em;
  margin: 0.67em 0;
  ${media.xs`
    font-size: .85em;
  `}
`
class Gallery extends Component {
  constructor (props) {
    super(props)
    this.link = React.createRef()
    this.state = {
      gallery: [],
      isOpen: false,
      link: this.href,
    }
  }

  componentDidMount () {
    // Request for images tagged cats
    axios.get('https://res.cloudinary.com/mansbooks/image/list/v1557911334/cats.json')
      .then(res => {
        console.log(res.data.resources)
        this.setState({ gallery: res.data.resources })
      })
  }
  onLink (event) {
    this.setState({ link: this.href = `https://res.cloudinary.com/mansbooks/image/upload/${data.public_id}.jpg` })
  }
  uploadWidget () {
    let _this = this
    cloudinary.openUploadWidget({ cloud_name: 'mansbooks', upload_preset: 'photos-preset', tags: ['cats'], sources: ['local', 'url', 'dropbox'], dropboxAppKey: 'fk4ayp4zwevjgl7' },
      function (error, result) {
      // Update gallery state with newly uploaded image
          _this.setState({ gallery: _this.state.gallery.concat(result) })
      })
  }
  render () {
    const { gallery, public_id, isOpen } = this.state
    return (
      <div>
        <Fragment>
          <SectionTitle>Cat Gallery</SectionTitle>
          <div>
            <CloudinaryContext cloudName='mansbooks'>
              <Grid columns='repeat(auto-fit,minmax(260px,1fr))'>
                {
                this.state.gallery.map(data => {
                return (
                  <Cell key={data.public_id}>
                    <Image publicId={data.public_id} onClick={() => this.setState({ isOpen: true })} link={`https://res.cloudinary.com/mansbooks/image/upload/${data.public_id}.jpg`}>
                      <Transformation
                        crop='scale'
                        width='250'
                        height='170'
                        radius='6'
                        dpr='auto'
                        fetchFormat='auto'
                        responsive_placeholder='blank'
                        />
                    </Image>
                  </Cell>
                  )
                })
              }
              </Grid>
            </CloudinaryContext>
          </div>
        </Fragment>
        {isOpen && (
          <Lightbox
            mainSrc={this.state.link.data.public_id}
            nextSrc={public_id[(gallery + 1) % public_id.length]}
            prevSrc={public_id[(gallery + public_id.length - 1) % public_id.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                gallery: (gallery + public_id.length - 1) % public_id.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                gallery: (gallery + 1) % public_id.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

export default Gallery
