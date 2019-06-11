import React, { Component } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import config from '../../../data/config'
import './styles.sass'

class Share extends Component {
  render () {
    const { title, slug, excerpt, mobile } = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + slug

    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : '')

    return (
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
        <LinkedinShareButton
          url={url}
          title={title}
          description={excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <div className='share-count'>{filter(count)}</div>}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <PinterestShareButton url={url}>
          <PinterestIcon round size={iconSize} />
        </PinterestShareButton>
      </div>
    )
  }
}

export default Share
