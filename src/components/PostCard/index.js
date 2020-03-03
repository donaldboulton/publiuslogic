import React from 'react'
import { Link } from 'gatsby'
import { Meta, Category, PostGrid, Cover } from './styles'
import { Calendar, FileSymlinkFile } from 'styled-icons/octicons/'
import { Timer } from 'styled-icons/material/Timer'

const PostCard = ({ posts, category, date, timeToRead, inTitle = false }) => {
  return (
    <PostGrid minWidth='17em' maxWidth='24em' gap='1.5em'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <article
            key={post.id}
          >
            <p>
              <Link to={post.fields.slug}>
                <Cover src={post.frontmatter.cover} alt={post.frontmatter.title} />
              </Link>
              <p>
                <Link aria-label='Post Link' className='is-size-4' to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </p>
              <Meta inTitle={inTitle}>
                <div>
                  <span className='subtitle is-size-5'>
                    <Calendar size='1em' /><small>&nbsp;{post.frontmatter.date}</small>&nbsp;
                    <Timer size='1em' />&nbsp;
                    <small key={post.timeToRead}>{post.timeToRead}&nbsp;min</small>&nbsp;
                    <Category><FileSymlinkFile size='1em' />&nbsp;<small>Category:</small>&nbsp;<Link aria-label='Categories' to='/categories/'><small>{post.frontmatter.category}</small></Link></Category>
                  </span>
                </div>
              </Meta>
              {post.excerpt}
              <br />
              <br />
              <Link aria-label='Keep Reading' className='button is-small' to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </article>
        ))}
    </PostGrid>
  )
}

export default PostCard
