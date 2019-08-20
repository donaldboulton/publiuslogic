import React from 'react'
import { Link } from 'gatsby'
import { Meta } from './styles'
import { Calendar, FileSymlinkFile } from 'styled-icons/octicons/'

const PostCard = ({ posts, category, date, inTitle = false }) => {
  return (
    <section className='section'>
      <div className='container'>
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
                    <Link to={post.fields.slug}>
                      <figure className='image is-2by1'>
                        <img src={post.frontmatter.cover} alt={post.frontmatter.title} />
                      </figure>
                    </Link>
                    <p>
                      <Link className='title has-text-primary is-size-4' to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </p>
                    <Meta inTitle={inTitle}>
                      <div>
                        <span className='subtitle is-size-5'>
                          <Calendar size='1.2em' /><small>&nbsp;{post.frontmatter.date}</small>
                          <span className='is-pulled-right'>&nbsp;&nbsp;Category&nbsp;<FileSymlinkFile size='1.2em' /><Link to={`/categories/`}><small>&nbsp;{post.frontmatter.category}</small></Link></span>
                        </span>
                      </div>
                    </Meta>
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
      </div>
    </section>
  )
}

export default PostCard
