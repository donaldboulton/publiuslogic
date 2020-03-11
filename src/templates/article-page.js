import React from 'react'
import RehypeReact from 'rehype-react'
import { Calendar, FileSymlinkFile } from '@styled-icons/octicons/'
import { Timer } from '@styled-icons/material/Timer'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticlePageTemplate from '../components/ArticlePageTemplate'
import Share from '../components/Share'
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
import Toc from '../components/Toc'
import Tags from '../components/SiteTags'
import { Styledh1, MetaPage, TagList } from '../components/styles/ArticleStyles'
import { rhythm } from '../utils/typography'
import { PageBody, TocWrapper, BodyWrapper } from '../components/styles/PageBody'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-counter': Counter,
    'interactive-todo': Todo,
    'interactive-colorbox': ColorBox,
  },
}).Compiler

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark
  const coverHeight = '100%'
  const showToc = post.frontmatter.showToc
  const showAdds = post.frontmatter.showAdds
  const showTags = post.frontmatter.showTags

  return (
    <Layout pageTitle={post.title}>
      <Meta
        data={{
          ...post,
          description: post.meta_description,
        }}
      />
      <section className='post-cover'>
        <PostCover
          postNode={postNode}
          coverHeight={coverHeight}
          coverClassName='post-cover'
        />
      </section>
      <PageBody as='div'>
        <BodyWrapper>
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
          <main>{renderAst(postNode.htmlAst)}</main>
          <ArticlePageTemplate
            content={postNode.html}
            contentComponent={HTMLContent}
            timeToRead={postNode.timeToRead}
            category={post.frontmatter.category}
            date={post.frontmatter.date}
            tweet_id={post.frontmatter.tweet_id}
            title={post.frontmatter.title}
            cover={post.frontmatter.cover}
            meta_title={post.frontmatter.meta_title}
            description={post.frontmatter.meta_description}
            tags={post.frontmatter.tags}
            showToc={post.frontmatter.showToc}
            showTags={post.frontmatter.showTags}
            showAdds={post.frontmatter.showAdds}
          />
          <Share
            title={post.title}
            slug={post.path}
            excerpt={post.meta_description}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <div
            style={{
              display: `flex`,
            }}
          >
            <WebIntents />
          </div>
          <Comments />
        </BodyWrapper>
        <TocWrapper>
          {showToc && <Toc
            style={{
              marginBottom: rhythm(1),
            }}
          />}
          {showTags && <Tags
            style={{
              marginBottom: rhythm(1),
            }}
          />}
          {showAdds && <Adds
            style={{
              marginBottom: rhythm(1),
            }}
          />}
        </TocWrapper>
      </PageBody>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    helmet: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id      
      htmlAst
      timeToRead
      excerpt(pruneLength: 300, truncate: true)                                
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
        showAdds
        showTags
        cover
      }
    }
  }
`
