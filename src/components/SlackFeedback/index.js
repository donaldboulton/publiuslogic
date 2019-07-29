import React from 'react'
import SlackFeedback, { SlackIcon, themes, defaultTranslations } from 'react-slack-feedback'
const fetch = require('node-fetch')

export { default as dark } from './dark'

const Feedback = () => {
  return (
    <SlackFeedback
      open
      channel='#feedback'
      disabled={false}
      errorTimeout={8 * 1000}
      icon={() => <SlackIcon />}
      onClose={() => {}}
      onOpen={() => {}}
      sentTimeout={5 * 1000}
      showChannel
      showIcon
      theme={themes.dark}
      translations={defaultTranslations}
      user='Anonymous'
      onImageUpload={(image, success, error) =>
        uploadImage(image)
          .then(({ url }) => success(url))
          .catch(error)
      }
      onSubmit={(payload, success, error) =>
        sendToServer(payload)
          .then(success)
          .catch(error)
      }
    />
  )
}

function sendToServer (payload, success, error) {
  return fetch('https://gatsbytestgraphql.herokuapp.com', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
    .then(success)
    .catch(error)
}

function uploadImage (image, success, error) {
  var form = new FormData()
  form.append('image', image)

  return fetch('https://gatsbytestgraphql.herokuapp.com', { method: 'POST', data: form })
    .then(({ url }) => success(url))
    .catch(err => error(err))
}

export default Feedback

