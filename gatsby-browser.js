import { ExternalLink } from 'styled-icons/evil'

export const onServiceWorkerUpdateFound = () => {
  const showNotification = () => {
    // eslint-disable-next-line no-undef
    Notification.requestPermission(result => {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification('Update', {
            body: 'New content is available!',
            icon: 'https://publiuslogic.com/img/Notifications_button_24_white.png',
            badge: '/img/apple-touch-icon-32x32.png',
            image: 'https://publiuslogic.com/img/notifiction-image.png',
            sound: 'https://publiuslogic.com/audio/sound.mp3',
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: 'request',
            actions: [
              {
                action: ExternalLink,
                title: '⤻ Close',
              },
            ],
          })
        })
      }
    })
  }

  showNotification()

  const url = 'https://publiuslogic.com/blog/modali-hooks-modal/'
  const promiseChain = clients.openWindow(url)
  event.waitUntil(promiseChain)

  self.addEventListener('notificationclick', function (event) {
    let url = 'https://publiuslogic.com/blog/modali-hooks-modal/'
    event.notification.close() // Android needs explicit close.
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i]
          // If so, just focus it.
          if (client.url === url && 'focus' in client) {
            return client.focus()
          }
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
          return clients.openWindow(url)
        }
      })
    )
  })
}
