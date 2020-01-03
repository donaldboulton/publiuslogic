import React from 'react'
import Img from 'gatsby-image'

export default (props) => {
  return (
    <figure className='Cover'>
      {props.cover.childImageSharp ? (
        <Img sizes={props.cover.childImageSharp.sizes} />
      ) : (
        <img src={props.cover.publicURL} className='post-cover' />
      )}
    </figure>
  )
}

