/* eslint-disable indent */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import request from 'superagent'
import { deleteUploadedPhoto } from '../../actions'

class UploadedPhotoStatus extends Component {
  render () {
    const uploadedPhoto = this.props.uploadedPhoto
    const response = uploadedPhoto.response
    const data = response && response.body
    const percent = Math.floor(uploadedPhoto.progress.percent)
    return (
      <div>
        <h3>{uploadedPhoto.fileName}</h3>
        {data &&
                    data.delete_token && (
                    <button
                      className='delete-image'
                      onClick={this.deletePhoto.bind(this)}
          >
                            Delete image
                    </button>
        )}
        <div className='status'>
          {!response && <div>Uploading... {percent}%</div>}
          {!response && <div>In progress</div>}
          {response && (
          <div className='status-code'>
                            Upload completed with status code {response.status}
          </div>
          )}
        </div>
        <div className='progress-bar'>
          <div
            className='progress'
            role='progressbar'
            style={{ width: percent + '%' }}
          />
        </div>
        {data && (
          <div className='info'>
            <table>
              {Object.keys(data).map(key => {
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{JSON.stringify(data[key])}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        )}
      </div>
    )
  }

  deletePhoto () {
    request
      .post(
        `https://api.cloudinary.com/v1_1/${
          this.context.cloudName
        }/delete_by_token`
      )
      .set('Content-Type', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest')
      .send({
        token: this.props.uploadedPhoto.response.body.delete_token,
      })
      .then(this.onDeletePhoto.bind(this))
  }

  onDeletePhoto () {
    this.props.onDeleteUploadedPhoto(
      this.props.uploadedPhoto.response.body.public_id
    )
  }
}

UploadedPhotoStatus.propTypes = {
  uploadedPhoto: PropTypes.object,
  onDeleteUploadedPhoto: PropTypes.func,
}

UploadedPhotoStatus.contextTypes = {
  cloudName: PropTypes.string,
  uploadPreset: PropTypes.string,
}

const UploadedPhotoStatusContainer = connect(
  state => state,
  {
    onDeleteUploadedPhoto: deleteUploadedPhoto,
  }
)(UploadedPhotoStatus)

Object.assign(
  UploadedPhotoStatusContainer.contextTypes,
  UploadedPhotoStatus.contextTypes
)

export default UploadedPhotoStatusContainer
