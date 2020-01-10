import React from 'react'
import RehypeReact from 'rehype-react'
import Menu2 from 'react-burger-menu/lib/menus/stack'
import { Calendar, FileSymlinkFile } from 'styled-icons/octicons/'
import { Tags } from 'styled-icons/fa-solid/'
import { Timer } from 'styled-icons/material/Timer'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Layout from '../components/Layout'
import PostCover from '../components/PostCover'
import Counter from '../components/Counter'
import HitCounter from '../components/HitCounter'
import Todo from '../components/Todo'
import Bio from '../components/Bio'
import ColorBox from '../components/ColorBox'
import WebIntents from '../components/WebIntents'
import TableOfContents from '../components/Toc'
import Meta from '../components/Meta/Meta'
import Rating from '../components/Ratings'
import Reviews from '../components/Ratings/ReviewsComponent'
import PrevNext from '../components/PrevNext/PrevNext'
import { BookContent } from 'styled-icons/boxicons-regular/'
import { StyledTableMenu, Styledh1, Title, TocIcon, Time, Date, Category, Tag } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-counter': Counter,
    'interactive-hit-counter': HitCounter,
    'interactive-todo': Todo,
    'interactive-colorbox': ColorBox,
  },
}).Compiler

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark
  const coverHeight = '100%'

  return (
    <Layout pageTitle={post.title}>
      <Meta
        data={{
          ...post,
          description: post.meta_description,
        }}
      />
      <section className='hero'>
        <StyledTableMenu>
          <Menu2 right customBurgerIcon={<BookContent />}>
            <Title>
              <TocIcon />
                | Page Contents
            </Title>
            <TableOfContents />
          </Menu2>
        </StyledTableMenu>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='column is-10 is-offset-1'>
          <section className='section'>
            <Styledh1>
              {post.frontmatter.title}
            </Styledh1>
          </section>
          <Bio />
          <div className='columns is-desktop is-vcentered'>
            <div className='column is-offset-1'>
              <span className='subtitle is-size-5'>
                <Calendar size='0.9em' />&nbsp;
                <Date><small>{post.frontmatter.date}</small></Date>&nbsp;
                <Timer size='0.9em' />&nbsp;
                <Time><small>{post.timeToRead}</small>&nbsp;min read</Time>&nbsp;
                <Tags size='0.9em' />&nbsp;
                <Tag><small>{post.frontmatter.tags}</small></Tag>&nbsp;
                <FileSymlinkFile size='0.9em' />&nbsp;
                <Category><Link aria-label='Categories' to='/categories/'><small>{post.frontmatter.category}</small></Link></Category>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div>{renderAst(postNode.htmlAst)}</div>
              <ArticleTemplate
                content={postNode.html}
                contentComponent={HTMLContent}
                cover={post.cover}
                readingTime={postNode.timeToRead}
                category={post.category}
                date={post.date}
                tweet_id={post.tweet_id}
                meta_title={post.meta_title}
                description={post.meta_description}
                tags={post.tags}
                title={post.title}
              />
              <Share
                title={post.title}
                slug={post.path}
                excerpt={post.meta_description}
              />
              <hr />
              <div className='container content'>
                <div className='columns is-desktop is-vcentered' style={{ marginTop: `2rem` }}>
                  <Reviews />
                  <div className='column is-7'>
                    <Rating />
                  </div>
                  <div className='column is-pulled-right'>
                    <WebIntents />
                  </div>
                </div>
              </div>
              <Comments />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
              <section className='section'>
                <div className='container content'>
                  <div className='column is-10 is-offset-1'>
                    <PrevNext />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id      
      htmlAst
      timeToRead
      tableOfContents
      excerpt(pruneLength: 200)                          
      fields {
        slug
      }      
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        tweet_id
        path
        category
        meta_title
        meta_description
        tags
        cover
      }
    }
  }
`
