import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import MailChimpIcon from '../../../static/img/mailchimp.webp'

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
          <div className='card card2'>
            <div className='message-body'>
              <div>
                <a title='MailChimp' href='https://mailchimp.com/why-mailchimp/' target='_blank' rel='noopener noreferrer'>
                  <img
                    src={MailChimpIcon}
                    alt='MailChimp Newsletters'
                  />
                </a>
              </div>
              <a title='MailChimp' href='https://mailchimp.com/why-mailchimp/' target='_blank' rel='noopener noreferrer'>
                <strong>MailChimp Newsletters</strong>
              </a>
              <div>
                {this.state.status === `success` ? (
                  <div>Thank you! Youʼll receive your first email shortly.</div>
                ) : (
                  <p>
                    <form
                      id='email-capture'
                      method='post'
                      noValidate
                    >
                      <div
                        className='field has-addons'
                        style={{
                          textAlign: `center`,
                        }}
                      >
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
                          >SignUp
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
                )}
              </div>
              <div className='a'>Enjoyed this post? Subscribe!</div>
            </div>
          </div>
        </>
      )
    }
}

