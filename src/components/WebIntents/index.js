import React from 'react'
import { Link } from 'gatsby'
import tweet from '../../img/twitter.svg'
import reply from '../../img/reply-action_0.svg'
import retweet from '../../img/retweet-action.svg'
import like from '../../img/like-action.svg'
import config from '../../../data/config'
import { usePostMetadata } from '../hooks/use-site-metadata'
// eslint-disable-next-line valid-typeof
if (typeof window !== undefined) { require('./Intents') }

const WebIntents = ({ slug }) => {
  const { tweet_id } = usePostMetadata()
  let name = config.userTwitter
  let url = config.siteUrl + slug

  return (
    <>
      <div className='column is-1'>
        <Link itemProp='url' name={name} key={tweet_id} to='https://twitter.com/intent/tweet?via=@donboulton'>
          <span className='icon is-small'>
            <img
              src={tweet}
              alt='Tweet'
            />
          </span>
        </Link>
      </div>
      <div className='column is-1'>
        <Link itemProp='url' key={tweet_id} to={`https://twitter.com/intent/tweet?in_reply_to=` + tweet_id + `slug`}>
          <span className='icon is-small'>
            <img
              className='reply-action'
              src={reply}
              alt='Reply'
            />
          </span>
        </Link>
      </div>
      <div className='column is-1'>
        <Link itemProp='url' aria-label='retweet' key={tweet_id} to={`https://twitter.com/intent/retweet?tweet_id=` + tweet_id + `url`}>
          <span className='icon is-small'>
            <img
              className='retweet-action'
              src={retweet}
              alt='Retweet'
            />
          </span>
        </Link>
      </div>
      <div className='column is-1'>
        <Link itemProp='url' aria-label='like' name={name} key={tweet_id} to={`https://twitter.com/intent/like?tweet_id=` + tweet_id + `title`}>
          <span className='icon is-small'>
            <img
              className='like-action'
              src={like}
              alt='Like'
            />
          </span>
        </Link>
      </div>
    </>
  )
}

export default WebIntents
