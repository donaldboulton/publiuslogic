import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

function RatingsQuery ({ children, slug }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          ratings: allRatingsJson(
            filter: { postPath: { eq: $slug } }
            sort: { fields: [date], order: ASC }
        ) {
          totalCount
            edges {
              node {
                id                
                rating
                fields {
                  messageHtml
                }
              }
            }
          }
        }
      `}
      render={({ allRatingsJson }) =>
        children(
          allRatingsJson.edges.find(
            ({ node }) => node.slug === slug,
          ),
        )
      }
    />
  )
}

RatingsQuery.propTypes = {
  children: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
}

export default React.memo(RatingsQuery)
