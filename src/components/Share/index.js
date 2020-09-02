import React, { Component } from 'react'
import Email from '../Email'
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
  EmailIcon,
} from 'react-share'
import { GithubButtonsWrapper } from '../GithubButtonsRepo/styles'

class Share extends Component {
  render () {
    const { title, excerpt, mobile } = this.props
    // Default values
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : '')

    return (
      <>
        <div
          className='social-links'
        >
          <GithubButtonsWrapper>
            <span
              css='grid-area: sponsor;'
            >
              <RedditShareButton url={url} title={title}>
                <RedditIcon round size={iconSize} />
                <RedditShareCount url={url}>
                  {count => <div className='share-count'>{filter(count)}</div>}
                </RedditShareCount>
              </RedditShareButton>
            </span>
            <span
              css='grid-area: issues;'
            >
              <TwitterShareButton url={url} title={title}>
                <TwitterIcon round size={iconSize} />
              </TwitterShareButton>
            </span>
            <span
              css='grid-area: follow;'
            >
              <FacebookShareButton url={url} quote={excerpt}>
                <FacebookIcon round size={iconSize} />
                <FacebookShareCount url={url}>
                  {count => <div className='share-count'>{filter(count)}</div>}
                </FacebookShareCount>
              </FacebookShareButton>
            </span>
            <span
              css='grid-area: watch;'
            >
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
            </span>
            <span
              css='grid-area: star;'
            >
              <PinterestShareButton url={url}>
                <PinterestIcon round size={iconSize} />
              </PinterestShareButton>
            </span>
            <span
              css='grid-area: fork;'
            >
              <Email
                className='button-transparent'
                url={url}
                subject={title}
                body={excerpt}
              >
                <EmailIcon size={iconSize} round />
              </Email>
            </span>
          </GithubButtonsWrapper>
        </div>
      </>
    )
  }
}

export default Share
