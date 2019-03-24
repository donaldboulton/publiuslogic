import React from 'react'
import {Link} from 'gatsby'

const PostCard = ({ posts }) => {
  return (
    <div className='columns is-multiline'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='is-parent column is-6'
            key={post.id}
          >
            <article className='title is-child box'>
              <p>
                <Link className='title has-text-primary is-size-4' to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </p>
              <p>
                <span className='subtitle is-size-5'>
                  <small>{post.frontmatter.date}</small>
                </span>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className='button is-small' to={post.fields.slug}>
                                Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

export default PostCard
