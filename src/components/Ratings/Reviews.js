import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Reviews = () => {
  const data = useStaticQuery(graphql`
    {
      allRatingsJson(filter: {postPath: {eq: "id"}}, sort: {fields: date, order: ASC}) {
        totalCount
        edges {
          node {
            id
            rating
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Reviews
