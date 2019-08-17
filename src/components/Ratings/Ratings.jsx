import React from 'react'
import { StaticQuery } from './Reviews'
import styled from 'styled-components'
import moment from 'moment'

class Ratings extends React.Component {
  constructor (props) {
    super(props)
    this.state = { rating: 0 }
  }

  render (props) {
    const {
      markdownRemark,
      rating,
      allRatingsJson: ratings = [],
    } = props.data
    const { frontmatter, first } = markdownRemark

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
          Rating: {ratingValue !== 0 ? ratingValue.toFixed(1) : null} -{' '}
            {ratings.totalCount} Reviews
          </RatingDiv>
        ) : null}
        {ratings && ratings.edges && ratings.edges.length ? (
          ratings.edges.map((rating, i) => (
            <Message key={rating.node.id} rating={rating} first={i === 0} />
          ))
        ) : (
          <p>Be the first to post a rating on this post</p>
        )}
        <Message
          dangerouslySetInnerHTML={{ __html: rating.fields.messageHtml }}
        />
        <Date>{moment.unix(rating.date).format('LLL')}</Date> by{' '}
      </Rating>
    )
  }
}
// eslint-disable-next-line no-unused-vars
<StaticQuery />

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
const Date = styled.span`
  font-size: .75rem
`
export default Ratings
