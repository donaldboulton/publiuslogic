import React, { Fragment } from 'react'
import config from '../../../data/config'
import { ThemeProvider } from 'styled-components'
import { Twitter } from 'styled-icons/fa-brands'
import theme from './buttons.css'

const WebIntents = ({ slug, tweet_id }) => {
  let title = config.userTwitter
  let url = config.siteUrl + slug

  return (
    <ThemeProvider theme={theme}>
      <>
        <Fragment>
          <div className='column'>
            <div className='field is-grouped has-addons'>
              <p className='control'>
                <a itemProp='url' rel='me' title={title} key={tweet_id} data-screen-name='donboulton' className='twitter-button button is-small twitter-btn' href='https://twitter.com/intent/tweet?via=donboulton?ref_src=twsrc%5Etfw'>
                  <span>
                    <Twitter size='14' />
                  </span>
                  <span>&nbsp;Tweet</span>
                </a>
              </p>
              <p className='control'>
                <a
                  itemProp='url'
                  rel='no-follow'
                  target='_blank'
                  data-screen-name='donboulton'
                  data-screen-data-show-count='true'
                  data-show-count='true'
                  title={title}
                  key={url}
                  className='twitter-follow-button button is-small twitter-btn'
                  data-related='donboulton'
                  data-show-screen-name='false'
                  href='https://twitter.com/donboulton?ref_src=twsrc%5Etfw'
                >
                  <span>
                    <Twitter size='14' />
                  </span>
                  <span>&nbsp;Follow</span>
                </a>
              </p>
              <p className='control'>
                <a
                  itemProp='url'
                  rel='no-follow'
                  aria-label='like'
                  title={title}
                  href='https://twitter.com/messages/compose?recipient_id=&ref_src=twsrc%5Etfw'
                  className='twitter-dm-button button is-small twitter-btn'
                  data-screen-name='donboulton'
                  data-show-count='false'
                  target='_blank'
                >
                  <span>
                    <Twitter size='14' />
                  </span>
                  <span>Message</span>
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
