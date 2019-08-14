import React, { Fragment } from 'react'
import config from '../../../_data/config'
import { ThemeProvider } from 'styled-components'
import ReactStars from 'react-stars'
import theme from './buttons.css'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
  Included in a XDR Post to StaticmanApp that you can set up at https://github.com/apps/staticman-net,
  which will send a json response object to your /_data/reviews folder triggering a new Netlify build
  To Include Recaptcha V3
  https://github.com/netlify/code-examples/blob/master/forms/html-invisible-recaptcha.html
*/

const submitRating = (rating, message, slug) => {
  let url = slug

  const data = {
    'fields[rating]': rating,
    'fields[postPath]': url,
    'fields[message]': message,
  }

  const XHR = new XMLHttpRequest()
  let urlEncodedData = ''
  let urlEncodedDataPairs = []
  let name

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + '=' + encodeURIComponent(data[name])
    )
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+')

  // Define what happens on successful data submission
  XHR.addEventListener('load', function (event) {
    alert('Thanks for rating us! Your Review is to appear soon. Stay tuned..')
  })

  // Define what happens in case of error
  XHR.addEventListener('error', function (event) {
    alert('Sorry, something went wrong. Please file an issue in github!')
  })

  // Set up our request
  XHR.open(
    'POST',
    'https://api.staticman.net/v3/entry/github/donaldboulton/publiuslogic/master/ratings'
  )

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  // Finally, send our data.
  XHR.send(urlEncodedData)
}

const ReviewForm = ({ slug, frontmatter }) => {
  let title = config.siteUrl
  let url = slug

  return (
    <ThemeProvider theme={theme}>
      <>
        <Fragment>
          <div className='column reviews'>
            <form
              name='ratings'
            >
              <input type='hidden' name='form-name' value='review' />
              <input name='fields[postPath]' type='hidden' value={url} />
              <input name='title' type='hidden' value={title} />
              Is this a useful post? Please give us a rating!
              <div>
                <ReactStars
                  onChange={rating => {
                    submitRating(rating, url)
                  }}
                  half={false}
                  size={24}
                  color2={'#d64000'}
                />
              </div>
              <label>Add a Review</label>
              <textarea name='fields[message]' className='textarea' placeholder='Review is Optional' required />
            </form>
          </div>
        </Fragment>
      </>
    </ThemeProvider>
  )
}

export default ReviewForm
