import React from 'react'
import { Link } from 'gatsby'
import { Meta, Category, Post, PostGrid, Cover } from './styles'
import { Calendar, FileSymlinkFile } from '@styled-icons/octicons/'
import { Timer } from '@styled-icons/material/Timer'

const PostCard = ({ posts, category, date, timeToRead, postNode, coverClassName, frontmatter, inTitle = false, ...rest }) => {
  return (
    <PostGrid minWidth='17em' maxWidth='50em' gap='1.5em' {...rest}>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <Post
            key={post.id}
          >
            <Link to={post.fields.slug}>
              <div className='container'>
                <Cover src={post.frontmatter.cover} alt={post.frontmatter.title} />
              </div>
            </Link>
            <div className='post-section'>
              <Link aria-label='Post Link' className='h3 a' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <Meta inTitle={inTitle}>
                <div>
                  <span className='subtitle is-size-5'>
                    <Calendar size='1em' /><small>&nbsp;{post.frontmatter.date}</small>&nbsp;
                    <Timer size='1em' />&nbsp;
                    <small key={post.timeToRead}>{post.timeToRead}&nbsp;min read</small>&nbsp;
                    <Category><FileSymlinkFile size='1em' />&nbsp;<small>Category:</small>&nbsp;<Link aria-label='Categories' to='/categories/'><small>{post.frontmatter.category}</small></Link></Category>
                  </span>
                </div>
              </Meta>
              {post.excerpt}
              <br />
              <br />
              <Link
                style={{
                  maxWidth: '12em',
                }}
                aria-label='Keep Reading'
                className='button'
                to={post.fields.slug}
              >
                Keep Reading →
              </Link>
            </div>
          </Post>
        ))}
    </PostGrid>
  )
}

export default PostCard

