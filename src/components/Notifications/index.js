import React, { Component } from 'react'
import PubNubReact from 'pubnub-react'

class Notify extends Component {
  constructor (props) {
    super(props)
    this.pubnub = new PubNubReact({ 
      publishKey: 'pub-c-5f35a1a6-97ea-4257-b02b-707a15347a71',
      subscribeKey: 'sub-c-b2e5c252-480b-11e9-89f6-ee0a25adbb7f',
    })
    this.pubnub.init(this)
  }

  componentWillMount () {
    this.pubnub.subscribe({
      channels: ['PWA'],
    })
    this.pubnub.getMessage('PWA', (msg) => {
      this.notify(msg.message.text);
    })
  }
  notify (message) {
    if (!('Notification' in window)) {
      alert('This browser does not support system notifications')
    }
    else if (Notification.permission === 'granted') {
      if (typeof message === 'string' || message instanceof String) {
        var notification = new Notification (message)
      } else {
        var notification = new Notification('Hello World')
      }
    }

    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === 'granted') {
          var notification = new Notification('Hello World')
        }
      })
    }
  }

  render () {
    return (
      <div className='column is-vcentered'>
        <button onClick={this.notify}>Send Notification
        </button>
      </div>
    )
  }
}

export default Notify
