import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../data/config'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Seo from '../components/SEO'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Global from '../components/Global'
import PostCover from '../components/PostCover'

const ArticlePage = ({ data, canonical }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark

  return (
    <Global title={post.frontmatter.title}>
      <Helmet
        htmlAttributes={config.siteLanguage}
        title={`${post.frontmatter.title} | ${config.siteTitle}`}
        titleTemplate={post.frontmatter.title ? `%s` : `%s | ${config.siteTitle}`}
        link={
          post.frontmatter.canonical
            ? [{ rel: 'canonical', key: canonical, href: canonical }]
            : []
        }
      />
      <Seo
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        url={post.fields.slug}
        image={post.frontmatter.cover}
        postNode={postNode}
        postSEO
        canonical={post.frontmatter.canonical}
      />
      <section className='hero'>
        <PostCover
          postNode={postNode}
          coverClassName='post-cover'
        />
      </section>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                cover={post.frontmatter.cover}
                content={post.html}
                contentComponent={HTMLContent}
                categorys={post.frontmatter.categorys}
                date={post.frontmatter.date}
                tweet_id={post.frontmatter.tweet_id}
                meta_title={post.frontmatter.meta_title}
                description={post.frontmatter.meta_description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
              />
              <Share
                title={post.frontmatter.title}
                slug={post.fields.slug}
                excerpt={post.frontmatter.meta_description}
              />
              <hr />
              <Comments />
            </div>
          </div>
        </div>
      </section>
    </Global>
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
      html
      fields {
        slug
      }      
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tweet_id
        categorys
        meta_title
        meta_description
        tags
        cover
        canonical
      }
    }
  }
`
