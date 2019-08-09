/* eslint-disable react/jsx-indent */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactStars from 'react-stars'
import fetch from 'node-fetch'
import config from '../../../_data/config'
import logo from '../../img/logo.png'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
  Included in a XDR Post to StaticmanApp that you can set up at https://github.com/apps/staticman-net,
  which will send a json response object to your /_data/reviews folder triggering a new Netlify build
  To Include Recaptcha V3
  https://github.com/netlify/code-examples/blob/master/forms/html-invisible-recaptcha.html
*/

const Form = styled.form`

`
const Name = styled.input`
  padding:10px;
  color:#ccc;
  background: #1d1d1d;
  border: 1px solid #434040;
  margin:0 0 20px;
  border-radius: 6px;
  width:100%;
  box-sizing: border-box;
`

const Email = styled.input`
  padding:10px;
  color:#ccc;
  background: #1d1d1d;
  border: 1px solid #434040;
  margin:0 0 20px;
  border-radius: 6px;
  width:100%;
  box-sizing: border-box;
`

const Message = styled.textarea`
  padding:10px;
  color:#ccc;
  background: #1d1d1d;
  border: 1px solid #434040;
  margin:0 0 20px;
  border-radius: 6px;
  width:100%;
  height: 220px;
  box-sizing: border-box;
`

const Submit = styled.input`
  border:solid 1px #d64000;
  padding:15px 30px;
  margin:0 0 20px;
  text-transform:uppercase;
  font-weight:bold;
  cursor:pointer;
  border-radius: 6px;
  background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.2)));
  background: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2));
  background-color: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2));
  color: #fff;
`

const ModalButton = styled.button`
  border:solid 1px #ccc;
  padding:15px 30px;
  margin:0 0 20px;
  text-transform:uppercase;
  font-weight:bold;
  cursor:pointer;
  border-radius:4px;
  background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.2)));
  background: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2));
  background-color: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.2));
  color: #fff;
`

const Modal = styled.div`
  background: #1d1d1d;
  color: #ccc;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 2000;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const ModalOverlay = styled.div`
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0,0,0,0.3);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

const Review = styled.div`
  top: 10px;
  left: 40px;
  right: 0;
  bottom: 10px;
`

const submitRating = (rating, slug) => {
  const url = config.siteUrl + slug
  const data = {
    'fields[rating]': rating,
    'fields[postPath]': url,
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
    'https://api.staticman.net/v3/entry/github/entry/donaldboulton/publiuslogic/master/ratings'
  )

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  // Finally, send our data.
  XHR.send(urlEncodedData)
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ReviewForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rating: '',
      name: '',
      email: '',
      message: '',
      showModal: false,
      submitting: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    this.setState({
      submitting: true,
    })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      review: '',
      name: '',
      email: '',
      message: '',
      showModal: true,
      submitting: false,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render (slug) {
    let url = config.siteUrl + slug
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-8'>
                <h2>Submit Review</h2>
                <Form
                  name='review-form'
                  onSubmit={this.handleSubmit}
                  data-netlify='true'
                  data-netlify-honeypot='bot'
                  overlay={this.state.showModal}
                  onClick={this.closeModal}
                  netlify-recaptcha
                >
                  <input type='hidden' name='form-name' value='contact' />
                  <input name='fields[postPath]' type='hidden' value={url} />
                  <p hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name='bot' onChange={this.handleInputChange} />
                    </label>
                  </p>
                  <Review>
                    Is this post useful to you? Please give us a rating!
                    <ReactStars
                      onChange={rating => {
                        submitRating(rating, url)
                      }}
                      half={false}
                      size={36}
                    />
                  </Review>
                  <Name
                    name='name'
                    type='text'
                    title='Name'
                    placeholder='Full Name'
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                    disabled={this.state.submitting}
                  />
                  <Email
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                    disabled={this.state.submitting}
                  />
                  <Message
                    name='message'
                    title='Message'
                    type='text'
                    placeholder='Message'
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                    disabled={this.state.submitting}
                  />
                  <Submit
                    name='submit'
                    type='submit'
                    class='g-recaptcha button is-primary'
                    data-sitekey='6Lf0NasUAAAAAAY1WJlMelYekqb_cwziQ4LiNnuk'
                    data-callback='onSubmit'
                    value={this.state.submitting ? 'Sending...' : 'Send'}
                    disabled={this.state.submitting}
                  />
                  <ModalOverlay onClick={this.closeModal} visible={this.state.showModal} />
                  <Modal visible={this.state.showModal}>
                    <p>
                      Thank you for reaching out. I will get back to you as soon as possible.
                    </p>
                    <ModalButton onClick={this.closeModal}>Okay</ModalButton>
                  </Modal>
                </Form>
              </div>
              <div className='column'>
                <h4>Reviews</h4>
                <div>
                  <a href='https://publiuslogic.com/privacy'>
                    <img
                      src={logo}
                      alt='PubliusLogic'
                      style={{ width: '130px', height: '130px' }}
                    />
                  </a>
                  <div>
                    <div>Governed by our!</div>
                    <div className='is-centered'><a href='/privacy#Comment Policy/'>Submitting Policy</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

ReviewForm.propTypes = {
  data: PropTypes.object,
}

export default ReviewForm
