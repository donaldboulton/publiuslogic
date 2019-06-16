import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import AuthorList from './AuthorList'

const Author = ({ authors }) => (

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
    const authorData = data.hasura.author
    return (
      <div>
        <h1>My Authors </h1>
        <AuthorList authors={authorData} />
      </div>
    )
  }
  }
  />
)

export default Author

