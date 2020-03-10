/* eslint-disable indent */
import React from 'react'
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import axios from 'axios'
import styled from 'styled-components'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import { Grid, Cell } from '../styles/Grid'
import 'lightgallery.js/dist/css/lightgallery.min.css'

const SectionTitle = styled.h3`
  font-size: 1em;
  margin: 0.67em 0;
`
class Gallery extends React.Component {
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
    const _this = this
    // eslint-disable-next-line no-undef
    cloudinary.openUploadWidget({ cloud_name: 'mansbooks', upload_preset: 'photos-preset', tags: ['cats'], sources: ['local', 'url', 'camera', 'image_search', 'facebook', 'dropbox', 'instagram'], dropboxAppKey: 'fk4ayp4zwevjgl7', googleApiKey: 'AIzaSyCEL0HqEXvP42ZYK-xd7CBqO50-ZzLKwFM' },
      // eslint-disable-next-line handle-callback-err
      function (error, result) {
      // Update gallery state with newly uploaded image
          _this.setState({ gallery: _this.state.gallery.concat(result) })
      })
  }

  render () {
    return (
      <>
        <SectionTitle>Cloudinary LightGallery</SectionTitle>
        <CloudinaryContext cloudName='mansbooks'>
          <Grid id='hash'>
            <LightgalleryProvider>
              {
                this.state.gallery.map(data => {
                return (
                  <Cell key={data.public_id}>
                    <LightgalleryItem group='group1' src={`https://res.cloudinary.com/mansbooks/image/upload/${data.public_id}.jpg`}>
                      <Image publicId={data.public_id} onClick={() => this.setState({ isOpen: true })}>
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
                      <div data-sub-html='public_id' />
                    </LightgalleryItem>
                  </Cell>
                  )
                })
              }
            </LightgalleryProvider>
          </Grid>
        </CloudinaryContext>
      </>
    )
  }
}

export default Gallery
