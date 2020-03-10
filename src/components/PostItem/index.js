import React from 'react'
import { Link } from 'gatsby'
import { Meta, Category } from './styles'
import { Calendar, FileSymlinkFile } from '@styled-icons/octicons/'
import { Timer } from '@styled-icons/material/Timer'

const PostItem = ({ posts, logged, inTitle = false }) => {
  return (
    <section className='section'>
      <div className='container content'>
        <div className='columns is-multiline is-10 is-offset-1'>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'article-page')
            .map(({ node: post }) => (
              <div
                className='is-parent column is-6'
                key={post.id}
              >
                <article className='is-child box'>
                  <p>
                    <Link
                      className={logged ? 'has-text-primary' : 'has-text-unlogin'}
                      to={logged ? post.fields.slug : '/login'}
                    >
                      {post.frontmatter.title}
                      <figure className='image is-2by1'>
                        <img src={post.frontmatter.cover} alt={post.frontmatter.title} />
                      </figure>
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    <span className='post-excerpt'>{post.excerpt}</span>

                    <Meta inTitle={inTitle}>
                      <div>
                        <span className='subtitle is-size-5'>
                          <Calendar size='1em' /><small>&nbsp;{post.frontmatter.date}</small>&nbsp;
                          <Timer size='1em' />&nbsp;
                          <small key={post.timeToRead}>{post.timeToRead}&nbsp;min</small>&nbsp;
                          <Category><FileSymlinkFile size='1em' />&nbsp;<small>List:</small>&nbsp;<Link aria-label='Categories' to='/categories/'><small>{post.frontmatter.category}</small></Link></Category>
                        </span>
                      </div>
                    </Meta>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link
                      className={logged ? 'button is-small' : 'button is-small'}
                      to={logged ? post.fields.slug : '/login'}
                    >
                      Keep Reading →
                    </Link>
                  </p>
                </article>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default PostItem
