import React from 'react'
import AuthorList from './AuthorList'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        Hasura {
          huroku {
            author {
              id
              name
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h2>My Authors </h2>
        <AuthorList authors={data.hasura.author} />
      </div>
    )}
  />
)

