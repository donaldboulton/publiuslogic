/* eslint-disable indent */
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import UploadWidget from './UploadWidget'

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gallery: [],
    }
  }
  componentDidMount () {
    // Request for images tagged cats
    axios.get('https://res.cloudinary.com/mansbooks/image/list/cats.json')
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
      <Fragment>
        <div className='main columns is-mobile'>
          <div className='gallery column is-four-fifths'>
            <CloudinaryContext cloudName='mansbooks'>
              {
              this.state.gallery.map(data => {
                return (
                  <div className='responsive' key={data.public_id}>
                    <div className='img'>
                      <a target='_blank' href={`https://res.cloudinary.com/mansbooks/image/upload/${data.public_id}.jpg`}>
                        <Image publicId={data.public_id}>
                          <Transformation
                            crop='scale'
                            width='300'
                            height='200'
                            dpr='auto'
                            responsive_placeholder='blank'
                          />
                        </Image>
                      </a>
                      <div className='desc'>Created at {data.created_at}</div>
                    </div>
                  </div>
                )
              })
            }
            </CloudinaryContext>
          </div>
          <UploadWidget />
        </div>
      </Fragment>
    )
  }
}

export default Gallery
