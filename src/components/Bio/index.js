import React from 'react'
import config from '../../../_data/config'
import { useStaticQuery, graphql } from 'gatsby'
import GithubButtonsRepo from '../GithubButtonsRepo'
import { GithubButtons } from '../styles/ArticleStyles'
import { Twitter } from 'styled-icons/fa-brands'
import github from '../../../static/img/github.svg'
import Image from 'gatsby-image'
import { rhythm } from '../../utils/typography'

const Bio = (slug) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/donald-boulton.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }      
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const title = config.userTwitter
  const url = config.siteUrl + slug
  return (
    <div className='columns'>
      <div
        className='column is-10'
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
        Written by <strong>{author}</strong>  who lives and works in OKC OK.&nbsp;
          <a
            itemProp='url'
            rel='noopener noreferrer'
            target='_blank'
            data-screen-name='donboulton'
            data-screen-data-show-count='true'
            data-show-count='true'
            title={title}
            key={url}
            url={url}
            className='twitter-follow-button'
            aria-label='Follow'
            data-related='donboulton'
            data-show-screen-name='false'
            href='https://twitter.com/donboulton?ref_src=twsrc%5Etfw'
          >
            <span>
              <Twitter size='14' color='#1b95e0' />
            </span>
            <span>&nbsp;Follow</span>
          </a>&nbsp;<GithubButtons><GithubButtonsRepo /></GithubButtons>
        </p>
      </div>
      <div className='column is-pulled-right'>
        <a title='Github' href='https://github.com/donaldboulton/publiuslogic' target='_blank' role='button' rel='noopener noreferrer'>
          <img
            style={{
              height: 45,
              width: 45,
            }}
            src={github}
            alt='PubliusLogic Repo'
          />
        </a>
      </div>
    </div>
  )
}

export default Bio
