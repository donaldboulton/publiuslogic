import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import { Prism } from 'prismjs'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import SE0 from '../components/SEO'
import Share from '../components/Share'
import config from '../../data/config'

require('prismjs/plugins/toolbar/prism-toolbar.js')

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <section className='section'>
      <SE0
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        meta_desc={post.frontmatter.meta_description}
        cover={post.frontmatter.cover}
        category={post.frontmatter.category}
        slug={post.fields.slug}
      />
      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <ArticleTemplate
              content={post.html}
              contentComponent={HTMLContent}
              cover={post.frontmatter.cover}
              category={post.frontmatter.category}
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
            <DiscussionEmbed shortname={config.disqusShortname} config={config.disqusConfig} />  
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
        category
        meta_title
        meta_description
        tags
      }
    }
  }
`
