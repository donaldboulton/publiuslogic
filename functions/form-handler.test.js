import { parse } from 'querystring'
import fetch from 'node-fetch'

exports.handler = (event, context, callback) => {
  let body = {}
  console.log(event)
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    body = parse(event.body)
  }

  if (!body.email) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: 'missing email',
      }),
    })
  }

  if (event.headers['content-type'] === 'application/x-www-form-urlencoded') {

    return callback(null, {
      statusCode: 302,
      headers: {
        Location: '/contact/success',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({}),
    })
  }
  fetch('/?no-cache=1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...this.state,
    }),
  })
    .then(() => navigate(form.getAttribute('action')))
    // eslint-disable-next-line
    .catch(error => alert(error))
  }
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      emailAdded: true,
    })
  })
}
