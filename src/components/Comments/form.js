import React from 'react'
import { navigate } from 'gatsby-link'
import fetch from 'node-fetch'
import Recaptcha from 'react-google-recaptcha'
import logo from '../../img/logo.png'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class CommentForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isValidated: false }
  }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleRecaptcha = value => {
      this.setState({ 'g-recaptcha-response': value })
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
      const { author, email, comment } = this.state
      return (
        <div>
          <section className='header'>
            <h2>Comment Form</h2>
          </section>
          <section className='section'>
            <div className='container'>
              <div className='columns is-10 is-offset-1'>
                <div className='column is-half'>
                  <form
                    name='comments'
                    method='POST'
                    action='https://api.staticman.net/v3/entry/donaldboulton/publiuslogic/master/comments'
                    encType='application/x-www-form-urlencoded'
                    data-netlify='true'
                    data-netlify-honeypot='bot-field'
                    data-netlify-recaptcha='true'
                    onSubmit={this.handleSubmit}
                  >
                    <input name='options[redirect]' type='hidden' value='https://publiuslogic.com/contact/success/' />
                    <div hidden>
                      <label>
                          Don’t fill this out:{' '}
                        <input name='fields[bot-field]' onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className='field'>
                      <label className='label'>Name</label>
                      <div className='control'>
                        <input
                          className='input is-large'
                          placeholder='Your Name *'
                          value={author}
                          name='fields[name]'
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Email</label>
                      <div className='control'>
                        <input
                          className='input is-large'
                          placeholder='youemail@you.com *'
                          value={email}
                          type='email'
                          name='fields[email]'
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Message</label>
                      <div className='control'>
                        <textarea
                          className='textarea is-large'
                          rows='5'
                          placeholder='Enter your comment *'
                          ame='fields[comment]'
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
                  <h4>Realtime Comment</h4>
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

