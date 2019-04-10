import React from 'react'
import AuthorList from './AuthorList'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allFile (filter: { 
          name: { eq : "authors" } 
          sourceInstanceName: { eq : "authors" }
        }) {
          edges {
            node {
              childAuthorsJson {
                name
            }
          }
        }
      }
    }
  `}
    render={data => (
      <div>
        <h2>My Authors </h2>
        <AuthorList authors={data.author} />
      </div>
    )}
  />
)

