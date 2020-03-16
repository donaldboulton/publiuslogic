import React from 'react'
import Icon from '../../../static/img/1547804322-slack_icon_80x80_transparent.png'
import lambda from '../../../static/img/lambda.png'
import { SlackDiv, SlackTitle, SlackIcon } from './styles'

const Slack = () => {
  return (
    <SlackDiv className='footer'>
      <SlackTitle>
        <SlackIcon />
        Slack
      </SlackTitle>
      <div>
        <span>
          <img
            src={lambda}
            alt='Netlify Functions'
          />
          <span>
            <a
              href='https://mansbooks.slack.com/messages/DDMGYN0QY/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Slack Message'
              className='a'
            >
              <small>&nbsp;@donboulton</small>
            </a>
          </span>
        </span>
        <span className='icon'>
          <img
            src={Icon}
            alt='Slack'
            style={{ width: '28px', height: '28px' }}
          />
        </span>
        <span>Add to Slack</span>
        <div>Bring your team together with Slack, Work collaboration hub.</div>
      </div>
    </SlackDiv>
  )
}

export default Slack
