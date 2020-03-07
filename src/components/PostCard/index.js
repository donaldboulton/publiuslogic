import React from 'react'
import { Link } from 'gatsby'
import { Grid, Cell } from 'styled-css-grid'
import { Meta, Category, Cover } from './styles'
import { Calendar, FileSymlinkFile } from 'styled-icons/octicons/'
import { Timer } from 'styled-icons/material/Timer'
import { rhythm } from '../../utils/typography'
import { BorderBox } from '../styles/BorderBox'

const PostCard = ({ posts, category, date, timeToRead, inTitle = false }) => {
  return (
    <Grid columns='repeat(auto-fit,minmax(400px,1fr))'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <Cell
            key={post.id}
          >
            <BorderBox>
              <Link to={post.fields.slug}>
                <Cover src={post.frontmatter.cover} alt={post.frontmatter.title} />
              </Link>
              <Link aria-label='Post Link' className='h3' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
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
              <Link aria-label='Keep Reading' className='button is-small' to={post.fields.slug}>
                Keep Reading →
              </Link>
            </BorderBox>
          </Cell>
        ))}
    </Grid>
  )
}

export default PostCard

