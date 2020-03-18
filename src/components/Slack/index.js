import React from 'react'
import SlackIcon from '../../../static/img/slack_200X200.png'

const Slack = () => {
  return (
    <>
      <div className='card card1'>
        <div className='message-body'>
          <div>
            <a title='Slack' href='https://mansbooks.slack.com/messages/DDMGYN0QY/' target='_blank' rel='noopener noreferrer'>
              <img
                src={SlackIcon}
                alt='Slack'
              />
            </a>
          </div>
          <div>
            <a
              href='https://mansbooks.slack.com/messages/DDMGYN0QY/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Slack Message'
              className='a'
            >
              <strong>Add to Slack</strong>
            </a>
          </div>
          <p><h3 className='a'>Bring your team together with Slack, Work collaboration hub.</h3></p>
        </div>
      </div>
    </>
  )
}

export default Slack

