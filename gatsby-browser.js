import { Reply } from 'styled-icons/material'
import { Like } from 'styled-icons/evil'

export const onServiceWorkerUpdateFound = () => {
  const showNotification = () => {
    // eslint-disable-next-line no-undef
    Notification.requestPermission(result => {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification('Update', {
            body: 'New content is available!',
            icon: 'https://publiuslogic.com/img/Notifications_button_24_white.png',
            badge: 'https://publiuslogic.com/img/apple-touch-icon-32x32.png',
            image: 'https://publiuslogic.com/img/apple-touch-icon-180x180.png',
            sound: 'https://publiuslogic.com/audio/sound.mp3',
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: 'request',
            actions: [
              {
                action: Like,
                title: '👍Like',
              },
              {
                action: Reply,
                title: '⤻ Reply',
              },
            ],
          })
        })
      }
    })
  }

  showNotification()
}

