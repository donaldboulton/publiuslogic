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
  const { path } = data.markdownRemark.frontmatter
  const { siteUrl } = data.site.siteMetadata
  return (
    <>
      <div
        style={{
          display: `flex`,
        }}
      >
        <span>
          <Image
            className='author-avater'
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginBottom: 0,
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
        </p>
        <Applause />
      </div>
    </>
  )
}

export default Bio
