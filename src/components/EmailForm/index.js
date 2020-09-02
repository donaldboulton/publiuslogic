import React from 'react'
import PropTypes from 'prop-types'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class EmailForm extends React.Component {
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
      });
    })
  }

  render () {
    const { title } = this.props
    return (
      <div className='column'>
        <div>
          <h2>
            {title}
          </h2>
        </div>
        <div>
          <form
            name='contact'
            method='post'
            action='/.netlify/functions/ContactForm/'
            onSubmit={this.handleSubmit}
          >
            <label htmlFor='name' className='hidden'>Name</label>
            <div className='field'>
              <div className='control'>
                <input
                  className='input input-control'
                  type='text'
                  placeholder='Your Name'
                  aria-label='Your Name'
                  aria-required='true'
                  name='name'
                  id='name'
                  onChange={this.handleChange} />
              </div>
            </div>
            <label htmlFor='email' className='hidden'>Email</label>
            <div className='field'>
              <div className='control'>
                <input
                  className='input input-control'
                  type='email'
                  aria-label='Email'
                  aria-required='true'
                  placeholder='Email'
                  name='email'
                  id='email'
                  onChange={this.handleChange} />
              </div>
            </div>
            <label htmlFor='message' className='hidden'>Message</label>
            <div className='field'>
              <div className='control'>
                <textarea
                  className='textarea input-control'
                  type='textarea'
                  name='message'
                  aria-label='Message'
                  aria-required='true'
                  rows='5'
                  id='message'
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <button aria-label='Submit Message' className='button' type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

EmailForm.propTypes = {
  title: PropTypes.string,
}

export default EmailForm
