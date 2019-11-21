import React from 'react'
import { ExternalLink } from 'styled-icons/evil'
import 'typeface-kaushan-script'
import 'typeface-roboto'

import { ThemeProvider } from './src/Context/theme-context'
import GlobalStyle from './src/components/GlobalStyle'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)

export const onServiceWorkerUpdateFound = (self, event, clients, skipWaiting) => {
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

  self.addEventListener('install', (event) => {
    event.waitUntil(skipWaiting())
  }, false)

  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim())
  }, false)

  self.addEventListener('push', (event) => {
    if (!event.data) {
      return
    }

    const parsedData = event.data.json()
    const notification = parsedData.notification
    const title = notification.title
    const body = notification.body
    const icon = notification.icon
    const data = parsedData.data

    event.waitUntil(
      self.registration.showNotification(title, { body, icon, data })
    )
  }, false)

  self.addEventListener('notificationClick', (event) => {
    event.waitUntil(self.clients.openWindow(event.notification.data.url))
  }, false)
  const url = 'https://publiuslogic.com/blog/modali-hooks-modal/'
  const promiseChain = clients.openWindow(url)
  event.waitUntil(promiseChain)

  self.addEventListener('notificationClick', function (event) {
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
