import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
  return (
    <>
      <div
        style={{
          display: `flex`,
          maxWidth: `65vw`,
        }}
      >
        <span>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            className='author-avatar'
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
         Developed by:&nbsp; <strong>{author}</strong><Applause />
        </p>
        
      </div>
    </>
  )
}

export default Bio
