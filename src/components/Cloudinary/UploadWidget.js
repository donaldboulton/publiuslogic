import React, { Component } from 'react'
import Helmet from 'react-helmet'

class UploadWidget extends Component {
  uploadWidget () {
    cloudinary.openUploadWidget({
      cloud_name: 'mansbooks',
      upload_preset: 'photos-preset',
      tags: ['cats'],
      sources: ['local', 'url', 'camera', 'image_search', 'facebook', 'dropbox', 'instagram'],
      dropboxAppKey: 'fk4ayp4zwevjgl7',
      googleApiKey: 'AIzaSyCEL0HqEXvP42ZYK-xd7CBqO50-ZzLKwFM',
      showAdvancedOptions: true,
      cropping: true,
      multiple: false,
      defaultSource: 'local',
      styles: {
        palette: {
          window: '#1D1D1D',
          sourceBg: '#000000',
          windowBorder: '#434040',
          tabIcon: '#FFFFFF',
          inactiveTabIcon: '#8E9FBF',
          menuIcons: '#D64000',
          link: '#D64000',
          action: '#9C3204',
          inProgress: '#D64000',
          complete: '#33ff00',
          error: '#EA2727',
          textDark: '#000000',
          textLight: '#FFFFFF',
        },
      },
    },
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
