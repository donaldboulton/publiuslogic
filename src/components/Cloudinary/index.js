/* eslint-disable indent */
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import { Grid, Cell } from 'styled-css-grid'
import { media } from '../Hero/style'

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
    this.state = {
      gallery: [],
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

  uploadWidget () {
    let _this = this
    cloudinary.openUploadWidget({ cloud_name: 'mansbooks', upload_preset: 'photos-preset', tags: ['cats'], sources: ['local', 'url', 'dropbox'], dropboxAppKey: 'fk4ayp4zwevjgl7' },
      function (error, result) {
      // Update gallery state with newly uploaded image
          _this.setState({ gallery: _this.state.gallery.concat(result) })
      })
  }
  render () {
    return (
      <div>
        <Fragment>
          <SectionTitle>Gallery</SectionTitle>
          <div>
            <CloudinaryContext cloudName='mansbooks'>
              <Grid columns='repeat(auto-fit,minmax(260px,1fr))'>
                {
                this.state.gallery.map(data => {
                return (
                  <Cell key={data.public_id}>
                    <a href={`https://res.cloudinary.com/mansbooks/image/upload/${data.public_id}.jpg`}>
                      <Image publicId={data.public_id}>
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
                    </a>
                  </Cell>
                  )
                })
              }
              </Grid>
            </CloudinaryContext>
          </div>
        </Fragment>
      </div>
    )
  }
}

export default Gallery
