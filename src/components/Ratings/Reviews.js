import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Reviews from './ReviewsComponent'
class reviewsWrapper extends React.Component {
  render () {
    const { rating, postPath, ratingValue, date, ratingCount, rich = false, allRatingsJson: ratings = [] } = this.props
    return (
      <StaticQuery
        query={graphql`
          {
            allRatingsJson(filter: {postPath: {eq: "slug"}}, sort: {fields: date, order: ASC}) {
              totalCount
              edges {
                node {
                  id
                  rating
                }
              }
            }
          }
        `}
        render={data => (
          <Reviews
            fileEdges={data.allFile.edges}
            postPath={postPath}
            ratings={rating}
            ratingValue={data.ratingValue}
            ratingCount={data.ratingCount}
            date={date}
          />
        )}
      />
    )
  }
}

export default reviewsWrapper
