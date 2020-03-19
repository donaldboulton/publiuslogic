import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Twitter } from '@styled-icons/fa-brands'
import Applause from '../ApplauseButton'
import Image from 'gatsby-image'

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
  const path = data.path || ''
  const rootUrl = 'https://publiuslogic.com'
  const url = rootUrl + `/${path}`
  return (
    <>
      <div
        style={{
          display: `flex`,
          maxWidth: `35vw`,
        }}
      >
        <span>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginBottom: 0,
              marginRight: `1em`,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </span>
        <p>
          Written by <strong>{author}</strong>
          <a
            itemProp='url'
            rel='noopener noreferrer'
            target='_blank'
            data-screen-name='donboulton'
            data-screen-data-show-count='true'
            data-show-count='true'
            title={twitter}
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
          </a>
        </p>
        <Applause />
      </div>
    </>
  )
}

export default Bio
