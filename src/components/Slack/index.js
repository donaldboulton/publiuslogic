import React from 'react'
import SlackIcon from '../../img/1547804322-slack_icon_80x80_transparent.png'
import Slack2x from '../../img/add_to_slack@2x.png'
import lambda from '../../img/lambda.png'

require('node-fetch')

const Slack = () => {
  return (
    <section className='section'>
      <div className='message column is-10 is-offset-1'>
        <div className='message-body'>
          <div className='media'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                <img
                  src={SlackIcon}
                  alt='Slack'
                  style={{ width: '64px', height: '64px' }}
                />
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <span><span><strong>Slack</strong></span>
                    <span>
                      <a
                        href='https://mansbooks.slack.com/messages/DDMGYN0QY/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <small>&nbsp;@donboulton</small></a></span></span>
                  <br />
                  Bring your team together with Slack, the collaboration hub for work.
                </p>
              </div>
              <nav className='level'>
                <div className='level-left'>
                  <div className='level-item'>
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
                  <div className='level-item'>
                    <div className='field has-addons'>
                      <p className='control'>
                        <form
                          id='newsletters'
                          method='post'
                          action='/.netlify/functions/SlackMessages/'
                          noValidate
                        >
                          <div className='field has-addons'>
                            <div className='control'>
                              <input
                                className='input'
                                type={'text'}
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
                      </p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className='media-right'>
              <a href='https://slack.com/oauth/authorize?client_id=295732203780.571249891331&scope=incoming-webhook,admin'>
                <img
                  src={Slack2x}
                  alt='Slack'
                  style={{ width: '139px', height: '40px' }}
                />              
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slack
