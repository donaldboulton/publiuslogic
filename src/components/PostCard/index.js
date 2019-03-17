import React from 'react'
import {Link} from 'gatsby'

const PostCard = ({posts}) => {
  return (
    <div className='container'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({node: post}) => (
          <div
            className='content'
            style={{border: '1px solid #434040', padding: '2em 4em'}}
            key={post.id}
          >
            <p>
              <Link className='has-text-primary' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-small is-primary' to={post.fields.slug}>
                                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
    </div>
  )
}

export default PostCard
