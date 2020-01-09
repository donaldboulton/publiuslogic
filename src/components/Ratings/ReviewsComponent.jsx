import React from 'react'
import styled from 'styled-components'
import useReviews from '../../hooks/useReviews'

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

const ReviewsComponent = () => {
  const { allRatingsJson: ratings = [] } = useReviews()

  const ratingValue =
    ratings && ratings.edges
      ? ratings.edges.reduce(
        (accumulator, rating) => accumulator + parseInt(rating.node.rating),
        0
      ) / ratings.totalCount
      : 0
  const ratingCount = ratings && ratings.edges ? ratings.totalCount : 0

  return (
    <>
      <Meta
        data={{
          rating: { ratingValue, ratingCount: ratingCount },
        }}
      />
      {ratings ? (
        <Reviews>
          Rating: {ratingValue !== 0 ? ratingValue.toFixed(1) : null} - {' '}
          {ratings.totalCount} Reviews
        </Reviews>
      ) : null}
    </>
  )
}

export default ReviewsComponent

