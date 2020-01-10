import React from 'react'
import { Link } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import EmailIcon from '../../../static/img/enewsletter_icon.png'
import { Mailchimp } from 'styled-icons/fa-brands/'
import Email from '../Email'

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
        <div className='column is-10 is-offset-1'>
          <article className='message newsletter'>
            <div className='message-body'>
              <div className='columns is-desktop'>
                <div className='media column is-1'>
                  <figure className='media-left'>
                    <p className='image is-64x64'>
                      <img
                        src={EmailIcon}
                        alt='MailChimp Newsletters'
                        style={{ width: '64px', height: '64px' }}
                      />
                    </p>
                  </figure>
                </div>
                <div className='column is-9'>
                  <strong>Newsletters</strong>
                  <p className='subtitle is-5'>
                    <div>Enjoyed this post? Want the next one in your inbox!</div>
                  </p>
                </div>
                <div className='column'>
                  <Email />
                </div>
              </div>
              <div className='columns'>
                <div className='column is-3 is-offset-1'>
                  <p className='subtitle is-5'>
                    <span className='icon is-large has-text-light'>
                      <Mailchimp size='3em' />
                    </span>
                    <strong>Secure Email</strong>
                  </p>
                </div>
                <div className='column'>
                  {this.state.status === `success` ? (
                    <div>Thank you! Youʼll receive your first email shortly.</div>
                  ) : (
                    <form
                      id='email-capture'
                      method='post'
                      noValidate
                    >
                      <div className='field has-addons'>
                        <div className='control'>
                          <input
                            className='input input-control'
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
                        {this.state.status === `error` && (
                          <div
                            dangerouslySetInnerHTML={{ __html: this.state.msg }}
                          />
                        )}
                      </div>
                    </form>
                  )}
                </div>
                <div className='column'>
                  <p className='subtitle is-5'>
                    <Link aria-label='MailChimp Privacy' to='/privacy/#MailChimp' itemProp='url' rel='no-follow' className='a is-small'>
                     MailChimp Privacy & Terms
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      )
    }
}

