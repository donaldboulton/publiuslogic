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

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  const postNode = data.markdownRemark

  return (
    <Global title={post.frontmatter.title}>
      <Helmet>
        <title>{`${post.frontmatter.title} | ${config.siteTitle}`}</title>
        <link rel='canonical' href={`${post.fields.slug}`} />
      </Helmet>
      <Seo
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        url={post.fields.slug}
        image={post.frontmatter.cover}
        postNode={postNode}
        postSEO
      />
      <section className='hero'>
        <div>
          <img className='full-width-image' src={post.frontmatter.cover} alt={post.frontmatter.title} />
        </div>
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
      }
    }
  }
`