import React from 'react'
import config from '../../../_data/config'
import ReactStars from 'react-stars'
import Content from './Content'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
  Included in a XDR Post to StaticmanApp that you can set up at https://github.com/apps/staticman-net,
  which will send a json response object to your /_data/reviews folder triggering a new Netlify build
  To Include Recaptcha V3
  https://github.com/netlify/code-examples/blob/master/forms/html-invisible-recaptcha.html
*/

const submitRating = ({ post, rating, message }) => {
  const path = post.fields.slug
  const data = {
    'fields[rating]': rating,
    'fields[path]': path,
    'fields[message]': message,
  }

  const XHR = new XMLHttpRequest()
  const urlEncodedData = ''
  const urlEncodedDataPairs = []
  let name

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + '=' + encodeURIComponent(data[name]),
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
    'https://api.staticman.net/v3/entry/github/donaldboulton/publiuslogic/master/ratings',
  )

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  // Finally, send our data.
  XHR.send(urlEncodedData)
}

const RatingForm = ({ path }) => {
  const title = config.siteTitle

  return (
    <>
      <Content>
        <form name='ratings'>
          <input type='hidden' name='form-name' value='ratings' />
          <input name='fields[path]' type='hidden' value={path} />
          <input name='title' type='hidden' value={title} />
          <strong>Is this a useful post? Please give us a rating!</strong>
          <div>
            <ReactStars
              onChange={rating => {
                submitRating(rating, path)
              }}
              half={false}
              size={24}
              color2='#ffe600'
            />
          </div>
          <label htmlFor='message'>Review</label>
          <div className='field has-addons'>
            <div
              className='control'
              style={{
                padding: 0,
              }}
            >
              <input
                className='input'
                type='text'
                aria-label='Message'
                aria-required='false'
                placeholder='Leave a Review'
                name='message'
                id='message'
              />
            </div>
            <div className='control'><button className='button' type='submit' aria-label='Submit Review'>Submit</button></div>
          </div>
        </form>
      </Content>
    </>
  )
}

export default RatingForm
