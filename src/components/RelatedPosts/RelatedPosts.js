import React from 'react'
import { Link } from 'gatsby'

const RelatedPosts = props => {
  const { posts } = props
  if (posts.length === 0) return
  return (
    <div>
      <h1>Related Posts</h1>
      {posts.edges.map(post => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RelatedPosts

