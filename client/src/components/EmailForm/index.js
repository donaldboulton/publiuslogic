import React, { Component } from 'react'
import { navigate } from 'gatsby-link'
import PropTypes from 'prop-types'
import Recaptcha from 'react-google-recaptcha'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = { isValidated: false }
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
  }

  componentDidMount () {
    if (this.captchaDemo) {
      console.log('started, just a second...')
      this.captchaDemo.reset()
    }
  }
  onLoadRecaptcha () {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  verifyCallback (recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, '<= your recaptcha token')
  }

  handleChange = e => {
    this.setState({ [e.target.email]: e.target.value })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleChange = e => {
    this.setState({ [e.target.message]: e.target.value })
  }
  handleChange = e => {
    this.setState({ [e.target.Recaptcha]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    // eslint-disable-next-line
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

  render () {
    const { title } = this.props
    return (
      <div className='column'>
        <div>
          <h2 className='subtitle'>
            {title}
          </h2>
        </div>
        <div>
          <form
            name='contact'
            method='post'
            action='/contact/success'
            encType='application/x-www-form-urlencoded'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            data-netlify-recaptcha='true'
            onSubmit={this.handleSubmit}
          >
            <input type='hidden' name='form-name' value='contact' />
            <div hidden>
              <label>
                  Don’t fill this out:{' '}
                <input name='bot-field' onChange={this.handleChange} />
              </label>
            </div>
            <div className='field'>
              <label className='label'>Full Name</label>
              <div className='control'>
                <input className='input input-control' type='text' placeholder='Full Name' name='name' id='name' onChange={this.handleChange} />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input className='input input-control' type='email' placeholder='Email' name='email' id='email' onChange={this.handleChange} />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Message</label>
              <div className='control'>
                <textarea className='textarea input-control' type='text' name='message' rows='3' id='message' onChange={this.handleChange} />
              </div>
            </div>
            <div className='field'>
              <Recaptcha
                ref={(el) => { this.captchaDemo = el }}
                sitekey='6Le3cZMUAAAAAEAXmN6cDoJGVUVZ0RzuJlLAj6a-'
                theme='dark'
                render='explicit'
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}
                onChange={this.handleChange}
              />
            </div>
            <div className='field'>
              <div className='control'>
                <button className='button is-primary' type='submit' disabled={(!this.state.name) || (!this.state.email) || (!this.state.message)}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

ContactForm.propTypes = {
  title: PropTypes.string,
}

export default ContactForm
