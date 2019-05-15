import React, { Component } from 'react'
import Helmet from 'react-helmet'

class UploadWidget extends Component {
  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'mansbooks', upload_preset: 'photos-preset', tags: ['cats'], sources: ['local', 'url', 'dropbox'], dropboxAppKey: 'fk4ayp4zwevjgl7' },
      function (error, result) {
        console.log(result)
      })
  }
  render () {
    return (
      <div className='main'>
        <Helmet>
          <script src='https://widget.cloudinary.com/v2.0/global/all.js' type='text/javascript' />
        </Helmet>
        <h1>Upload</h1>
        <div className='upload'>
          <button onClick={this.uploadWidget.bind(this)} className='upload-button button is-primary'>
                        Add Image
          </button>
        </div>
      </div>

    )
  }
}

export default UploadWidget
