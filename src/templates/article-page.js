import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import SE0 from '../components/SEO'
import Share from '../components/Share'

if (typeof window !== `undefined`) {
  const module = require('prismjs')
}

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  const disqusShortname = 'mansbooks-1'
  const disqusConfig = {
    identifier: post.fields.slug,
    title: post.frontmatter.title,
  }
  return (
    <section className='section'>
      <SE0
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        meta_desc={post.frontmatter.meta_description}
        cover={post.frontmatter.cover}
        slug={post.fields.slug}
      />
      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <ArticleTemplate
              content={post.html}
              contentComponent={HTMLContent}
              cover={post.frontmatter.cover}
              meta_title={post.frontmatter.meta_title}
              meta_desc={post.frontmatter.meta_description}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
            />
            <Share
              title={post.frontmatter.title}
              slug={post.fields.slug}
              excerpt={post.frontmatter.meta_description}
            />
            <hr />
            <div itemScope itemType='https://schema.org/UserComments'>
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
          </div>
        </div>
      </div>
    </section>
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
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`
