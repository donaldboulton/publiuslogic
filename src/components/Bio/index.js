/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import config from '../../../_data/config'
import { useStaticQuery, graphql } from 'gatsby'
import { Twitter } from 'styled-icons/fa-brands'
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
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.5),
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
      </p>
      <p>
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
        </a>
      </p>
    </div>
  )
}

export default Bio
