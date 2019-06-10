import { ExternalLink, Like } from 'styled-icons/evil'

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
            image: '/img/notifiction-image.png',
            sound: 'https://publiuslogic.com/audio/sound.mp3',
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: 'request',
            actions: [
              {
                action: Like,
                title: '👍Like',
              },
              {
                action: ExternalLink,
                title: '⤻ Post',
              },
            ],
          })
        })
      }
    })
  }

  showNotification()

  const ExternalLinkModali = 'https://publiuslogic.com/blog/modali-hooks-modal/'

  function openWindow (event) {
    /** ** START notificationOpenWindow ****/
    const ExternalLinkModali = 'https://publiuslogic.com/blog/modali-hooks-modal/'
    const promiseChain = clients.openWindow(ExternalLinkModali)
    event.waitUntil(promiseChain)
    /** ** END notificationOpenWindow ****/
  }

  function focusWindow (event) {
    /** ** START notificationFocusWindow ****/
    /** ** START urlToOpen ****/
    const urlToOpen = new URL(ExternalLinkModali, self.location.origin).href
    /** ** END urlToOpen ****/

    /** ** START clientsMatchAll ****/
    const promiseChain = clients.matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    /** ** END clientsMatchAll ****/
    /** ** START searchClients ****/
      .then((windowClients) => {
        let matchingClient = null

        for (let i = 0; i < windowClients.length; i++) {
          const windowClient = windowClients[i]
          if (windowClient.url === urlToOpen) {
            matchingClient = windowClient
            break
          }
        }

        if (matchingClient) {
          return matchingClient.focus()
        } else {
          return clients.openWindow(urlToOpen)
        }
      })
    /** ** END searchClients ****/

    event.waitUntil(promiseChain)
    /** ** END notificationFocusWindow ****/
  }
}
