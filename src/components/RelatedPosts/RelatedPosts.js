import React from 'react'
import { Link } from 'gatsby'
import { Styledh1 } from '../components/styles/ArticleStyles'

const RelatedPosts = props => {
  const { posts } = props
  if (posts.length === 0) return
  return (
    <div>
      <Styledh1>Related Posts</Styledh1>
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

