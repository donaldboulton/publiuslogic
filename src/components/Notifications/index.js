import React from 'react'
import Notification from './Notification'

if (typeof window !== `undefined`) {
  const Notification = require('react-web-notification')
}

class Notify extends React.Component {
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
    console.log(e, 'Notification closed tag:' + tag)
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

    const title = 'Site Notifications' + now
    const body = 'Hello' + new Date()
    const tag = now
    const icon = '../../img/bell.svg'
    const options = {
      tag: tag,
      body: 'Gatsby Stack!',
      image: '../../gatsby.svg',
      icon: icon,
      lang: 'en',
      dir: 'ltr',
      sound: '../../audio/sound.mp3',
    }
    this.setState({
      title: title,
      options: options,
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='column is-vcentered'>
          <button className='btn is-primary' onClick={this.handleButtonClick.bind(this)}>Notif!</button>
          <Notification
            ignore={this.state.ignore && this.state.title !== ''}
            notSupported={this.handleNotSupported.bind (this)}
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
            <source src='../../audio/sound.mp3' type='audio/mpeg' />
            <source src='../../audio/sound.ogg' type='audio/ogg' />
            <embed hidden='true' autostart='false' loop='false' src='../../sound.mp3' />
          </audio>
        </div>
      </div>
    )
  }
}

export default Notify

