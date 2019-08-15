import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Rating = styled.div`
  ${({ first }) =>
    first
      ? `border-top: 1px #434343;`
      : ``} border-bottom: 1px solid black;
  font-size: 0.75rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
`
const Message = styled.div`
  font-size: 1rem;
  font-weight: 400;
`
const RatingDiv = styled.div`
  font-size: 1.5rem
`
const Date = styled.span``

const Element = ({ props, location, first, rating }) => {
  const {
    markdownRemark,
    allRatingsJson: ratings = [],
  } = props.data
  const { frontmatter } = markdownRemark

  const ratingValue =
    ratings && ratings.edges
      ? ratings.edges.reduce(
        (accumulator, rating) => accumulator + parseInt(rating.node.rating),
        0
      ) / ratings.totalCount
      : 0
  const ratingCount = ratings && ratings.edges ? ratings.totalCount : 0

  return (
    <Rating first={first}>
      <div
        data={{
          ...frontmatter,
          rating: { ratingValue, ratingCount: ratingCount },
        }}
        rich
      />
      {ratings ? (
        <RatingDiv>
          Rating: {ratingValue !==0 ? ratingValue.toFixed(1) : null} -{' '}
          {ratings.totalCount} Reviews
        </RatingDiv>
      ) : null}
      <Message
        dangerouslySetInnerHTML={{ __html: rating.fields.messageHtml }}
      />
      {/* Date is `timestamp-seconds` format. Convert with `moment.unix()` */}
      <Date>{moment.unix(rating.date).format('LLL')}</Date> by{' '}
    </Rating>
  )
}

export default Element

