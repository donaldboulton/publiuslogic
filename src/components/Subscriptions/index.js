import React from 'react'
import { Link } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import EmailIcon from '../../../static/img/enewsletter_icon.png'
import { Mailchimp } from '@styled-icons/fa-brands/'
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
          },
        )
        // setState callback (subscribe email to MC)
        this._postEmailToMailchimp(this.state.email, {
          pathname: document.location.pathname,
        })
      }
    }

    render () {
      return (
        <>
          <div>
            <section className='message'>
              <div className='message-body'>
                <div>
                  <span>
                    <span>
                      <figure>
                        <img
                          className='image'
                          src={EmailIcon}
                          alt='MailChimp Newsletters'
                          style={{ width: '84px', height: '84px', float: 'left', flex: 'left' }}
                        />
                      </figure>
                    </span><strong>Newsletters</strong>
                    <p><strong>Enjoyed this post? Want the next one in your inbox!</strong></p>
                  </span>

                  <span>
                    {this.state.status === `success` ? (
                      <div>Thank you! Youʼll receive your first email shortly.</div>
                    ) : (
                      <form
                        id='email-capture'
                        method='post'
                        noValidate
                      >
                        <div className='field has-addons'>
                          <Mailchimp size='1.8em' />&nbsp;
                          <div className='control'>
                            <input
                              className='input'
                              type='email'
                              id='email'
                              aria-label='Input Your Email'
                              aria-required='false'
                              placeholder='your@email.com *'
                              // eslint-disable-next-line react/jsx-handler-names
                              onChange={this._handleEmailChange}
                              required
                            />
                          </div>
                          <div className='control'>
                            <button
                              className='button'
                              type='submit'
                              aria-label='Submit Subscription'
                              // eslint-disable-next-line react/jsx-handler-names
                              onClick={this._handleFormSubmit}
                            >Sign Up
                            </button>
                          </div>
                          <Link aria-label='MailChimp Privacy' to='/privacy/#MailChimp' itemProp='url' rel='no-follow' className='a'>
                        &nbsp;&nbsp;MailChimp Privacy & Terms
                          </Link>
                          {this.state.status === `error` && (
                            <div
                              dangerouslySetInnerHTML={{ __html: this.state.msg }}
                            />
                          )}
                        </div>
                      </form>
                    )}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </>
      )
    }
}

