import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { useStaticQuery, graphql } from "gatsby"

const VideoPlayer = () => {
  const data = useStaticQuery(graphql`
    query VideoQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              secure_url
            }
          }
        }
      }
    }
  `)
  
  return (
    <div className='player-wrapper'>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <ReactPlayer
            url={edge.node.frontmatter.secure_Url}
            className='react-player'
            playing
            controls='true'
            volume='1'
            width='100%'
            height='100%'
          />
        )
      })}
    </div>
  )
}
export default VideoPlayer