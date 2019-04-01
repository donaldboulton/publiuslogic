import React from 'react'
import fetch from 'node-fetch'
import Recaptcha from 'react-google-recaptcha'
import logo from '../../img/logo.png'

class CommentForm extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      comment: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRecaptcha = value => {
      this.setState({ 'g-recaptcha-response': value })
    }
  }

  async handleSubmit (e) {
    e.preventDefault()
    const body = JSON.stringify({ ...this.state })
    const response = await fetch('https://publiuslogic.com/comment', {
      method: 'post',
      body,
      headers: {
        'content-type': 'application/json',
      },
    })
    const data = await response.json()
    this.setState({ comment: '', email: '', name: '' })
  }

  handleChange ({ target }) {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  render () {
    const { name, email, comment } = this.state
    return (
      <div>
        <section className='header'>
          <h2>Comment Form</h2>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-half'>
                <form onSubmit={this.handleSubmit} className='comment-form'>
                  <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                      <input
                        className='input is-large'
                        placeholder='Your Name'
                        value={name}
                        name='name'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control'>
                      <input
                        className='input is-large'
                        placeholder='youremail@you.com'
                        value={email}
                        name='email'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Message</label>
                    <div className='control'>
                      <textarea
                        className='textarea is-large'
                        placeholder='Enter your comment'
                        rows='6'
                        name='comment'
                        value={comment}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <Recaptcha
                      ref='recaptcha'
                      sitekey='6Le3cZMUAAAAAEAXmN6cDoJGVUVZ0RzuJlLAj6a-'
                      theme='dark'
                      render='explicit'
                      onloadCallback='Done'
                      onChange={this.handleRecaptcha}
                    />
                  </div>
                  <div className='field is-grouped is-pulled-right'>
                    <div className='control'>
                      <button className='button is-text is-large' type='reset'>Cancel</button>
                    </div>
                    <div className='control'>
                      <button className='button is-primary is-large' type='submit'>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='column'>
                <h4>Adding a Realtime Comment</h4>
                <div>
                  <a href='https://publiuslogic.com/privacy'>
                    <img
                      src={logo}
                      alt='PubliusLogic'
                      style={{ width: '330px', height: '330px' }}
                    />
                  </a>
                  <div>
                    <div>All Comments are governed by our!</div>
                    <div className='is-centered'><a href='/privacy#Comment Policy/'>Comment Policy</a></div>
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

export default CommentForm

