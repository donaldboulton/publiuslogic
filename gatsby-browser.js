import { ExternalLink, Like } from 'styled-icons/evil'

export const onServiceWorkerUpdateFound = () => {
  const showNotification = () => {
    // eslint-disable-next-line no-undef
    Notification.requestPermission(result => {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification('Updates Avaliable', {
            body: 'New content is published!',
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
    
    showNotification()

    const maxVisibleActions = Notification.maxActions
    if (maxVisibleActions < 4) {
      options.body = `This notification will only display ` +
    `${maxVisibleActions} actions.`
    } else {
      options.body = `This notification can display up to ` +
    `${maxVisibleActions} actions.`
    }  
    self.addEventListener('notificationclick', function(event) {
      const clickedNotification = event.notification;
      clickedNotification.close()
      const modali = 'https://publiuslogic.com/blog/modali-hooks-modal/'
      const promiseChain = clients.openWindow(modali)
      event.waitUntil(promiseChain)
    })
    registration.showNotification(title, options)
    self.addEventListener('notificationclick', function(event) {
      if (!event.action) {
        // Was a normal notification click
        console.log('Notification Click.')
        return;
      }
    
      switch (event.action) {
        case 'ExternalLink':
          console.log('User ⤻ ExternalLink.')
          break;
        case 'Like':
          console.log('User 👍Like.')
          break;
        default:
          console.log(`Unknown action clicked: '${event.action}'`)
          break;
      }
    })
  }
}

