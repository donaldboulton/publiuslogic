import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import AuthorList from './AuthorList'

const Index = ({ data }) => (
  <StaticQuery query={graphql`
    query AuthorQuery {
    hasura {
      author {
        id
        name
      }
    }
  }
  `}
    render={data => {
    return (
      <div>
        <h1>My Authors </h1>
        <AuthorList authors={data.hasura.author} />
      </div>
    )
  }
  }
  />
)

export default Index
