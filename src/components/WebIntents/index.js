import React from 'react'

import tweet from '/img/twitter.svg'
import reply from '/img/reply-action_0.png'
import retweet from '/img/retweet-action.png'
import like from '/img/like-action.png'

const WebIntents = () => {
    
  return (
    <div className='columns is-mobile'>
        <div className='column'>
          <a 
            href='https://twitter.com/intent/tweet'
            rel='noreferrer' 
          >
          <img
              src={tweet}
              alt='Tweet'
              style={{ width: '32px', height: '32px' }}
           />
          </a>
        </div>
      <div className='column'>
        <a 
          href='https://twitter.com/intent/tweet?'
          rel='noreferrer' 
        >
          <img
             src={reply}
             alt='Reply'
             style={{ width: '32px', height: '32px' }}
          />
        </a>
      </div>
      <div className='column'>
        <a rel='noreferrer' href='https://twitter.com/intent/retweet'>
        <img
            src={retweet}
            alt='Retweet'
            style={{ width: '32px', height: '32px' }}
        />
        </a>
      </div>
      <div className='column'>
        <a rel='noreferrer' href='https://twitter.com/intent/like'>
        <img
            src={like}
            alt='Twitter likes'
            style={{ width: '32px', height: '32px' }}
        />
        </a>
      </div>
    <div>
   )
}

export default WebIntents
