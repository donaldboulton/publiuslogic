import React from 'react'
import RehypeReact from 'rehype-react'
import { Calendar, FileSymlinkFile } from 'styled-icons/octicons/'
import { Timer } from 'styled-icons/material/Timer'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticlePageTemplate from '../components/ArticlePageTemplate'
import Share from '../components/Share'
import Hr from '../components/Hr'
import Adds from '../components/GoogleAdds'
import Comments from '../components/Comments'
import Layout from '../components/Layout'
import PostCover from '../components/PostCover'
import Counter from '../components/Counter'
import Todo from '../components/Todo'
import Bio from '../components/Bio'
import ColorBox from '../components/ColorBox'
import WebIntents from '../components/WebIntents'
import Meta from '../components/Meta/Meta'
import Rating from '../components/Ratings'
import Toc from '../components/Toc'
import { Styledh1, MetaPage, TagList } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'
import { PageBody } from '../components/styles/PageBody'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-counter': Counter,
    'interactive-todo': Todo,
    'interactive-colorbox': ColorBox,
  },
}).Compiler

const ArticlePage = ({ data, pageContext, allRatingsJson: ratings = [] }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const showToc = post.frontmatter.showToc
  const ratingValue =
    ratings && ratings.edges
      ? ratings.edges.reduce(
        (accumulator, rating) => accumulator + parseInt(rating.node.rating),
        0,
      ) / ratings.totalCount
      : 0
  const ratingCount = ratings && ratings.edges ? ratings.totalCount : 0

  return (
    <Layout pageTitle={post.title}>
      <Meta
        data={{
          ...post,
          description: post.meta_description,
          rating: { ratingValue, ratingCount: ratingCount },
        }}
      />
      <div className='post-cover'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </div>
      <PageBody as='div'>
        <Styledh1>
          {post.frontmatter.title}
        </Styledh1>
        <Bio />
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
        <div>
          <main className='main'>{renderAst(postNode.htmlAst)}</main>
          <ArticlePageTemplate
            content={postNode.html}
            contentComponent={HTMLContent}
            cover={post.cover}
            timeToRead={postNode.timeToRead}
            category={post.category}
            date={post.date}
            tweet_id={post.tweet_id}
            meta_title={post.meta_title}
            description={post.meta_description}
            tags={post.tags}
            title={post.title}
            showToc={post.showToc}
          />
        </div>
        <Share
          title={post.title}
          slug={post.path}
          excerpt={post.meta_description}
        />
        <div
          style={{
            display: `flex`,
          }}
        >
          <Rating
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              left: 0,
              minWidth: 300,
            }}
          />
          <WebIntents />
        </div>
        <Comments />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Adds
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <sidebar>{showToc && <Toc className='toc sticky sidebar' />}</sidebar>
      </PageBody>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    edges: PropTypes.array,
    helmet: PropTypes.object,
  }),
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
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
        showToc
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
    allMarkdownRemark {
      edges {
        next {
          fields {
            slug
          }
          frontmatter {
            title
            cover
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            cover
            title
          }
        }
      }
    }
  }
`
