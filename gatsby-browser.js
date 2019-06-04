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
            icon: 'https://publiuslogic.com/img/bell.svg',
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

