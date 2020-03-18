import React from 'react'
import { Link } from 'gatsby'
import { Meta, Category, Post, PostContent, PostGrid, Cover } from './styles'
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
              <Link
                style={{
                  marginLeft: '1em',
                }}
                aria-label='Post Link'
                className='h3 a'
                to={post.fields.slug}
              >
                {post.frontmatter.title}
              </Link>
              <Meta inTitle={inTitle}>
                <div
                  style={{
                    marginLeft: '1em',
                  }}
                >
                  <span className='subtitle is-size-5'>
                    <Calendar size='1em' /><small>&nbsp;{post.frontmatter.date}</small>&nbsp;
                    <Timer size='1em' />&nbsp;
                    <small key={post.timeToRead}>{post.timeToRead}&nbsp;min read</small>&nbsp;
                    <Category><FileSymlinkFile size='1em' />&nbsp;<small>Category:</small>&nbsp;<Link aria-label='Categories' to='/categories/'><small>{post.frontmatter.category}</small></Link></Category>
                  </span>
                </div>
              </Meta>
              <PostContent>
                <div
                  style={{
                    marginBottom: '1em',
                  }}
                >
                  {post.excerpt}
                </div>
                <div
                  style={{
                    maxWidth: '12em',
                    marginBottom: '2em',
                  }}
                >
                  <Link
                    aria-label='Keep Reading'
                    className='button'
                    to={post.fields.slug}
                  >
                    Keep Reading 👉
                  </Link>
                </div>
              </PostContent>
            </div>
          </Post>
        ))}
    </PostGrid>
  )
}

export default PostCard

