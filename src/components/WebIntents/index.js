import React from 'react'

import tweet from '../../img/twitter.svg'
import reply from '../../img/reply-action_0.png'
import retweet from '../../img/retweet-action.png'
import like from '../../img/like-action.png'

const WebIntents = () => {
  return (
    <div className='container'>
      <div className='content'>
        <nav className='level is-mobile'>
          <div className='level-left'>
            <a
              href='https://twitter.com/intent/tweet'
              rel='noreferrer'
              className='level-item'
              aria-label='tweet'
            >
              <span className='icon is-small'>
                <img
                  src={tweet}
                  alt='Tweet'
                />
              </span>
            </a>
            <a
              href='https://twitter.com/intent/tweet?'
              rel='noreferrer'
              className='level-item'
              aria-label='reply'
            >
              <span className='icon is-small'>
                <img
                  className='has-text-success'
                  src={reply}
                  alt='Reply'
                />          
              </span>
            </a>
            <a
              rel='noreferrer'
              href='https://twitter.com/intent/retweet'
              className='level-item' aria-label='like'
            >
              <span className='icon is-small'>
                <img
                  className='has-text-success'
                  src={retweet}
                  alt='Retweet'
                />
              </span>
            </a>
            <a
              href='https://twitter.com/intent/like?'
              rel='noreferrer'
              className='level-item'
              aria-label='like'
            >
              <span className='icon is-small'>
                <img
                  className='has-text-danger'
                  src={like}
                  alt='Reply'
                />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default WebIntents
