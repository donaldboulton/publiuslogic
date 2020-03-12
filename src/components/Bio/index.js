import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GithubButtonsRepo from '../GithubButtonsRepo'
import { GithubButtons } from '../styles/ArticleStyles'
import { Twitter } from '@styled-icons/fa-brands'
import Applause from '../ApplauseButton'
import Image from 'gatsby-image'
import { rhythm } from '../../utils/typography'

const Bio = () => {
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
          siteUrl
          gitHubEditMe
          social {
            twitter
          }
        }
      }
      markdownRemark {
        frontmatter {
          path
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  const { twitter } = data.site.siteMetadata
  const { path } = data.markdownRemark.frontmatter
  const { siteUrl } = data.site.siteMetadata
  return (
    <div>
      <div
        style={{
          display: `flex`,
        }}
      >
        <span>
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
          <svg className='half-circle' width='70px' height='70px'>
            <use xlinkHref='#half-circle' />
            <svg id='half-circle' viewBox='0 0 106 57'><path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4' /></svg>
          </svg>
        </span>
        <p>
          Written by <strong>{author}</strong>
          <GithubButtons><GithubButtonsRepo /></GithubButtons>
          <a
            itemProp='url'
            rel='noopener noreferrer'
            target='_blank'
            data-screen-name='donboulton'
            data-screen-data-show-count='true'
            data-show-count='true'
            title={twitter}
            key={siteUrl}
            url={siteUrl}
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
          </a>
        </p>
        <Applause />
      </div>
    </div>
  )
}

export default Bio
