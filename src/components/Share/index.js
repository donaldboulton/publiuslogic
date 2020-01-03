import React, { Component } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  TumblrShareButton,
  PinterestShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  TumblrShareCount,
  TumblrIcon,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  RedditIcon,
} from 'react-share'
import config from '../../../_data/config'
import './styles.sass'

class Share extends Component {
  render () {
    const { title, path, excerpt, mobile } = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + path

    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : '')

    return (
      <>
        <div className='social-links'>
          <RedditShareButton url={url} title={title}>
            <RedditIcon round size={iconSize} />
            <RedditShareCount url={url}>
              {count => <div className='share-count'>{filter(count)}</div>}
            </RedditShareCount>
          </RedditShareButton>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={excerpt}>
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {count => <div className='share-count'>{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <TumblrShareButton
            url={url}
            title={title}
            description={excerpt}
          >
            <TumblrIcon round size={iconSize} />
            <TumblrShareCount url={url}>
              {count => <div className='share-count'>{filter(count)}</div>}
            </TumblrShareCount>
          </TumblrShareButton>
          <PinterestShareButton url={url}>
            <PinterestIcon round size={iconSize} />
          </PinterestShareButton>
        </div>
      </>
    )
  }
}

export default Share
