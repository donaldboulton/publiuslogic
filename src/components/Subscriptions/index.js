import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import mailchimp from '../../img/enewsletter_icon.png'

export default class Subscribe extends React.Component {
  constructor () {
    super()
    this.state = {
      email: ``,
    }
  }
    // Update state each time user edits their email address
    _handleEmailChange = e => {
      this.setState({ email: e.target.value })
    }
    // Post to MC server & handle its response
    _postEmailToMailchimp = (email, attributes) => {
      addToMailchimp(email, attributes)
        .then(result => {
          // Mailchimp always returns a 200 response
          // So we check the result for MC errors & failures
          if (result.result !== `success`) {
            this.setState({
              status: `error`,
              msg: result.msg,
            })
          } else {
            // Email address succesfully subcribed to Mailchimp
            this.setState({
              status: `success`,
              msg: result.msg,
            })
          }
        })
        .catch(err => {
          // Network failures, timeouts, etc
          this.setState({
            status: `error`,
            msg: err,
          })
        })
    }
    _handleFormSubmit = e => {
      e.preventDefault()
      e.stopPropagation()
      if (!this.state.email) {
        this.setState({
          status: `error`,
          msg: 'Please enter valid email!',
        })
      } else {
        this.setState(
          {
            status: `sending`,
            msg: null,
          }
        )
        // setState callback (subscribe email to MC)
        this._postEmailToMailchimp(this.state.email, {
          pathname: document.location.pathname,
        })
      }
    }

    render () {
      return (
        <section className='section'>
          <div className='message column is-10 is-offset-1'>
            <div className='message-body'>
              {this.state.status === `success` ? (
                <div>Thank you! Youʼll receive your first email shortly.</div>
              ) : (

                <div className='media'>
                  <figure className='media-left'>
                    <p className='image is-84x84'>
                      <img
                        src={mailchimp}
                        alt='MailChimp Newsletters'
                        style={{ width: '84px', height: '84px' }}
                      />
                    </p>
                  </figure>
                  <div className='media-content'>
                    <div className='content'>
                      Enjoyed this post? Want the next one in your inbox!
                      <br />
                      <p>
                        <form
                          id='email-capture'
                          method='post'
                          noValidate
                        >
                          <div className='field has-addons'>
                            <div className='control'>
                              <input
                                className='input input-control'
                                type={'text'}
                                placeholder='your@email.com *'
                                onChange={this._handleEmailChange}
                                required
                              />
                            </div>
                            <div className='control'>
                              <button
                                className='button is-primary'
                                type='submit'
                                onClick={this._handleFormSubmit}
                              >Sign Up
                              </button>
                            </div>
                            {this.state.status === `error` && (
                              <div
                                dangerouslySetInnerHTML={{ __html: this.state.msg }}
                              />
                            )}
                          </div>
                        </form>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )
    }
}
