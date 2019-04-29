import React from 'react'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import SE0 from '../components/SEO'
import Share from '../components/Share'
import Comments from '../components/Comments'
import Layout from '../components/Layout'


const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <section className='section'>
        <SE0
          title={post.frontmatter.title}
          meta_title={post.frontmatter.meta_title}
          meta_desc={post.frontmatter.meta_description}
          category={post.frontmatter.category}
          slug={post.fields.slug}
          date={post.frontmatter.date}
          cover={post.frontmatter.cover && post.fields.slug.cover}
        />
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                cover={post.frontmatter.cover}
                content={post.html}
                contentComponent={HTMLContent}
                category={post.frontmatter.category}
                date={post.frontmatter.date}
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
              <Comments />
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
