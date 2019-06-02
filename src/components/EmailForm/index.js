import React, { Component } from 'react'
import { navigate } from 'gatsby-link'
import PropTypes from 'prop-types'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
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
                <input className='input' type='text' placeholder='Full Name' name='name' id='name' onChange={this.handleChange} />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input className='input' type='email' placeholder='Email' name='email' id='email' onChange={this.handleChange} />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Message</label>
              <div className='control'>
                <textarea className='textarea' type='text' name='message' rows='5' id='message' onChange={this.handleChange} />
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <button className='button is-primary' type='submit' disabled={(!this.state.name) || (!this.state.email)}>Submit</button>
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
