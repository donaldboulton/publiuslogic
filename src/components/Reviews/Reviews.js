import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BasicContent from 'components/Layout/Content'
import ReactStars from 'react-stars'

const ReviewContent = styled(BasicContent)`
  @media (max-width: 900px) {
    font-size: 1.5rem;
    color: hsla(0, 0%, 0%, 0.9);
  }
`

const submitRating = (rating, slug) => {
  const data = {
    'fields[rating]': rating,
    'fields[postPath]': slug,
    'options[reCaptcha][siteKey]': '6LeCvWMUAAAAAAYxtvLnM1HMzHIdoofRlV_4wPy4',
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
    alert('Thanks for rating us! Your rating will appear soon. Stay tuned..')
  })

  // Define what happens in case of error
  XHR.addEventListener('error', function (event) {
    alert('Sorry, something went wrong. Please file an issue in github!')
  })

  // Set up our request
  XHR.open(
    'POST',
    'https://api.staticman.net/v2/entry/donaldboulton/publiuslogic/master/ratings'
  )

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  // Finally, send our data.
  XHR.send(urlEncodedData)
}

export default function Template (props) {
  const {
    markdownRemark,
    allRatingsJson: slug = [],
  } = props.data
  const { frontmatter } = markdownRemark

  return (
    <ReviewContent>
        Is this post useful to you? Please give us a rating!
      <ReactStars
        onChange={rating => {
          submitRating(rating, frontmatter.slug)
        }}
        half={false}
        size={36}
      />
    </ReviewContent>
  )
}

submitRating.propTypes = {
  slug: PropTypes.string,
}
  
