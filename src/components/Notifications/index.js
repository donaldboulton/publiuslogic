import React, { Component } from 'react'
import bell from '../../img/bell.svg'

class Notify extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ignore: true,
      title: '',
    }
  }

  handlePermissionGranted () {
    console.log('Permission Granted')
    this.setState({
      ignore: false,
    })
  }
  handlePermissionDenied () {
    console.log('Permission Denied')
    this.setState({
      ignore: true,
    })
  }
  handleNotSupported () {
    console.log('Web Notification not Supported')
    this.setState({
      ignore: true,
    })
  }

  handleNotificationOnClick (e, tag) {
    console.log(e, 'Notification clicked tag:' + tag)
  }

  handleNotificationOnError (e, tag) {
    console.log(e, 'Notification error tag:' + tag)
  }

  handleNotificationOnClose (e, tag) {
  }

  handleNotificationOnShow (e, tag) {
    this.playSound()
    console.log(e, 'Notification shown tag:' + tag)
  }

  playSound (filename) {
    document.getElementById('sound').play()
  }

  handleButtonClick () {
    if (this.state.ignore) {
      return
    }

    const now = Date.now()

    const title = 'Don Boulton Notifications' + now
    const body = 'Hello' + new Date()
    const tag = now
    const icon = '../..img/Notifications_button_24.png'
    const options = {
      tag: tag,
      body: 'Jekyll React Webpack and My Stack!',
      image: '../..img/notify-stack-250.png',
      icon: icon,
      lang: 'en',
      dir: 'ltr',
      sound: 'https://publiuslogic.com/audio/sound.mp3'
    }
    this.setState({
      title: title,
      options: options,
    })
  }

  render () {
    return (
      <div className='AppCenter'>
        <div className='notifyCenter'>
          <button className='btn btn-primary' onClick={this.handleButtonClick.bind(this)}>
            <img
              src={bell}
              alt='Notify'
              style={{ width: '32px', height: '32px' }}
            />
          </button>
          <Notification
            ignore={this.state.ignore && this.state.title !== ''}
            notSupported={this.handleNotSupported.bind(this)}
            onPermissionGranted={this.handlePermissionGranted.bind(this)}
            onPermissionDenied={this.handlePermissionDenied.bind(this)}
            onShow={this.handleNotificationOnShow.bind(this)}
            onClick={this.handleNotificationOnClick.bind(this)}
            onClose={this.handleNotificationOnClose.bind(this)}
            onError={this.handleNotificationOnError.bind(this)}
            timeout={5000}
            title={this.state.title}
            options={this.state.options}
          />
          <audio id='sound' preload='auto'>
            <source src='https://publiuslogic.com/audio/sound.mp3' type='audio/mpeg' />
            <source src='https://publiuslogic.com/audio/sound.ogg' type='audio/ogg' />
            <embed hidden='true' autostart='false' loop='false' src='https://publiuslogic.com/audio/sound.mp3' />
          </audio>
        </div>
      </div>
    )
  }
}

export default Notify
