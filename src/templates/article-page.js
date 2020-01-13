import React from 'react'
import RehypeReact from 'rehype-react'
import { kebabCase } from 'lodash'
import Menu2 from 'react-burger-menu/lib/menus/stack'
import { Calendar, FileSymlinkFile } from 'styled-icons/octicons/'
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
import Meta from '../components/Meta/Meta'
import Rating from '../components/Ratings'
import Toc from '../components/Toc'
import { Tags } from 'styled-icons/fa-solid/Tags'
import PrevNext from '../components/PrevNext'
import { StyledTableMenu, Styledh1, Title, TableOfContents, PostTocIcon, MetaPage, TagList, Reviews } from '../components/styles/ArticleStyles'
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

const ArticlePage = ({ data, pageContext, location, data: { allMarkdownRemark: { group }, allRatingsJson: ratings = [] } }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark
  const { slug, prev, next } = pageContext
  const coverHeight = '100%'
  const ratingValue =
    ratings && ratings.edges
      ? ratings.edges.reduce(
        (accumulator, rating) => accumulator + parseInt(rating.node.rating),
        0,
      ) / ratings.totalCount
      : 0
  const ratingCount = ratings && ratings.edges ? ratings.totalCount : 0

  return (
    <Layout pageTitle={post.title} path={location.pathname}>
      <StyledTableMenu>
        <Menu2 right customBurgerIcon={<Tags />}>
          <Title>
            <PostTocIcon />
                | Site Tags
          </Title>
          <TableOfContents>
            <ul className='linktoc taglist field is-grouped'>
              {group.map(tag => (
                <li className='control' key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <div className='tags has-addons is-large'>
                      <span aria-label='Tag' className='tag is-primary'>{tag.fieldValue}</span>
                      <span aria-label='Tag Count' className='tag is-dark'>{tag.totalCount}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </TableOfContents>
        </Menu2>
      </StyledTableMenu>
      <Toc />
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <Meta
        data={{
          ...post,
          description: post.meta_description,
          rating: { ratingValue, ratingCount: ratingCount },
        }}
      />
      <section>
        <div className='column is-10 is-offset-1'>
          <section className='section'>
            <Styledh1>
              {post.frontmatter.title}
            </Styledh1>
          </section>
          <Bio />
          <div className='columns is-desktop is-vcentered'>
            <div className='column is-offset-1'>
              <MetaPage>
                <span>
                  <Calendar size='1.2em' />
                &ensp;
                  {post.frontmatter.date}
                </span>
                <span>
                  <Timer size='1.2em' />
                &ensp;
                  {post.timeToRead} min read
                </span>
                <Link aria-label='Tags' to='/tags/'><TagList tags={post.frontmatter.tags} /></Link>
                <span>
                  <FileSymlinkFile size='1.2em' />
                  &ensp;
                  Category:
                  &ensp;
                  <Link aria-label='Categories' to='/categories/'>{post.frontmatter.category}</Link>
                </span>
              </MetaPage>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <main>{renderAst(postNode.htmlAst)}</main>
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
                  <div className='column is-7'>
                    <div>
                      {ratings ? (
                        <Reviews>
                        Rating: {ratingValue !== 0 ? ratingValue.toFixed(1) : null} - {' '}
                          {ratings.totalCount} Reviews
                        </Reviews>
                      ) : null}
                    </div>
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
                    <PrevNext
                      prev={prev && prev.frontmatter.slug}
                      next={next && next.frontmatter.slug}
                      label='post'
                    />
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
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
}

ArticlePage.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id      
      htmlAst
      timeToRead
      excerpt(pruneLength: 200, truncate: true)                                
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        tweet_id
        path
        slug
        category
        meta_title
        meta_description
        tags
        cover
      }
    }
    allRatingsJson(filter: {postPath: {ne: "slug"}}, sort: {fields: [date], order: ASC}) {
      totalCount
      edges {
        node {
          rating
          date
          fields {
            messageHtml
          }
        }
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
