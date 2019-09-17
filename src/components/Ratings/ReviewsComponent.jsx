import React, { Component } from 'react'
import styled from 'styled-components'

const Meta = styled.div`
  font-size: 1rem;
  margin-left: 8.33333%;
  flex: none;
  max-width: 83.33333%;
  color: silver;
`

const Reviews = styled.div`
  font-size: 1rem;
  margin-left: 9.33333%;
  flex: none;
  max-width: 83.33333%;
  color: silver;
`

class ReviewsComponent extends Component {
  render () {
    const ratingValue =
    ratings && ratings.edges
      ? ratings.edges.reduce(
        (accumulator, rating) => {
          return accumulator + parseInt(rating.node.rating)
        },
        0
      ) / ratings.totalCount
      : 0
    const ratingCount = ratings && ratings.edges ? ratings.totalCount : 0
    
    return (      
      <Meta
        data={{
          ...frontmatter,
          rating: { ratingValue, ratingCount: ratingCount },
        }}
        rich
      />
      {ratings ? (
        <Reviews>
          Rating: {ratingValue !== 0 ? ratingValue.toFixed(1) : null}4.5 -{' '}
          {ratings.totalCount} 36 Reviews
        </Reviews>
      ) : null}
    )
  }
}

export default ReviewsComponent

