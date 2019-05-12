import React, { Fragment } from 'react'
import config from '../../../data/config'
import { id, title, tweet_id } from './hooks'
import { ThemeProvider } from 'styled-components'
import { Twitter } from 'styled-icons/fa-brands'
import theme from './buttons.css'

const WebIntents = ({ slug }) => {
  let name = config.userTwitter
  let url = config.siteUrl + slug

  return (
    <ThemeProvider theme={theme}>
      <>
        <Fragment>
          <div className='column'>
            <div className='field is-grouped has-addons'>
              <p className='control'>
                <a itemProp='url' rel='me' name={name} key={tweet_id} data-screen-name='donboulton' className='twitter-button button is-small twitter-btn' href='https://twitter.com/intent/tweet?via=donboulton?ref_src=twsrc%5Etfw'>
                  <span>
                    <Twitter size='14' />
                  </span>
                  <span>&nbsp;Tweet</span>
                </a>
              </p>
              <p className='control'>
                <a itemProp='url' rel='no-follow' target='_blank' data-screen-name='donboulton' data-screnedata-show-count='true' name={title} key={url} className='twitter-follow-button button is-small twitter-btn' data-related='donboulton' data-show-screen-name='false' href='https://twitter.com/follow/donboulton?ref_src=twsrc%5Etfw'>
                  <span>
                    <Twitter size='14' />
                  </span>
                  <span>&nbsp;Follow</span>
                </a>
              </p>
              <p className='control'>
                <a itemProp='url' rel='no-follow' aria-label='like' name={title} key={id} href='https://twitter.com/messages/compose?recipient_id=&ref_src=twsrc%5Etfw' className='twitter-dm-button button is-small twitter-btn' data-screen-name='donboulton' data-show-count='false' target='_blank'>
                  <span>
                    <Twitter size='14' />
                  </span>
                  <span>&nbsp;Message</span>
                </a>
              </p>
            </div>
          </div>
        </Fragment>
      </>
    </ThemeProvider>
  )
}

export default WebIntents
