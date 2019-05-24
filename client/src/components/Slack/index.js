import React from 'react'
import SlackIcon from '../../img/1547804322-slack_icon_80x80_transparent.png'
import lambda from '../../img/lambda.png'

require('node-fetch')

const Slack = () => {
  return (
    <section className='section'>
      <div className='message column is-10 is-offset-1'>
        <div className='message-body'>
          <div className='columns is-desktop'>
            <div className='media column is-1'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <img
                    src={SlackIcon}
                    alt='Slack'
                    style={{ width: '64px', height: '64px' }}
                  />
                </p>
              </figure>
            </div>
            <div className='column is-8'>
              <span><span><strong>Slack</strong></span>
                <span>
                  <a
                    href='https://mansbooks.slack.com/messages/DDMGYN0QY/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <small>&nbsp;@donboulton</small></a></span></span>
              <br />
                  Bring your team together with Slack, Work collaboration hub.
            </div>
            <div className='column'>
              <a className='button is-primary is-medium' href='https://slack.com/oauth/authorize?client_id=295732203780.571249891331&scope=incoming-webhook,admin'>
                <span className='icon'>
                  <img
                    src={SlackIcon}
                    alt='Slack'
                    style={{ width: '28px', height: '28px' }}
                  />
                </span>
                <span>Add to Slack</span>
              </a>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-4 is-offset-1'>
              <p className='subtitle is-5'>
                <span className='icon is-medium has-text-light'>
                  <img
                    src={lambda}
                    alt='Netlify Functions'
                  />
                </span>
                <strong>&nbsp;&nbsp;Message Me! Realtime</strong>
              </p>
            </div>
            <div className='column'>
              <div className='field has-addons'>
                <div className='control'>
                  <form
                    id='newsletters'
                    method='post'
                    action='/.netlify/functions/SlackMessages/'
                    noValidate
                  >
                    <div className='field has-addons'>
                      <div className='control'>
                        <input
                          className='input input-control'
                          type={'email'}
                          placeholder='your@email.com *'
                          required
                        />
                      </div>
                      <div className='control'>
                        <button
                          className='button is-primary'
                          type='submit'
                          onClick='submit'
                        >Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slack
